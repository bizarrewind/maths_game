#!/usr/bin/env python3
"""Scrape and download textbook PDFs from a Looma chapters page."""

import argparse
import http.cookiejar
import os
import re
import urllib.parse
import urllib.request
from pathlib import Path


DEFAULT_URL = (
    "https://looma.website/chapters"
    "?class=class7&grade=Grade%207&subject=math&prefix=7M"
)


def build_opener() -> urllib.request.OpenerDirector:
    """Create a URL opener with cookie support and a browser-like User-Agent."""
    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    opener.addheaders = [
        ("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36")
    ]
    return opener


def fetch_chapters_html(opener: urllib.request.OpenerDirector, url: str) -> str:
    """Initialize Looma cookies on the root page, then fetch the chapters HTML."""
    parsed = urllib.parse.urlparse(url)
    root_url = f"{parsed.scheme}://{parsed.netloc}/"
    with opener.open(root_url, timeout=30) as resp:
        resp.read()
    with opener.open(url, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def extract_pdf_urls(html: str, page_url: str) -> list[str]:
    """Extract unique PDF URLs from data-fp / data-fn attributes in chapter buttons."""
    # Match button tags containing both data-fp and data-fn attributes
    button_pattern = re.compile(r"<button\b[^>]*>", re.IGNORECASE | re.DOTALL)
    fp_pattern = re.compile(r"""data-fp=['"]([^'"]+)['"]""")
    fn_pattern = re.compile(r"""data-fn=['"]([^'"]+)['"]""")

    seen: set[str] = set()
    pdf_urls: list[str] = []

    for tag in button_pattern.findall(html):
        fp_match = fp_pattern.search(tag)
        fn_match = fn_pattern.search(tag)
        if not (fp_match and fn_match):
            continue

        fp = fp_match.group(1)
        fn = fn_match.group(1)
        if not fn.lower().endswith(".pdf"):
            continue

        # Normalize relative ../ paths against the site root
        base_dir = urllib.parse.urljoin(page_url, fp)
        full_url = urllib.parse.urljoin(base_dir, fn)
        if full_url not in seen:
            seen.add(full_url)
            pdf_urls.append(full_url)

    return pdf_urls


def download_file(
    opener: urllib.request.OpenerDirector, url: str, dest_dir: Path
) -> Path:
    """Stream-download a PDF file into dest_dir and verify its PDF header."""
    filename = os.path.basename(urllib.parse.urlparse(url).path)
    dest_path = dest_dir / filename
    dest_dir.mkdir(parents=True, exist_ok=True)

    with opener.open(url, timeout=120) as resp:
        total = resp.headers.get("Content-Length")
        if dest_path.exists() and total and dest_path.stat().st_size == int(total):
            print(f"Already exists (skipping): {dest_path} ({int(total):,} bytes)")
            return dest_path
        total_mb = f"{int(total) / (1024 * 1024):.2f} MB" if total else "unknown size"
        print(f"Downloading {filename} ({total_mb}) from {url} ...")

        tmp_path = dest_path.with_suffix(dest_path.suffix + ".part")
        with open(tmp_path, "wb") as f:
            while True:
                chunk = resp.read(1024 * 64)
                if not chunk:
                    break
                f.write(chunk)

    with open(tmp_path, "rb") as f:
        header = f.read(5)
    if header != b"%PDF-":
        tmp_path.unlink(missing_ok=True)
        raise ValueError(f"Downloaded file {filename} is not a valid PDF (header={header!r})")

    tmp_path.replace(dest_path)
    print(f"Saved: {dest_path} ({dest_path.stat().st_size:,} bytes)")
    return dest_path


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Scrape and download textbook PDFs from Looma chapters URL."
    )
    parser.add_argument("url", nargs="?", default=DEFAULT_URL, help="Looma chapters URL")
    parser.add_argument(
        "-o",
        "--output",
        default="books",
        help="Output directory for downloaded PDFs (default: books)",
    )
    args = parser.parse_args()

    opener = build_opener()
    html = fetch_chapters_html(opener, args.url)
    pdf_urls = extract_pdf_urls(html, args.url)

    if not pdf_urls:
        print("No PDF textbooks found on the page.")
        return

    print(f"Found {len(pdf_urls)} PDF textbook(s):")
    for u in pdf_urls:
        print(f"  - {u}")

    dest_dir = Path(args.output)
    for u in pdf_urls:
        download_file(opener, u, dest_dir)


if __name__ == "__main__":
    main()
