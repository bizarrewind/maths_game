// Nepal CDC Grades 6–10 Mathematics Syllabus (98 Chapters, 446 Questions; Grade 7 Full & Polished)
const CHAPTERS = [
  {
    "id": "7M01",
    "name": "Set",
    "group": "Numbers",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M02",
    "name": "Whole Number",
    "group": "Numbers",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M03",
    "name": "Integer",
    "group": "Numbers",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M04",
    "name": "Rational Number",
    "group": "Numbers",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M05",
    "name": "Fraction and Decimal",
    "group": "Numbers",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M06",
    "name": "Ratio and Proportion",
    "group": "Commercial",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M07",
    "name": "Profit and Loss",
    "group": "Commercial",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M08",
    "name": "Unitary Method",
    "group": "Commercial",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M09",
    "name": "Perimeter, Area and Volume",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M10",
    "name": "Indices",
    "group": "Algebra",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M11",
    "name": "Algebraic Expression",
    "group": "Algebra",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M12",
    "name": "Equation, Inequality and Graph",
    "group": "Algebra",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M13",
    "name": "Lines and Angles",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M14",
    "name": "Plane Figures",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M15",
    "name": "Congruent Figures",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M16",
    "name": "Solid Objects",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M17",
    "name": "Coordinates",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M18",
    "name": "Symmetry and Tessellation",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M19",
    "name": "Transformation",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M20",
    "name": "Bearing and Scale Drawing",
    "group": "Geometry",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "7M21",
    "name": "Presentation of Data",
    "group": "Data",
    "grade": 7,
    "placeholder": false
  },
  {
    "id": "6M01.01",
    "name": "Set",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.01",
    "name": "Whole Number",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.02",
    "name": "Integers",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.03",
    "name": "Fraction",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.04",
    "name": "Decimal",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.05",
    "name": "Percentage",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.06",
    "name": "Profit and Loss",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M02.07",
    "name": "Unitary Method",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M03.01",
    "name": "Distance",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M03.02",
    "name": "Perimeter, Area and Volume",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M04.01",
    "name": "Indices",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M04.02",
    "name": "Algebraic Expression",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M04.03",
    "name": "Equation, Inequality and Graph",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.01",
    "name": "Lines and Angles",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.02",
    "name": "Plane Shapes",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.03",
    "name": "Circle",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.04",
    "name": "Solid Objects",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.05",
    "name": "Co-ordinate Geometry",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M05.06",
    "name": "Symmetry and Tessellation",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "6M06.01",
    "name": "Statistics",
    "grade": 6,
    "group": "Grade 6",
    "placeholder": true
  },
  {
    "id": "8M01",
    "name": "Set",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M02",
    "name": "Whole number",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M03",
    "name": "Rational and Irrational Numbers",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M04",
    "name": "Ratio and Proportion",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M05",
    "name": "Profit and Loss",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M06",
    "name": "Unitary Method",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M07",
    "name": "Simple Interest",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M08",
    "name": "Area and volume",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M09",
    "name": "Indices",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M10",
    "name": "Algebraic Expression",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M11",
    "name": "Algebraic Fraction",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M12",
    "name": "Equation and Graph",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M13",
    "name": "Lines and Angles",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M14",
    "name": "Plane Figures",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M15",
    "name": "Congruency and Similarity",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M16",
    "name": "Solid objects",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M17",
    "name": "Coordinates",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M18",
    "name": "Tessellation",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M19",
    "name": "Transformation",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M20",
    "name": "Bearing and Scale Drawing",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "8M21",
    "name": "Statistics",
    "grade": 8,
    "group": "Grade 8",
    "placeholder": true
  },
  {
    "id": "9M01",
    "name": "Sets",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M02",
    "name": "Tax",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M03",
    "name": "Commission and Dividend",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M04",
    "name": "Household Arithmetic",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M05",
    "name": "Area",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M06",
    "name": "Prism",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M07",
    "name": "Cylinder and Sphere",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": false
  },
  {
    "id": "9M08",
    "name": "Sequence and series",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M09",
    "name": "Factorization",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M10",
    "name": "H.C.F. and L.C.M.",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M11",
    "name": "Linear Equation",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M12",
    "name": "Indices",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M13",
    "name": "Triangle",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M14",
    "name": "Quadrilateral",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M15",
    "name": "Construction",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M16",
    "name": "Circle",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M17",
    "name": "Classification and Presentation of Data",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M18",
    "name": "Measures of Central Tendency",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M19",
    "name": "Probability",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": true
  },
  {
    "id": "9M20",
    "name": "Trigonometry",
    "grade": 9,
    "group": "Grade 9",
    "placeholder": false
  },
  {
    "id": "10M01",
    "name": "Sets",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M02",
    "name": "Compound Interest",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M03",
    "name": "Growth and Depreciation",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M04",
    "name": "Currency and Exchange Rate",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M05",
    "name": "Area and Volume",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M06",
    "name": "Sequence and Series",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M07",
    "name": "Quadratic Equation",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": false
  },
  {
    "id": "10M08",
    "name": "Algebraic Fraction",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M09",
    "name": "Indices",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M10",
    "name": "Triangle and Quadrilaterals",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M11",
    "name": "Construction",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M12",
    "name": "Circle",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M13",
    "name": "Statistics",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M14",
    "name": "Probability",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M15",
    "name": "Trigonometry",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": true
  },
  {
    "id": "10M16",
    "name": "Ellipses & Conics",
    "grade": 10,
    "group": "Grade 10",
    "placeholder": false
  }
];

const QUESTIONS = [
  {
    "id": 1,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "Which symbol means 'is an element of' a set?",
    "options": [
      "∉",
      "⊂",
      "∪",
      "∈"
    ],
    "answer": 3,
    "explanation": "∈ means 'belongs to' or 'is an element of' a set."
  },
  {
    "id": 2,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "How many elements are in the set A = {2, 4, 6, 8, 10}?",
    "options": [
      "4",
      "6",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "Count the distinct members: 2, 4, 6, 8, 10 → n(A) = 5."
  },
  {
    "id": 3,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "What is a set with no elements called?",
    "options": [
      "Universal set",
      "Finite set",
      "Equal set",
      "Empty (null) set"
    ],
    "answer": 3,
    "explanation": "A set with 0 elements is the empty or null set (∅ or {})."
  },
  {
    "id": 4,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
    "options": [
      "{1, 2, 3, 4, 5}",
      "{1, 2}",
      "{4, 5}",
      "{3}"
    ],
    "answer": 3,
    "explanation": "Intersection A ∩ B has elements common to both sets: {3}."
  },
  {
    "id": 5,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "If X = {a, b} and Y = {c, d}, what is X ∪ Y?",
    "options": [
      "∅",
      "{a, c}",
      "{b, d}",
      "{a, b, c, d}"
    ],
    "answer": 3,
    "explanation": "Union X ∪ Y combines all elements from both sets."
  },
  {
    "id": 6,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "Which of these is a well-defined set?",
    "options": [
      "Best movies",
      "Tall students",
      "Tasty foods",
      "Days of the week"
    ],
    "answer": 3,
    "explanation": "'Days of the week' is exact and objective, not an opinion."
  },
  {
    "id": 7,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "easy",
    "question": "If P = {1, 3, 5} and Q = {5, 1, 3}, then P and Q are:",
    "options": [
      "Disjoint sets",
      "Null sets",
      "Infinite sets",
      "Equal sets"
    ],
    "answer": 3,
    "explanation": "Order doesn't matter in sets; P and Q have the exact same elements."
  },
  {
    "id": 8,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A − B.",
    "options": [
      "{5, 6}",
      "{3, 4}",
      "{1, 2, 5, 6}",
      "{1, 2}"
    ],
    "answer": 3,
    "explanation": "A − B removes elements of B from A, leaving {1, 2}."
  },
  {
    "id": 9,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "How many subsets does P = {a, b, c} have?",
    "options": [
      "3",
      "6",
      "9",
      "8"
    ],
    "answer": 3,
    "explanation": "Number of subsets = 2ⁿ = $2^{3}$ = 8."
  },
  {
    "id": 10,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "Two sets with no common elements (A ∩ B = ∅) are called:",
    "options": [
      "Overlapping sets",
      "Equal sets",
      "Subsets",
      "Disjoint sets"
    ],
    "answer": 3,
    "explanation": "Sets with empty intersection are disjoint sets."
  },
  {
    "id": 11,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "If U = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}, what is A' (complement of A)?",
    "options": [
      "{2, 4, 6}",
      "{1, 2, 3}",
      "∅",
      "{1, 3, 5}"
    ],
    "answer": 3,
    "explanation": "A' contains elements in U that are not in A: {1, 3, 5}."
  },
  {
    "id": 12,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "Express {x : x is an even prime number} in listing form.",
    "options": [
      "{2, 4}",
      "{1, 2}",
      "∅",
      "{2}"
    ],
    "answer": 3,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": 13,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "If n(A) = 7, n(B) = 5, and A ∩ B = ∅, find n(A ∪ B).",
    "options": [
      "2",
      "35",
      "10",
      "12"
    ],
    "answer": 3,
    "explanation": "Since A and B are disjoint, n(A ∪ B) = 7 + 5 = 12."
  },
  {
    "id": 14,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "medium",
    "question": "How many proper subsets does {x, y, z, w} have?",
    "options": [
      "16",
      "14",
      "8",
      "15"
    ],
    "answer": 3,
    "explanation": "Proper subsets = 2ⁿ − 1 = $2^{4}$ − 1 = 16 − 1 = 15."
  },
  {
    "id": 15,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "If n(A) = 15, n(B) = 12, and n(A ∩ B) = 5, find n(A ∪ B).",
    "options": [
      "27",
      "32",
      "17",
      "22"
    ],
    "answer": 3,
    "explanation": "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 15 + 12 − 5 = 22."
  },
  {
    "id": 16,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "In a class of 30 students, 18 like Math, 15 like Science, and 5 like neither. How many like BOTH?",
    "options": [
      "3",
      "10",
      "5",
      "8"
    ],
    "answer": 3,
    "explanation": "At least one = 30 − 5 = 25. Both = 18 + 15 − 25 = 8."
  },
  {
    "id": 17,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "If U = {1..10}, A = {factors of 6}, B = {multiples of 3 ≤ 10}, find (A ∪ B)'.",
    "options": [
      "{1, 2, 3, 6, 9}",
      "{3, 6}",
      "{4, 5, 7, 8}",
      "{4, 5, 7, 8, 10}"
    ],
    "answer": 3,
    "explanation": "A={1,2,3,6}, B={3,6,9}, A∪B={1,2,3,6,9}, so complement is {4,5,7,8,10}."
  },
  {
    "id": 18,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "If a set has 64 subsets, how many elements does it contain?",
    "options": [
      "5",
      "7",
      "8",
      "6"
    ],
    "answer": 3,
    "explanation": "2ⁿ = 64 → $2^{6}$ = 64, so n = 6."
  },
  {
    "id": 19,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "In a survey of 40 kids, 24 play football and 20 play cricket. Every kid plays at least one. How many play ONLY football?",
    "options": [
      "4",
      "16",
      "24",
      "20"
    ],
    "answer": 3,
    "explanation": "Both = 24 + 20 − 40 = 4. Only football = 24 − 4 = 20."
  },
  {
    "id": 20,
    "chapter": "7M01",
    "topic": "Set",
    "difficulty": "hard",
    "question": "If n(U) = 50, n(A) = 28, n(B) = 22, and n(A ∩ B) = 10, find n((A ∪ B)').",
    "options": [
      "40",
      "20",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "n(A ∪ B) = 28 + 22 − 10 = 40. Complement = 50 − 40 = 10."
  },
  {
    "id": 21,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "What is the smallest whole number?",
    "options": [
      "1",
      "-1",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Whole numbers start at 0: {0, 1, 2, 3, ...}."
  },
  {
    "id": 22,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "Which of the following is a prime number?",
    "options": [
      "15",
      "21",
      "27",
      "19"
    ],
    "answer": 3,
    "explanation": "19 has only two factors: 1 and 19."
  },
  {
    "id": 23,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "Evaluate: 15 + 4 × 3",
    "options": [
      "57",
      "33",
      "22",
      "27"
    ],
    "answer": 3,
    "explanation": "Multiply before adding: 4 × 3 = 12, then 15 + 12 = 27."
  },
  {
    "id": 24,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "What is the place value of 7 in 47,825?",
    "options": [
      "700",
      "70,000",
      "7",
      "7,000"
    ],
    "answer": 3,
    "explanation": "7 is in the thousands place → 7,000."
  },
  {
    "id": 25,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "Which number is divisible by both 2 and 5?",
    "options": [
      "145",
      "142",
      "134",
      "140"
    ],
    "answer": 3,
    "explanation": "Numbers ending in 0 are divisible by both 2 and 5."
  },
  {
    "id": 26,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "Round 3,648 to the nearest hundred.",
    "options": [
      "3,700",
      "3,650",
      "4,000",
      "3,600"
    ],
    "answer": 3,
    "explanation": "The tens digit is 4 (< 5), so round down to 3,600."
  },
  {
    "id": 27,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "easy",
    "question": "What is 25 × 12?",
    "options": [
      "250",
      "325",
      "275",
      "300"
    ],
    "answer": 3,
    "explanation": "25 × 12 = 25 × (10 + 2) = 250 + 50 = 300."
  },
  {
    "id": 28,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Evaluate: 36 ÷ (4 + 2) × 3 − 5",
    "options": [
      "1",
      "22",
      "18",
      "13"
    ],
    "answer": 3,
    "explanation": "Brackets: 6; 36 ÷ 6 = 6; 6 × 3 = 18; 18 − 5 = 13."
  },
  {
    "id": 29,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Find the H.C.F. of 24 and 36.",
    "options": [
      "6",
      "18",
      "72",
      "12"
    ],
    "answer": 3,
    "explanation": "Greatest common divisor of 24 and 36 is 12."
  },
  {
    "id": 30,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Find the L.C.M. of 12, 15, and 20.",
    "options": [
      "30",
      "120",
      "180",
      "60"
    ],
    "answer": 3,
    "explanation": "60 is the smallest multiple shared by 12, 15, and 20."
  },
  {
    "id": 31,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "What is the prime factorization of 84?",
    "options": [
      "2 × $3^{2}$ × 7",
      "$2^{2}$ × 21",
      "4 × 3 × 7",
      "$2^{2}$ × 3 × 7"
    ],
    "answer": 3,
    "explanation": "84 = 4 × 21 = $2^{2}$ × 3 × 7."
  },
  {
    "id": 32,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Which digit can replace * in 54*2 so the number is divisible by 9?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "answer": 3,
    "explanation": "Sum of digits: 5 + 4 + * + 2 = 11 + *. Next multiple of 9 is 18, so * = 7."
  },
  {
    "id": 33,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Find the square root of 625.",
    "options": [
      "15",
      "35",
      "45",
      "25"
    ],
    "answer": 3,
    "explanation": "25 × 25 = 625."
  },
  {
    "id": 34,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "medium",
    "question": "Find the cube root of 343.",
    "options": [
      "9",
      "6",
      "8",
      "7"
    ],
    "answer": 3,
    "explanation": "7 × 7 × 7 = 343."
  },
  {
    "id": 35,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "The H.C.F. and L.C.M. of two numbers are 6 and 72. If one number is 18, find the other.",
    "options": [
      "12",
      "36",
      "48",
      "24"
    ],
    "answer": 3,
    "explanation": "Product of two numbers = HCF × LCM → 18 × x = 6 × 72 = 432 → x = 24."
  },
  {
    "id": 36,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "Three bells toll every 8, 12, and 16 minutes. After how many minutes will they toll together again?",
    "options": [
      "24 minutes",
      "36 minutes",
      "96 minutes",
      "48 minutes"
    ],
    "answer": 3,
    "explanation": "LCM(8, 12, 16) = 48 minutes."
  },
  {
    "id": 37,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "Find the greatest number that divides 39 and 51 leaving remainder 3 in each case.",
    "options": [
      "6",
      "9",
      "24",
      "12"
    ],
    "answer": 3,
    "explanation": "HCF of (39 − 3) and (51 − 3) = HCF(36, 48) = 12."
  },
  {
    "id": 38,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "Evaluate: 100 − [20 + {15 − (8 − 3)}]",
    "options": [
      "60",
      "80",
      "55",
      "70"
    ],
    "answer": 3,
    "explanation": "8−3=5; 15−5=10; 20+10=30; 100−30=70."
  },
  {
    "id": 39,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "What is the smallest 4-digit number divisible by 18, 24, and 36?",
    "options": [
      "1,000",
      "1,080",
      "1,044",
      "1,008"
    ],
    "answer": 3,
    "explanation": "LCM(18,24,36) = 72. Smallest 4-digit multiple of 72 is 72 × 14 = 1,008."
  },
  {
    "id": 40,
    "chapter": "7M02",
    "topic": "Whole Number",
    "difficulty": "hard",
    "question": "A square garden has area 1,296 m². What is the length of one side?",
    "options": [
      "34 m",
      "38 m",
      "46 m",
      "36 m"
    ],
    "answer": 3,
    "explanation": "$\\sqrt{1296}$ = 36 m."
  },
  {
    "id": 41,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "Which integer is greater: −8 or −3?",
    "options": [
      "−8",
      "They are equal",
      "Cannot tell",
      "−3"
    ],
    "answer": 3,
    "explanation": "On a number line, −3 is to the right of −8, so −3 > −8."
  },
  {
    "id": 42,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "Calculate: (−6) + (+10)",
    "options": [
      "−4",
      "16",
      "−16",
      "4"
    ],
    "answer": 3,
    "explanation": "−6 + 10 = 4."
  },
  {
    "id": 43,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "What is the additive inverse (opposite) of −17?",
    "options": [
      "−17",
      "0",
      "$\\frac{1}{17}$",
      "17"
    ],
    "answer": 3,
    "explanation": "The additive inverse of −17 is +17 because −17 + 17 = 0."
  },
  {
    "id": 44,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "Calculate: (−4) × (+7)",
    "options": [
      "28",
      "−11",
      "11",
      "−28"
    ],
    "answer": 3,
    "explanation": "Negative × Positive = Negative → −28."
  },
  {
    "id": 45,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "What is |−23| (the absolute value of −23)?",
    "options": [
      "−23",
      "0",
      "2.3",
      "23"
    ],
    "answer": 3,
    "explanation": "Absolute value measures distance from 0, so |−23| = 23."
  },
  {
    "id": 46,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "Evaluate: 5 − (−3)",
    "options": [
      "2",
      "−8",
      "−2",
      "8"
    ],
    "answer": 3,
    "explanation": "Subtracting a negative is adding: 5 + 3 = 8."
  },
  {
    "id": 47,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "easy",
    "question": "Calculate: (−36) ÷ (−9)",
    "options": [
      "−4",
      "27",
      "−27",
      "4"
    ],
    "answer": 3,
    "explanation": "Negative ÷ Negative = Positive → +4."
  },
  {
    "id": 48,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "Evaluate: (−12) + (+7) − (−5)",
    "options": [
      "−10",
      "−24",
      "10",
      "0"
    ],
    "answer": 3,
    "explanation": "−12 + 7 = −5; −5 − (−5) = −5 + 5 = 0."
  },
  {
    "id": 49,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "Calculate: (−8) × (−5) ÷ (−4)",
    "options": [
      "10",
      "40",
      "−40",
      "−10"
    ],
    "answer": 3,
    "explanation": "(−8)×(−5) = 40; 40 ÷ (−4) = −10."
  },
  {
    "id": 50,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "What is (−2) × (−3) × (−4)?",
    "options": [
      "24",
      "−9",
      "12",
      "−24"
    ],
    "answer": 3,
    "explanation": "Three negative signs multiply to a negative: −24."
  },
  {
    "id": 51,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "The temperature drops from 7°C to −5°C. What is the change in temperature?",
    "options": [
      "12°C",
      "−2°C",
      "2°C",
      "−12°C"
    ],
    "answer": 3,
    "explanation": "Final − Initial = −5 − 7 = −12°C."
  },
  {
    "id": 52,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "Find the integer that must be added to −9 to get 4.",
    "options": [
      "−5",
      "5",
      "−13",
      "13"
    ],
    "answer": 3,
    "explanation": "−9 + x = 4 → x = 4 − (−9) = 13."
  },
  {
    "id": 53,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "Evaluate: $(-1)^{9}$ × $(-1)^{4}$",
    "options": [
      "1",
      "−13",
      "0",
      "−1"
    ],
    "answer": 3,
    "explanation": "$(-1)^{9}$ = −1 and $(-1)^{4}$ = 1. Product = −1."
  },
  {
    "id": 54,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "medium",
    "question": "Evaluate: 20 − 3 × (−4)",
    "options": [
      "8",
      "−68",
      "−8",
      "32"
    ],
    "answer": 3,
    "explanation": "3 × (−4) = −12. Then 20 − (−12) = 20 + 12 = 32."
  },
  {
    "id": 55,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "Evaluate: [(−18) ÷ 3] × [(−4) − (−9)]",
    "options": [
      "30",
      "78",
      "−78",
      "−30"
    ],
    "answer": 3,
    "explanation": "(−18)÷3 = −6; −4+9 = 5; −6 × 5 = −30."
  },
  {
    "id": 56,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "A submarine is at −120 m. It rises 45 m, then dives 60 m. What is its new depth?",
    "options": [
      "−105 m",
      "−15 m",
      "−225 m",
      "−135 m"
    ],
    "answer": 3,
    "explanation": "−120 + 45 − 60 = −75 − 60 = −135 m."
  },
  {
    "id": 57,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "In a quiz, +4 for right and −2 for wrong. Sita got 7 right and 5 wrong. Find her score.",
    "options": [
      "28",
      "38",
      "14",
      "18"
    ],
    "answer": 3,
    "explanation": "7×4 + 5×(−2) = 28 − 10 = 18."
  },
  {
    "id": 58,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "What is the sum of all integers strictly between −5 and 4?",
    "options": [
      "0",
      "−5",
      "4",
      "−4"
    ],
    "answer": 3,
    "explanation": "Integers: −4, −3, −2, −1, 0, 1, 2, 3. Pairs (−3+3), (−2+2), (−1+1) cancel → −4."
  },
  {
    "id": 59,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "If a = −3 and b = −2, find $a^{2}$ − $b^{3}$.",
    "options": [
      "1",
      "−17",
      "5",
      "17"
    ],
    "answer": 3,
    "explanation": "$(-3)^{2}$ − $(-2)^{3}$ = 9 − (−8) = 9 + 8 = 17."
  },
  {
    "id": 60,
    "chapter": "7M03",
    "topic": "Integer",
    "difficulty": "hard",
    "question": "Find the value of (−48) ÷ [16 ÷ (−2)] + (−6).",
    "options": [
      "12",
      "−12",
      "6",
      "0"
    ],
    "answer": 3,
    "explanation": "16÷(−2) = −8; (−48)÷(−8) = 6; 6 + (−6) = 0."
  },
  {
    "id": 61,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "Which of the following is NOT a rational number?",
    "options": [
      "$\\frac{-3}{4}$",
      "$\\frac{0}{7}$",
      "2.5",
      "$\\frac{5}{0}$"
    ],
    "answer": 3,
    "explanation": "Division by zero is undefined, so $\\frac{5}{0}$ is not a rational number."
  },
  {
    "id": 62,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "Which fraction is equivalent to $\\frac{-3}{4}$?",
    "options": [
      "$\\frac{6}{8}$",
      "$\\frac{-9}{16}$",
      "$\\frac{3}{4}$",
      "$\\frac{-6}{8}$"
    ],
    "answer": 3,
    "explanation": "Multiply numerator & denominator by 2: $\\frac{-6}{8}$."
  },
  {
    "id": 63,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "Write 7 as a rational number p/q.",
    "options": [
      "$\\frac{1}{7}$",
      "$\\frac{7}{0}$",
      "$\\frac{0}{7}$",
      "$\\frac{7}{1}$"
    ],
    "answer": 3,
    "explanation": "Any integer n can be written as n/1."
  },
  {
    "id": 64,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "Reduce $\\frac{-18}{24}$ to its lowest (standard) form.",
    "options": [
      "$\\frac{-9}{12}$",
      "$\\frac{3}{4}$",
      "$\\frac{-2}{3}$",
      "$\\frac{-3}{4}$"
    ],
    "answer": 3,
    "explanation": "Divide both by 6: −18÷6 / 24÷6 = $\\frac{-3}{4}$."
  },
  {
    "id": 65,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "Which is greater: $\\frac{-1}{2}$ or $\\frac{-1}{4}$?",
    "options": [
      "$\\frac{-1}{2}$",
      "Equal",
      "−1",
      "$\\frac{-1}{4}$"
    ],
    "answer": 3,
    "explanation": "−0.25 > −0.5, so $\\frac{-1}{4}$ is greater."
  },
  {
    "id": 66,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "What is the additive inverse of $\\frac{5}{9}$?",
    "options": [
      "$\\frac{9}{5}$",
      "$\\frac{-9}{5}$",
      "0",
      "$\\frac{-5}{9}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{5}{9}$ + ($\\frac{-5}{9}$) = 0."
  },
  {
    "id": 67,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "easy",
    "question": "What is the multiplicative inverse (reciprocal) of $\\frac{-4}{7}$?",
    "options": [
      "$\\frac{4}{7}$",
      "$\\frac{7}{4}$",
      "$\\frac{-4}{7}$",
      "$\\frac{-7}{4}$"
    ],
    "answer": 3,
    "explanation": "Reciprocal flips numerator and denominator while keeping the sign: $\\frac{-7}{4}$."
  },
  {
    "id": 68,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Calculate: ($\\frac{-2}{5}$) + ($\\frac{3}{10}$)",
    "options": [
      "$\\frac{1}{10}$",
      "$\\frac{1}{15}$",
      "$\\frac{-7}{10}$",
      "$\\frac{-1}{10}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{-2}{5}$ = −4/10; $\\frac{-4}{10}$ + $\\frac{3}{10}$ = $\\frac{-1}{10}$."
  },
  {
    "id": 69,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Calculate: ($\\frac{3}{4}$) − ($\\frac{-1}{8}$)",
    "options": [
      "$\\frac{5}{8}$",
      "$\\frac{-5}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{7}{8}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{6}{8}$ + $\\frac{1}{8}$ = $\\frac{7}{8}$."
  },
  {
    "id": 70,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Multiply: ($\\frac{-5}{6}$) × ($\\frac{3}{10}$)",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{-15}{16}$",
      "$\\frac{-1}{2}$",
      "$\\frac{-1}{4}$"
    ],
    "answer": 3,
    "explanation": "Cancel 3 & 6 (→2) and 5 & 10 (→2): $\\frac{-1}{4}$."
  },
  {
    "id": 71,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Divide: ($\\frac{-4}{9}$) ÷ ($\\frac{8}{3}$)",
    "options": [
      "$\\frac{-32}{27}$",
      "$\\frac{1}{6}$",
      "$\\frac{-2}{3}$",
      "$\\frac{-1}{6}$"
    ],
    "answer": 3,
    "explanation": "($\\frac{-4}{9}$) × ($\\frac{3}{8}$) = $\\frac{-12}{72}$ = $\\frac{-1}{6}$."
  },
  {
    "id": 72,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Express 3/(−5) in standard form.",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{3}$",
      "$\\frac{-5}{3}$",
      "$\\frac{-3}{5}$"
    ],
    "answer": 3,
    "explanation": "Standard form keeps the denominator positive: $\\frac{-3}{5}$."
  },
  {
    "id": 73,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "Which rational number lies halfway between $\\frac{1}{4}$ and $\\frac{3}{4}$?",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 3,
    "explanation": "($\\frac{1}{4}$ + $\\frac{3}{4}$) ÷ 2 = 1 ÷ 2 = $\\frac{1}{2}$."
  },
  {
    "id": 74,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "medium",
    "question": "If $\\frac{-4}{7}$ = x/28, find x.",
    "options": [
      "16",
      "−12",
      "−20",
      "−16"
    ],
    "answer": 3,
    "explanation": "Denominator multiplied by 4, so x = −4 × 4 = −16."
  },
  {
    "id": 75,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "Evaluate: ($\\frac{-2}{3}$) + ($\\frac{5}{6}$) − ($\\frac{1}{2}$)",
    "options": [
      "$\\frac{1}{3}$",
      "0",
      "$\\frac{-2}{3}$",
      "$\\frac{-1}{3}$"
    ],
    "answer": 3,
    "explanation": "Common denominator 6: (−4 + 5 − 3)/6 = $\\frac{-2}{6}$ = $\\frac{-1}{3}$."
  },
  {
    "id": 76,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "What should be added to $\\frac{-5}{8}$ to get $\\frac{1}{4}$?",
    "options": [
      "$\\frac{-3}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{-7}{8}$",
      "$\\frac{7}{8}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{1}{4}$ − ($\\frac{-5}{8}$) = $\\frac{2}{8}$ + $\\frac{5}{8}$ = $\\frac{7}{8}$."
  },
  {
    "id": 77,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "The product of two rational numbers is $\\frac{-8}{15}$. If one is $\\frac{4}{5}$, find the other.",
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{-32}{75}$",
      "$\\frac{-3}{2}$",
      "$\\frac{-2}{3}$"
    ],
    "answer": 3,
    "explanation": "($\\frac{-8}{15}$) ÷ ($\\frac{4}{5}$) = ($\\frac{-8}{15}$) × ($\\frac{5}{4}$) = $\\frac{-2}{3}$."
  },
  {
    "id": 78,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "Arrange in ascending order: $\\frac{-2}{3}$, $\\frac{-1}{2}$, $\\frac{-3}{4}$",
    "options": [
      "$\\frac{-1}{2}$ < $\\frac{-2}{3}$ < $\\frac{-3}{4}$",
      "$\\frac{-2}{3}$ < $\\frac{-3}{4}$ < $\\frac{-1}{2}$",
      "$\\frac{-3}{4}$ < $\\frac{-1}{2}$ < $\\frac{-2}{3}$",
      "$\\frac{-3}{4}$ < $\\frac{-2}{3}$ < $\\frac{-1}{2}$"
    ],
    "answer": 3,
    "explanation": "In decimals: −0.75 < −0.67 < −0.5."
  },
  {
    "id": 79,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "Simplify: [($\\frac{-3}{4}$) × ($\\frac{8}{9}$)] ÷ ($\\frac{-2}{3}$)",
    "options": [
      "−1",
      "$\\frac{4}{9}$",
      "$\\frac{-4}{9}$",
      "1"
    ],
    "answer": 3,
    "explanation": "($\\frac{-3}{4}$)×($\\frac{8}{9}$) = $\\frac{-2}{3}$. ($\\frac{-2}{3}$) ÷ ($\\frac{-2}{3}$) = 1."
  },
  {
    "id": 80,
    "chapter": "7M04",
    "topic": "Rational Number",
    "difficulty": "hard",
    "question": "Find a rational number strictly between $\\frac{1}{3}$ and $\\frac{1}{2}$.",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{2}{3}$",
      "$\\frac{7}{12}$",
      "$\\frac{5}{12}$"
    ],
    "answer": 3,
    "explanation": "Average = ($\\frac{1}{3}$ + $\\frac{1}{2}$)/2 = ($\\frac{5}{6}$)/2 = $\\frac{5}{12}$."
  },
  {
    "id": 81,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Convert $\\frac{3}{5}$ into a decimal.",
    "options": [
      "0.35",
      "0.5",
      "0.75",
      "0.6"
    ],
    "answer": 3,
    "explanation": "3 ÷ 5 = 0.6."
  },
  {
    "id": 82,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Convert 0.25 into a fraction in simplest form.",
    "options": [
      "$\\frac{25}{10}$",
      "$\\frac{1}{25}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{4}$"
    ],
    "answer": 3,
    "explanation": "0.25 = $\\frac{25}{100}$ = $\\frac{1}{4}$."
  },
  {
    "id": 83,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Calculate: 2.4 + 3.75",
    "options": [
      "5.79",
      "6.05",
      "5.15",
      "6.15"
    ],
    "answer": 3,
    "explanation": "2.40 + 3.75 = 6.15."
  },
  {
    "id": 84,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Calculate: $\\frac{3}{7}$ + $\\frac{2}{7}$",
    "options": [
      "$\\frac{5}{14}$",
      "$\\frac{6}{7}$",
      "$\\frac{1}{7}$",
      "$\\frac{5}{7}$"
    ],
    "answer": 3,
    "explanation": "Same denominator: (3+2)/7 = $\\frac{5}{7}$."
  },
  {
    "id": 85,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "What is 0.08 × 100?",
    "options": [
      "0.8",
      "80",
      "0.008",
      "8"
    ],
    "answer": 3,
    "explanation": "Multiplying by 100 moves the decimal 2 places right → 8."
  },
  {
    "id": 86,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Convert $\\frac{11}{4}$ into a mixed number.",
    "options": [
      "$2\\frac{1}{4}$",
      "$3\\frac{1}{4}$",
      "$1\\frac{3}{4}$",
      "$2\\frac{3}{4}$"
    ],
    "answer": 3,
    "explanation": "11 ÷ 4 = 2 remainder 3 → $2\\frac{3}{4}$."
  },
  {
    "id": 87,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "easy",
    "question": "Which is larger: 0.45 or 0.405?",
    "options": [
      "0.405",
      "Equal",
      "0.045",
      "0.45"
    ],
    "answer": 3,
    "explanation": "0.450 > 0.405."
  },
  {
    "id": 88,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Convert 0.375 into a fraction in simplest form.",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{5}{8}$",
      "$\\frac{7}{20}$",
      "$\\frac{3}{8}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{375}{1000}$ divided by 125 = $\\frac{3}{8}$."
  },
  {
    "id": 89,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Calculate: $2\\frac{1}{3}$ ÷ $1\\frac{1}{6}$",
    "options": [
      "$\\frac{7}{3}$",
      "$\\frac{3}{2}$",
      "$1\\frac{1}{2}$",
      "2"
    ],
    "answer": 3,
    "explanation": "$\\frac{7}{3}$ ÷ $\\frac{7}{6}$ = $\\frac{7}{3}$ × $\\frac{6}{7}$ = 2."
  },
  {
    "id": 90,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Calculate: 4.5 × 0.04",
    "options": [
      "1.8",
      "0.018",
      "18",
      "0.18"
    ],
    "answer": 3,
    "explanation": "45 × 4 = 180 with 3 decimal places → 0.18."
  },
  {
    "id": 91,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Calculate: 3.6 ÷ 0.09",
    "options": [
      "4",
      "0.4",
      "400",
      "40"
    ],
    "answer": 3,
    "explanation": "3.6 / 0.09 = 360 / 9 = 40."
  },
  {
    "id": 92,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Subtract: $5\\frac{1}{3}$ − $2\\frac{1}{2}$",
    "options": [
      "$3\\frac{1}{6}$",
      "$2\\frac{1}{2}$",
      "$3\\frac{5}{6}$",
      "$2\\frac{5}{6}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{16}{3}$ − $\\frac{5}{2}$ = $\\frac{32}{6}$ − $\\frac{15}{6}$ = $\\frac{17}{6}$ = $2\\frac{5}{6}$."
  },
  {
    "id": 93,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "Convert $\\frac{5}{8}$ into a decimal.",
    "options": [
      "0.58",
      "0.65",
      "0.375",
      "0.625"
    ],
    "answer": 3,
    "explanation": "5 ÷ 8 = 0.625."
  },
  {
    "id": 94,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "medium",
    "question": "What is $\\frac{3}{4}$ of 2.4 kg?",
    "options": [
      "1.6 kg",
      "2.0 kg",
      "0.6 kg",
      "1.8 kg"
    ],
    "answer": 3,
    "explanation": "0.75 × 2.4 = 1.8 kg."
  },
  {
    "id": 95,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "A ribbon of length 7.5 m is cut into pieces of 0.25 m each. How many pieces are formed?",
    "options": [
      "25",
      "35",
      "300",
      "30"
    ],
    "answer": 3,
    "explanation": "7.5 ÷ 0.25 = 750 ÷ 25 = 30 pieces."
  },
  {
    "id": 96,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "Simplify: ($1\\frac{1}{2}$ + $2\\frac{1}{4}$) × $\\frac{4}{5}$",
    "options": [
      "$3\\frac{3}{4}$",
      "$2\\frac{2}{5}$",
      "4",
      "3"
    ],
    "answer": 3,
    "explanation": "$1\\frac{1}{2}$ + $2\\frac{1}{4}$ = $\\frac{15}{4}$. ($\\frac{15}{4}$) × ($\\frac{4}{5}$) = $\\frac{15}{5}$ = 3."
  },
  {
    "id": 97,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "Ramesh spent $\\frac{2}{5}$ of his money on books and $\\frac{1}{3}$ on pens. If Rs. 160 is left, how much did he have?",
    "options": [
      "Rs. 480",
      "Rs. 540",
      "Rs. 400",
      "Rs. 600"
    ],
    "answer": 3,
    "explanation": "Spent = $\\frac{2}{5}$ + $\\frac{1}{3}$ = $\\frac{11}{15}$. Left = $\\frac{4}{15}$ = 160 → Total = 160 × $\\frac{15}{4}$ = Rs. 600."
  },
  {
    "id": 98,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "Evaluate: (0.2 × 0.3) ÷ 0.015",
    "options": [
      "0.4",
      "40",
      "0.04",
      "4"
    ],
    "answer": 3,
    "explanation": "0.06 ÷ 0.015 = 60 ÷ 15 = 4."
  },
  {
    "id": 99,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "Find the perimeter of a rectangle of length 3.25 cm and breadth 1.75 cm.",
    "options": [
      "5 cm",
      "9.5 cm",
      "11 cm",
      "10 cm"
    ],
    "answer": 3,
    "explanation": "2 × (3.25 + 1.75) = 2 × 5 = 10 cm."
  },
  {
    "id": 100,
    "chapter": "7M05",
    "topic": "Fraction & Decimal",
    "difficulty": "hard",
    "question": "Express 0.272727... (0.27̄) as a simplified fraction.",
    "options": [
      "$\\frac{27}{100}$",
      "$\\frac{9}{33}$",
      "$\\frac{2}{7}$",
      "$\\frac{3}{11}$"
    ],
    "answer": 3,
    "explanation": "0.27̄ = $\\frac{27}{99}$ = $\\frac{3}{11}$."
  },
  {
    "id": 101,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Simplify the ratio 18 : 24.",
    "options": [
      "6 : 8",
      "2 : 3",
      "4 : 3",
      "3 : 4"
    ],
    "answer": 3,
    "explanation": "Divide both terms by 6 → 3 : 4."
  },
  {
    "id": 102,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "In a class of 12 boys and 18 girls, what is the ratio of boys to girls?",
    "options": [
      "3 : 2",
      "2 : 5",
      "3 : 5",
      "2 : 3"
    ],
    "answer": 3,
    "explanation": "12 : 18 = 2 : 3."
  },
  {
    "id": 103,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Are 2 : 3 and 6 : 9 in proportion?",
    "options": [
      "No",
      "Only if reversed",
      "Cannot say",
      "Yes"
    ],
    "answer": 3,
    "explanation": "2 × 9 = 18 and 3 × 6 = 18, so they form a proportion."
  },
  {
    "id": 104,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Find x if 3 : 5 = x : 20.",
    "options": [
      "10",
      "15",
      "8",
      "12"
    ],
    "answer": 3,
    "explanation": "5 × 4 = 20, so x = 3 × 4 = 12."
  },
  {
    "id": 105,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Write $\\frac{3}{8}$ as a ratio.",
    "options": [
      "8 : 3",
      "3 : 11",
      "5 : 8",
      "3 : 8"
    ],
    "answer": 3,
    "explanation": "a/b as a ratio is a : b → 3 : 8."
  },
  {
    "id": 106,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Simplify 250 g : 1 kg.",
    "options": [
      "250 : 1",
      "1 : 40",
      "2 : 5",
      "1 : 4"
    ],
    "answer": 3,
    "explanation": "1 kg = 1,000 g. 250 : 1000 = 1 : 4."
  },
  {
    "id": 107,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "easy",
    "question": "Which ratio is equivalent to 4 : 7?",
    "options": [
      "8 : 15",
      "16 : 21",
      "12 : 14",
      "12 : 21"
    ],
    "answer": 3,
    "explanation": "Multiply both by 3 → 12 : 21."
  },
  {
    "id": 108,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "Simplify the ratio 45 cm : 1.5 m.",
    "options": [
      "3 : 1",
      "45 : 15",
      "9 : 20",
      "3 : 10"
    ],
    "answer": 3,
    "explanation": "1.5 m = 150 cm. 45 : 150 ÷ 15 = 3 : 10."
  },
  {
    "id": 109,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "If 4 : x :: 12 : 27, find x.",
    "options": [
      "6",
      "8",
      "16",
      "9"
    ],
    "answer": 3,
    "explanation": "12x = 4 × 27 = 108 → x = 9."
  },
  {
    "id": 110,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "Divide Rs. 350 between Ram and Sita in ratio 3 : 4. How much does Sita get?",
    "options": [
      "Rs. 150",
      "Rs. 210",
      "Rs. 175",
      "Rs. 200"
    ],
    "answer": 3,
    "explanation": "($\\frac{4}{7}$) × 350 = Rs. 200."
  },
  {
    "id": 111,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "Find the mean proportional between 4 and 16.",
    "options": [
      "10",
      "12",
      "64",
      "8"
    ],
    "answer": 3,
    "explanation": "√(4 × 16) = $\\sqrt{64}$ = 8."
  },
  {
    "id": 112,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "Convert the ratio 3 : 4 into a percentage.",
    "options": [
      "34%",
      "40%",
      "80%",
      "75%"
    ],
    "answer": 3,
    "explanation": "($\\frac{3}{4}$) × 100% = 75%."
  },
  {
    "id": 113,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "Divide 2 hours : 45 minutes in simplest form.",
    "options": [
      "2 : 45",
      "4 : 3",
      "3 : 8",
      "8 : 3"
    ],
    "answer": 3,
    "explanation": "2 hours = 120 min. 120 : 45 ÷ 15 = 8 : 3."
  },
  {
    "id": 114,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "medium",
    "question": "The sides of a triangle are in ratio 2 : 3 : 4 and perimeter is 36 cm. Find the longest side.",
    "options": [
      "8 cm",
      "12 cm",
      "18 cm",
      "16 cm"
    ],
    "answer": 3,
    "explanation": "Total parts = 9. Longest = ($\\frac{4}{9}$) × 36 = 16 cm."
  },
  {
    "id": 115,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "If A : B = 2 : 3 and B : C = 4 : 5, find A : B : C.",
    "options": [
      "2 : 3 : 5",
      "6 : 12 : 15",
      "8 : 10 : 15",
      "8 : 12 : 15"
    ],
    "answer": 3,
    "explanation": "Make B equal (12): A:B = 8:12 and B:C = 12:15 → 8:12:15."
  },
  {
    "id": 116,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "The ratio of two numbers is 5 : 7 and their difference is 18. Find the larger number.",
    "options": [
      "45",
      "54",
      "72",
      "63"
    ],
    "answer": 3,
    "explanation": "2 parts = 18 → 1 part = 9. Larger = 7 × 9 = 63."
  },
  {
    "id": 117,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "Find the third proportional to 9 and 12.",
    "options": [
      "15",
      "18",
      "21",
      "16"
    ],
    "answer": 3,
    "explanation": "9 : 12 = 12 : x → 9x = 144 → x = 16."
  },
  {
    "id": 118,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "Age of father and son is in ratio 7 : 2. If father is 42 years old, what was son's age 3 years ago?",
    "options": [
      "12 years",
      "15 years",
      "6 years",
      "9 years"
    ],
    "answer": 3,
    "explanation": "Son now = ($\\frac{2}{7}$) × 42 = 12. 3 years ago = 9 years."
  },
  {
    "id": 119,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "A mixture of 60 L milk and water has ratio 3 : 2. How much water is in the mixture?",
    "options": [
      "36 L",
      "20 L",
      "30 L",
      "24 L"
    ],
    "answer": 3,
    "explanation": "Water = ($\\frac{2}{5}$) × 60 = 24 L."
  },
  {
    "id": 120,
    "chapter": "7M06",
    "topic": "Ratio & Proportion",
    "difficulty": "hard",
    "question": "If (2x + 1) : (x + 5) = 3 : 4, find x.",
    "options": [
      "2",
      "3",
      "$\\frac{7}{5}$",
      "$\\frac{11}{5}$"
    ],
    "answer": 3,
    "explanation": "4(2x+1) = 3(x+5) → 8x+4 = 3x+15 → 5x = 11 → x = $\\frac{11}{5}$."
  },
  {
    "id": 121,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "When Selling Price (SP) > Cost Price (CP), there is always a:",
    "options": [
      "Loss",
      "Discount",
      "Tax",
      "Profit"
    ],
    "answer": 3,
    "explanation": "SP > CP means you sold for more than you paid → Profit."
  },
  {
    "id": 122,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "CP = Rs. 200 and SP = Rs. 245. Find the profit.",
    "options": [
      "Rs. 445",
      "Rs. 55",
      "Rs. 25",
      "Rs. 45"
    ],
    "answer": 3,
    "explanation": "Profit = SP − CP = 245 − 200 = Rs. 45."
  },
  {
    "id": 123,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "CP = Rs. 500 and SP = Rs. 430. Find the loss.",
    "options": [
      "Rs. 30",
      "Rs. 930",
      "Rs. 60",
      "Rs. 70"
    ],
    "answer": 3,
    "explanation": "Loss = CP − SP = 500 − 430 = Rs. 70."
  },
  {
    "id": 124,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "Profit % is always calculated on:",
    "options": [
      "Selling Price (SP)",
      "Marked Price",
      "Discount",
      "Cost Price (CP)"
    ],
    "answer": 3,
    "explanation": "Standard Profit % = (Profit / CP) × 100%."
  },
  {
    "id": 125,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "A pen bought for Rs. 50 is sold at Rs. 10 profit. Find SP.",
    "options": [
      "Rs. 40",
      "Rs. 55",
      "Rs. 70",
      "Rs. 60"
    ],
    "answer": 3,
    "explanation": "SP = CP + Profit = 50 + 10 = Rs. 60."
  },
  {
    "id": 126,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "If CP = Rs. 100 and SP = Rs. 125, what is the profit percentage?",
    "options": [
      "20%",
      "15%",
      "30%",
      "25%"
    ],
    "answer": 3,
    "explanation": "Profit = 25 on CP 100 → 25%."
  },
  {
    "id": 127,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "easy",
    "question": "If CP = Rs. 300 and Loss = Rs. 40, find SP.",
    "options": [
      "Rs. 340",
      "Rs. 240",
      "Rs. 270",
      "Rs. 260"
    ],
    "answer": 3,
    "explanation": "SP = CP − Loss = 300 − 40 = Rs. 260."
  },
  {
    "id": 128,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "A book bought for Rs. 400 is sold for Rs. 460. Find the profit percentage.",
    "options": [
      "12%",
      "18%",
      "20%",
      "15%"
    ],
    "answer": 3,
    "explanation": "Profit = 60. Profit% = ($\\frac{60}{400}$) × 100% = 15%."
  },
  {
    "id": 129,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "An item with CP Rs. 500 is sold at a 10% loss. Find the SP.",
    "options": [
      "Rs. 490",
      "Rs. 550",
      "Rs. 400",
      "Rs. 450"
    ],
    "answer": 3,
    "explanation": "Loss = 10% of 500 = 50. SP = 500 − 50 = Rs. 450."
  },
  {
    "id": 130,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "A bag costing Rs. 800 is sold at 20% profit. Find the SP.",
    "options": [
      "Rs. 820",
      "Rs. 920",
      "Rs. 1,000",
      "Rs. 960"
    ],
    "answer": 3,
    "explanation": "Profit = 20% of 800 = 160. SP = 800 + 160 = Rs. 960."
  },
  {
    "id": 131,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "A watch bought for Rs. 1,200 is sold for Rs. 1,020. Find the loss percentage.",
    "options": [
      "12%",
      "18%",
      "20%",
      "15%"
    ],
    "answer": 3,
    "explanation": "Loss = 180. Loss% = ($\\frac{180}{1200}$) × 100% = 15%."
  },
  {
    "id": 132,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "Marked Price = Rs. 600, Discount = 15%. Find the Selling Price.",
    "options": [
      "Rs. 585",
      "Rs. 520",
      "Rs. 490",
      "Rs. 510"
    ],
    "answer": 3,
    "explanation": "Discount = 15% of 600 = 90. SP = 600 − 90 = Rs. 510."
  },
  {
    "id": 133,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "A shopkeeper buys 10 apples for Rs. 150 and sells all for Rs. 180. Find profit %.",
    "options": [
      "15%",
      "25%",
      "30%",
      "20%"
    ],
    "answer": 3,
    "explanation": "Profit = 30. Profit% = ($\\frac{30}{150}$) × 100% = 20%."
  },
  {
    "id": 134,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "medium",
    "question": "If SP = Rs. 660 and Profit = 10%, what was the CP?",
    "options": [
      "Rs. 594",
      "Rs. 650",
      "Rs. 550",
      "Rs. 600"
    ],
    "answer": 3,
    "explanation": "CP = SP / 1.10 = 660 / 1.1 = Rs. 600."
  },
  {
    "id": 135,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "By selling a fan for Rs. 1,360, a man loses 15%. Find the Cost Price.",
    "options": [
      "Rs. 1,564",
      "Rs. 1,500",
      "Rs. 1,700",
      "Rs. 1,600"
    ],
    "answer": 3,
    "explanation": "85% of CP = 1,360 → CP = 1360 × 100 / 85 = Rs. 1,600."
  },
  {
    "id": 136,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A bike bought for Rs. 4,500 had Rs. 500 spent on repairs, then sold for Rs. 5,750. Find profit %.",
    "options": [
      "12%",
      "18%",
      "25%",
      "15%"
    ],
    "answer": 3,
    "explanation": "Total CP = 4500 + 500 = 5,000. Profit = 750. $\\frac{750}{5000}$ × 100 = 15%."
  },
  {
    "id": 137,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "If the CP of 12 pens equals the SP of 10 pens, find the profit percentage.",
    "options": [
      "16.67%",
      "25%",
      "10%",
      "20%"
    ],
    "answer": 3,
    "explanation": "Let CP of 1 pen = 1. CP of 10 = 10, SP of 10 = 12 → Profit = $\\frac{2}{10}$ = 20%."
  },
  {
    "id": 138,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A jacket is sold for Rs. 1,800 at 20% profit. What would the SP be for a 10% loss?",
    "options": [
      "Rs. 1,440",
      "Rs. 1,500",
      "Rs. 1,260",
      "Rs. 1,350"
    ],
    "answer": 3,
    "explanation": "CP = 1800 / 1.2 = 1,500. With 10% loss: 1500 × 0.9 = Rs. 1,350."
  },
  {
    "id": 139,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A trader marks goods 40% above CP and gives a 25% discount. Find his net profit %.",
    "options": [
      "15%",
      "10%",
      "7.5%",
      "5%"
    ],
    "answer": 3,
    "explanation": "Let CP = 100 → MP = 140 → SP = 140 × 0.75 = 105 → 5% profit."
  },
  {
    "id": 140,
    "chapter": "7M07",
    "topic": "Profit & Loss",
    "difficulty": "hard",
    "question": "Two shirts are sold for Rs. 600 each: one at 20% profit and one at 20% loss. Overall result is:",
    "options": [
      "No profit, no loss",
      "4% profit",
      "2% loss",
      "4% loss"
    ],
    "answer": 3,
    "explanation": "CP1 = 500, CP2 = 750 → Total CP = 1,250 vs Total SP = 1,200 → $\\frac{50}{1250}$ = 4% loss."
  },
  {
    "id": 141,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "If 5 pens cost Rs. 75, what is the cost of 1 pen?",
    "options": [
      "Rs. 12",
      "Rs. 25",
      "Rs. 375",
      "Rs. 15"
    ],
    "answer": 3,
    "explanation": "75 ÷ 5 = Rs. 15."
  },
  {
    "id": 142,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "If 1 kg of rice costs Rs. 85, how much do 4 kg cost?",
    "options": [
      "Rs. 320",
      "Rs. 360",
      "Rs. 255",
      "Rs. 340"
    ],
    "answer": 3,
    "explanation": "85 × 4 = Rs. 340."
  },
  {
    "id": 143,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "A car travels 120 km in 3 hours. What is its speed per hour?",
    "options": [
      "30 km/h",
      "60 km/h",
      "360 km/h",
      "40 km/h"
    ],
    "answer": 3,
    "explanation": "120 ÷ 3 = 40 km/h."
  },
  {
    "id": 144,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "If 1 dozen eggs cost Rs. 180, how much does 1 egg cost?",
    "options": [
      "Rs. 18",
      "Rs. 12",
      "Rs. 20",
      "Rs. 15"
    ],
    "answer": 3,
    "explanation": "1 dozen = 12 eggs. 180 ÷ 12 = Rs. 15."
  },
  {
    "id": 145,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "More workers finishing the same job take fewer days. This is an example of:",
    "options": [
      "Direct variation",
      "Linear profit",
      "Equal ratio",
      "Indirect (inverse) variation"
    ],
    "answer": 3,
    "explanation": "When one quantity increases and the other decreases proportionally, it's inverse variation."
  },
  {
    "id": 146,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "If 3 books weigh 900 g, how much do 5 books weigh?",
    "options": [
      "1,200 g",
      "1,800 g",
      "300 g",
      "1,500 g"
    ],
    "answer": 3,
    "explanation": "1 book = 300 g → 5 books = 1,500 g."
  },
  {
    "id": 147,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "easy",
    "question": "A tap fills 24 liters in 4 minutes. How much in 1 minute?",
    "options": [
      "4 liters",
      "8 liters",
      "12 liters",
      "6 liters"
    ],
    "answer": 3,
    "explanation": "24 ÷ 4 = 6 liters/min."
  },
  {
    "id": 148,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "If 6 notebooks cost Rs. 270, how much do 10 notebooks cost?",
    "options": [
      "Rs. 400",
      "Rs. 420",
      "Rs. 540",
      "Rs. 450"
    ],
    "answer": 3,
    "explanation": "1 notebook = 45 → 10 × 45 = Rs. 450."
  },
  {
    "id": 149,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "8 workers can build a wall in 6 days. How many days will 12 workers take?",
    "options": [
      "9 days",
      "3 days",
      "5 days",
      "4 days"
    ],
    "answer": 3,
    "explanation": "Inverse variation: (8 × 6) ÷ 12 = 4 days."
  },
  {
    "id": 150,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "A train covers 210 km in 3.5 hours. How far will it travel in 5 hours?",
    "options": [
      "280 km",
      "350 km",
      "250 km",
      "300 km"
    ],
    "answer": 3,
    "explanation": "Speed = 210 / 3.5 = 60 km/h → 60 × 5 = 300 km."
  },
  {
    "id": 151,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "If 15 oranges cost Rs. 180, how many oranges can be bought for Rs. 300?",
    "options": [
      "20",
      "30",
      "24",
      "25"
    ],
    "answer": 3,
    "explanation": "1 orange = Rs. 12. 300 ÷ 12 = 25 oranges."
  },
  {
    "id": 152,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "A hostel has food for 40 students for 15 days. If 10 more join, how long will the food last?",
    "options": [
      "10 days",
      "18 days",
      "14 days",
      "12 days"
    ],
    "answer": 3,
    "explanation": "40 × 15 = 600 student-days. 600 ÷ 50 = 12 days."
  },
  {
    "id": 153,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "6 machines print 1,200 pages in 1 hour. How many pages will 9 machines print in 1 hour?",
    "options": [
      "1,600",
      "2,000",
      "2,400",
      "1,800"
    ],
    "answer": 3,
    "explanation": "1 machine = 200 pages/hr → 9 × 200 = 1,800."
  },
  {
    "id": 154,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "medium",
    "question": "Walking at 4 km/h, Maya takes 45 minutes. How long if she walks at 6 km/h?",
    "options": [
      "67.5 minutes",
      "25 minutes",
      "35 minutes",
      "30 minutes"
    ],
    "answer": 3,
    "explanation": "4 × 45 = 180; 180 ÷ 6 = 30 minutes."
  },
  {
    "id": 155,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "12 men finish a job in 10 days. After 4 days, 4 men leave. How many more days will the remaining men take?",
    "options": [
      "6 days",
      "8 days",
      "12 days",
      "9 days"
    ],
    "answer": 3,
    "explanation": "Total = 120 man-days. Done in 4 days = 48. Left = 72. 72 ÷ 8 = 9 days."
  },
  {
    "id": 156,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "If 5 workers earn Rs. 4,500 in 6 days, how much will 8 workers earn in 4 days?",
    "options": [
      "Rs. 4,200",
      "Rs. 5,400",
      "Rs. 3,600",
      "Rs. 4,800"
    ],
    "answer": 3,
    "explanation": "1 worker-day = 4500 / 30 = Rs. 150. 8 × 4 × 150 = Rs. 4,800."
  },
  {
    "id": 157,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "A garrison of 300 soldiers has rations for 42 days. After 12 days, 150 more join. How long do remaining rations last?",
    "options": [
      "24 days",
      "28 days",
      "18 days",
      "20 days"
    ],
    "answer": 3,
    "explanation": "Left: 300 × 30 = 9,000 soldier-days. 9,000 ÷ 450 = 20 days."
  },
  {
    "id": 158,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "Tap A fills a tank in 6 hours and Tap B fills it in 12 hours. Together, how long to fill the tank?",
    "options": [
      "9 hours",
      "3 hours",
      "5 hours",
      "4 hours"
    ],
    "answer": 3,
    "explanation": "Rate = $\\frac{1}{6}$ + $\\frac{1}{12}$ = $\\frac{3}{12}$ = $\\frac{1}{4}$ tank/hr → 4 hours."
  },
  {
    "id": 159,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "If 4 pumps working 6 hours/day empty a pool in 5 days, how many days for 5 pumps working 8 hours/day?",
    "options": [
      "4 days",
      "2.5 days",
      "6 days",
      "3 days"
    ],
    "answer": 3,
    "explanation": "Total = 4×6×5 = 120 pump-hrs. 120 ÷ (5×8) = 3 days."
  },
  {
    "id": 160,
    "chapter": "7M08",
    "topic": "Unitary Method",
    "difficulty": "hard",
    "question": "A wheel makes 350 revolutions to travel 770 m. How many revolutions to travel 1.1 km?",
    "options": [
      "450",
      "550",
      "600",
      "500"
    ],
    "answer": 3,
    "explanation": "1 rev = $\\frac{770}{350}$ = 2.2 m. 1,100 ÷ 2.2 = 500 revolutions."
  },
  {
    "id": 161,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "Find the perimeter of a square with side 9 cm.",
    "options": [
      "81 cm",
      "18 cm",
      "27 cm",
      "36 cm"
    ],
    "answer": 3,
    "explanation": "Perimeter = 4 × 9 = 36 cm."
  },
  {
    "id": 162,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "Find the area of a rectangle with length 8 cm and breadth 5 cm.",
    "options": [
      "26 cm²",
      "13 cm²",
      "80 cm²",
      "40 cm²"
    ],
    "answer": 3,
    "explanation": "Area = l × b = 8 × 5 = 40 cm²."
  },
  {
    "id": 163,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "A rectangle has length 12 cm and breadth 5 cm. Find its perimeter.",
    "options": [
      "60 cm",
      "17 cm",
      "24 cm",
      "34 cm"
    ],
    "answer": 3,
    "explanation": "$2^{12 + 5}$ = 34 cm."
  },
  {
    "id": 164,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "Find the volume of a cube with edge 3 cm.",
    "options": [
      "9 cm³",
      "18 cm³",
      "54 cm³",
      "27 cm³"
    ],
    "answer": 3,
    "explanation": "Volume = $3^{3}$ = 27 cm³."
  },
  {
    "id": 165,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "How many square meters are in 1 hectare?",
    "options": [
      "1,000 m²",
      "100 m²",
      "100,000 m²",
      "10,000 m²"
    ],
    "answer": 3,
    "explanation": "1 hectare = 100 m × 100 m = 10,000 m²."
  },
  {
    "id": 166,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "Find the perimeter of an equilateral triangle with side 11 cm.",
    "options": [
      "22 cm",
      "44 cm",
      "121 cm",
      "33 cm"
    ],
    "answer": 3,
    "explanation": "3 × 11 = 33 cm."
  },
  {
    "id": 167,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "easy",
    "question": "Volume of a cuboid is given by:",
    "options": [
      "2(l + b)",
      "l × b",
      "2(lb + bh + lh)",
      "l × b × h"
    ],
    "answer": 3,
    "explanation": "Cuboid volume = length × breadth × height."
  },
  {
    "id": 168,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "Find the area of a triangle with base 14 cm and height 9 cm.",
    "options": [
      "126 cm²",
      "46 cm²",
      "23 cm²",
      "63 cm²"
    ],
    "answer": 3,
    "explanation": "Area = ½ × 14 × 9 = 63 cm²."
  },
  {
    "id": 169,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "Find the volume of a cube with edge length 4 cm.",
    "options": [
      "16 cm³",
      "48 cm³",
      "96 cm³",
      "64 cm³"
    ],
    "answer": 3,
    "explanation": "$4^{3}$ = 64 cm³."
  },
  {
    "id": 170,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "Find the area of a parallelogram with base 15 cm and height 8 cm.",
    "options": [
      "60 cm²",
      "46 cm²",
      "240 cm²",
      "120 cm²"
    ],
    "answer": 3,
    "explanation": "Area = base × height = 15 × 8 = 120 cm²."
  },
  {
    "id": 171,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "Find the total surface area of a cube with side 5 cm.",
    "options": [
      "125 cm²",
      "100 cm²",
      "25 cm²",
      "150 cm²"
    ],
    "answer": 3,
    "explanation": "TSA = $6a^{2}$ = 6 × 25 = 150 cm²."
  },
  {
    "id": 172,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "A square has perimeter 48 cm. What is its area?",
    "options": [
      "192 cm²",
      "96 cm²",
      "120 cm²",
      "144 cm²"
    ],
    "answer": 3,
    "explanation": "Side = 48 ÷ 4 = 12 cm. Area = $12^{2}$ = 144 cm²."
  },
  {
    "id": 173,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "Find the volume of a cuboid of dimensions 10 cm × 6 cm × 4 cm.",
    "options": [
      "200 cm³",
      "120 cm³",
      "248 cm³",
      "240 cm³"
    ],
    "answer": 3,
    "explanation": "10 × 6 × 4 = 240 cm³."
  },
  {
    "id": 174,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "medium",
    "question": "A rectangular field has area 180 m² and length 15 m. Find its breadth.",
    "options": [
      "15 m",
      "10 m",
      "14 m",
      "12 m"
    ],
    "answer": 3,
    "explanation": "Breadth = 180 ÷ 15 = 12 m."
  },
  {
    "id": 175,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "A room is 8 m × 6 m. How many square tiles of side 50 cm are needed to pave the floor?",
    "options": [
      "96",
      "48",
      "384",
      "192"
    ],
    "answer": 3,
    "explanation": "Floor = 48 m². Tile = 0.5 × 0.5 = 0.25 m². 48 ÷ 0.25 = 192 tiles."
  },
  {
    "id": 176,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "Find the total surface area of a cuboid measuring 8 cm × 5 cm × 4 cm.",
    "options": [
      "160 cm²",
      "92 cm²",
      "164 cm²",
      "184 cm²"
    ],
    "answer": 3,
    "explanation": "2(40 + 20 + 32) = 2 × 92 = 184 cm²."
  },
  {
    "id": 177,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "A path 2 m wide runs inside a square park of side 20 m. Find the area of the path.",
    "options": [
      "160 m²",
      "256 m²",
      "400 m²",
      "144 m²"
    ],
    "answer": 3,
    "explanation": "Outer = $20^{2}$ = 400. Inner = $16^{2}$ = 256. Path = 400 − 256 = 144 m²."
  },
  {
    "id": 178,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "How many 2 cm cubes can fit inside a box of size 10 cm × 8 cm × 6 cm?",
    "options": [
      "480",
      "120",
      "30",
      "60"
    ],
    "answer": 3,
    "explanation": "Box vol = 480 cm³. Cube vol = 8 cm³. 480 ÷ 8 = 60 cubes."
  },
  {
    "id": 179,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "The area of a triangle is 54 cm² and its base is 12 cm. Find its height.",
    "options": [
      "4.5 cm",
      "18 cm",
      "6 cm",
      "9 cm"
    ],
    "answer": 3,
    "explanation": "½ × 12 × h = 54 → 6h = 54 → h = 9 cm."
  },
  {
    "id": 180,
    "chapter": "7M09",
    "topic": "Perimeter, Area & Volume",
    "difficulty": "hard",
    "question": "A water tank 5 m × 4 m × 3 m is $\\frac{2}{3}$ full. How many liters of water are in it? (1 m³ = 1,000 L)",
    "options": [
      "60,000 L",
      "20,000 L",
      "30,000 L",
      "40,000 L"
    ],
    "answer": 3,
    "explanation": "Total = 60 m³. $\\frac{2}{3}$ × 60 = 40 m³ = 40,000 L."
  },
  {
    "id": 181,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "Write 5 × 5 × 5 × 5 in index (power) form.",
    "options": [
      "$4^{5}$",
      "5 × 4",
      "20",
      "$5^{4}$"
    ],
    "answer": 3,
    "explanation": "5 multiplied 4 times is $5^{4}$."
  },
  {
    "id": 182,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "In $7^{3}$, what is the base?",
    "options": [
      "3",
      "21",
      "343",
      "7"
    ],
    "answer": 3,
    "explanation": "In aⁿ, a is the base and n is the exponent."
  },
  {
    "id": 183,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "What is the value of $2^{5}$?",
    "options": [
      "10",
      "16",
      "64",
      "32"
    ],
    "answer": 3,
    "explanation": "2×2×2×2×2 = 32."
  },
  {
    "id": 184,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "What is $9^{0}$?",
    "options": [
      "0",
      "9",
      "Undefined",
      "1"
    ],
    "answer": 3,
    "explanation": "Any non-zero number to the power 0 equals 1."
  },
  {
    "id": 185,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "Simplify: $x^{4}$ × $x^{3}$",
    "options": [
      "$x^{12}$",
      "$2x^{7}$",
      "x",
      "$x^{7}$"
    ],
    "answer": 3,
    "explanation": "When multiplying same bases, add exponents: 4 + 3 = 7."
  },
  {
    "id": 186,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "Simplify: $y^{8}$ ÷ $y^{2}$",
    "options": [
      "$y^{4}$",
      "$y^{10}$",
      "$y^{16}$",
      "$y^{6}$"
    ],
    "answer": 3,
    "explanation": "When dividing same bases, subtract exponents: 8 − 2 = 6."
  },
  {
    "id": 187,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "easy",
    "question": "What is $(-3)^{2}$?",
    "options": [
      "−9",
      "−6",
      "6",
      "9"
    ],
    "answer": 3,
    "explanation": "(−3) × (−3) = +9."
  },
  {
    "id": 188,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Simplify: $2^{3}$ × $2^{4}$ ÷ $2^{5}$",
    "options": [
      "2",
      "8",
      "16",
      "4"
    ],
    "answer": 3,
    "explanation": "2^(3+4−5) = $2^{2}$ = 4."
  },
  {
    "id": 189,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Evaluate: $5^{0}$ + $3^{1}$",
    "options": [
      "3",
      "8",
      "1",
      "4"
    ],
    "answer": 3,
    "explanation": "1 + 3 = 4."
  },
  {
    "id": 190,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Simplify: ($a^{3}$$)^{4}$",
    "options": [
      "$a^{7}$",
      "$a^{81}$",
      "$4a^{3}$",
      "$a^{12}$"
    ],
    "answer": 3,
    "explanation": "Power of a power multiplies exponents: 3 × 4 = 12."
  },
  {
    "id": 191,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Evaluate: ($2^{2}$$)^{3}$",
    "options": [
      "32",
      "12",
      "16",
      "64"
    ],
    "answer": 3,
    "explanation": "2^(2×3) = $2^{6}$ = 64."
  },
  {
    "id": 192,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Express 128 as a power of 2.",
    "options": [
      "$2^{6}$",
      "$2^{8}$",
      "$2^{5}$",
      "$2^{7}$"
    ],
    "answer": 3,
    "explanation": "$2^{7}$ = 128."
  },
  {
    "id": 193,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "Simplify: ($3x^{2}$$)^{2}$",
    "options": [
      "$3x^{4}$",
      "$6x^{4}$",
      "$9x^{2}$",
      "$9x^{4}$"
    ],
    "answer": 3,
    "explanation": "$3^{2}$ × ($x^{2}$$)^{2}$ = $9x^{4}$."
  },
  {
    "id": 194,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "medium",
    "question": "If 3ˣ = 81, find x.",
    "options": [
      "3",
      "5",
      "27",
      "4"
    ],
    "answer": 3,
    "explanation": "$3^{4}$ = 81, so x = 4."
  },
  {
    "id": 195,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "Simplify: ($2x^{3}$$y^{2}$) × ($5x^{2}$$y^{4}$)",
    "options": [
      "$7x^{5}$$y^{6}$",
      "$10x^{6}$$y^{8}$",
      "$7x^{6}$$y^{8}$",
      "$10x^{5}$$y^{6}$"
    ],
    "answer": 3,
    "explanation": "Multiply coefficients (10) and add powers of x (5) and y (6)."
  },
  {
    "id": 196,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "Evaluate: ($3^{4}$ × $9^{2}$) ÷ $3^{6}$",
    "options": [
      "3",
      "27",
      "81",
      "9"
    ],
    "answer": 3,
    "explanation": "$9^{2}$ = ($3^{2}$$)^{2}$ = $3^{4}$. So 3^(4+4−6) = $3^{2}$ = 9."
  },
  {
    "id": 197,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "Find x if $2^{x + 1}$ = 32.",
    "options": [
      "5",
      "3",
      "6",
      "4"
    ],
    "answer": 3,
    "explanation": "32 = $2^{5}$, so x + 1 = 5 → x = 4."
  },
  {
    "id": 198,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "Evaluate: ($2^{0}$ + $3^{0}$) × $5^{0}$",
    "options": [
      "1",
      "0",
      "10",
      "2"
    ],
    "answer": 3,
    "explanation": "(1 + 1) × 1 = 2."
  },
  {
    "id": 199,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "Simplify: ($12a^{5}$$b^{4}$) ÷ ($4a^{2}$b)",
    "options": [
      "$8a^{3}$$b^{3}$",
      "$3a^{7}$$b^{5}$",
      "$3a^{3}$$b^{4}$",
      "$3a^{3}$$b^{3}$"
    ],
    "answer": 3,
    "explanation": "12÷4=3, a^(5−2)=$a^{3}$, b^(4−1)=$b^{3}$."
  },
  {
    "id": 200,
    "chapter": "7M10",
    "topic": "Indices",
    "difficulty": "hard",
    "question": "If 5^(2x − 1) = 125, find x.",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "125 = $5^{3}$, so 2x − 1 = 3 → 2x = 4 → x = 2."
  },
  {
    "id": 201,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "How many terms are in $4x^{2}$ − 3x + 7?",
    "options": [
      "2",
      "4",
      "7",
      "3"
    ],
    "answer": 3,
    "explanation": "The three terms are $4x^{2}$, −3x, and 7."
  },
  {
    "id": 202,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "What is the coefficient of x in −9xy?",
    "options": [
      "−9",
      "9",
      "xy",
      "−9y"
    ],
    "answer": 3,
    "explanation": "Excluding x, the factor multiplying x is −9y."
  },
  {
    "id": 203,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "Which pair are like terms?",
    "options": [
      "5a and 5b",
      "3x and $3x^{2}$",
      "2xy and 2x",
      "$5a^{2}$ and $-2a^{2}$"
    ],
    "answer": 3,
    "explanation": "Like terms have the exact same variables raised to the same powers."
  },
  {
    "id": 204,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "Simplify: 7m + 4m − 2m",
    "options": [
      "13m",
      "$9m^{3}$",
      "11m",
      "9m"
    ],
    "answer": 3,
    "explanation": "(7 + 4 − 2)m = 9m."
  },
  {
    "id": 205,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "An expression with exactly two terms is called a:",
    "options": [
      "Monomial",
      "Trinomial",
      "Constant",
      "Binomial"
    ],
    "answer": 3,
    "explanation": "Bi = two → Binomial."
  },
  {
    "id": 206,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "If x = 4, find the value of 3x + 5.",
    "options": [
      "12",
      "19",
      "27",
      "17"
    ],
    "answer": 3,
    "explanation": "3(4) + 5 = 12 + 5 = 17."
  },
  {
    "id": 207,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "easy",
    "question": "Expand: 3(x + 4)",
    "options": [
      "3x + 4",
      "x + 12",
      "3x + 7",
      "3x + 12"
    ],
    "answer": 3,
    "explanation": "3·x + 3·4 = 3x + 12."
  },
  {
    "id": 208,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "Simplify: (3x + 5y) + (2x − 3y)",
    "options": [
      "5x + 8y",
      "x + 2y",
      "6x − 15y",
      "5x + 2y"
    ],
    "answer": 3,
    "explanation": "3x+2x = 5x and 5y−3y = 2y."
  },
  {
    "id": 209,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "If x = 3 and y = −2, find $2x^{2}$ − 3y.",
    "options": [
      "12",
      "6",
      "18",
      "24"
    ],
    "answer": 3,
    "explanation": "2(9) − 3(−2) = 18 + 6 = 24."
  },
  {
    "id": 210,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "Subtract (2a − 5b) from (6a + 3b).",
    "options": [
      "4a − 2b",
      "8a − 2b",
      "−4a − 8b",
      "4a + 8b"
    ],
    "answer": 3,
    "explanation": "(6a + 3b) − (2a − 5b) = 6a + 3b − 2a + 5b = 4a + 8b."
  },
  {
    "id": 211,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "What is the degree of the polynomial $5x^{3}$ − $2x^{2}$ + x − 8?",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Highest power of the variable is 3."
  },
  {
    "id": 212,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "Expand and simplify: 4(x + 2) − 2(x − 3)",
    "options": [
      "2x + 2",
      "2x + 5",
      "6x + 2",
      "2x + 14"
    ],
    "answer": 3,
    "explanation": "4x + 8 − 2x + 6 = 2x + 14."
  },
  {
    "id": 213,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "Multiply: −3x(2x − 5y)",
    "options": [
      "$-6x^{2}$ − 15xy",
      "−6x + 15y",
      "$6x^{2}$ − 15xy",
      "$-6x^{2}$ + 15xy"
    ],
    "answer": 3,
    "explanation": "−3x·2x = $-6x^{2}$ and −3x·(−5y) = +15xy."
  },
  {
    "id": 214,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "medium",
    "question": "Factorize: 6x + 18",
    "options": [
      "6(x + 18)",
      "3(2x + 9)",
      "6(x + 12)",
      "6(x + 3)"
    ],
    "answer": 3,
    "explanation": "Common factor 6 → 6(x + 3)."
  },
  {
    "id": 215,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "Expand: (x + 5)(x − 3)",
    "options": [
      "$x^{2}$ − 2x − 15",
      "$x^{2}$ + 8x − 15",
      "$x^{2}$ − 15",
      "$x^{2}$ + 2x − 15"
    ],
    "answer": 3,
    "explanation": "$x^{2}$ − 3x + 5x − 15 = $x^{2}$ + 2x − 15."
  },
  {
    "id": 216,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "What must be added to $3x^{2}$ − 5x + 2 to get $5x^{2}$ + x − 4?",
    "options": [
      "$2x^{2}$ − 4x − 2",
      "$8x^{2}$ − 4x − 2",
      "$2x^{2}$ + 6x + 6",
      "$2x^{2}$ + 6x − 6"
    ],
    "answer": 3,
    "explanation": "($5x^{2}$+x−4) − ($3x^{2}$−5x+2) = $2x^{2}$ + 6x − 6."
  },
  {
    "id": 217,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "Simplify: (2x − $3)^{2}$",
    "options": [
      "$4x^{2}$ − 9",
      "$4x^{2}$ + 9",
      "$4x^{2}$ − 6x + 9",
      "$4x^{2}$ − 12x + 9"
    ],
    "answer": 3,
    "explanation": "(a−$b)^{2}$ = $a^{2}$ − 2ab + $b^{2}$ = $4x^{2}$ − 12x + 9."
  },
  {
    "id": 218,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "Factorize: $x^{2}$ − 49",
    "options": [
      "(x − $7)^{2}$",
      "(x + 49)(x − 1)",
      "(x + $7)^{2}$",
      "(x + 7)(x − 7)"
    ],
    "answer": 3,
    "explanation": "Difference of squares $a^{2}$ − $b^{2}$ = (a+b)(a−b)."
  },
  {
    "id": 219,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "If P = 2x − y and Q = x + 3y, find 2P − Q.",
    "options": [
      "3x + y",
      "x − 5y",
      "4x − 5y",
      "3x − 5y"
    ],
    "answer": 3,
    "explanation": "2(2x−y) − (x+3y) = 4x − 2y − x − 3y = 3x − 5y."
  },
  {
    "id": 220,
    "chapter": "7M11",
    "topic": "Algebraic Expression",
    "difficulty": "hard",
    "question": "Evaluate $a^{2}$ + 2ab + $b^{2}$ when a = 6 and b = 4.",
    "options": [
      "52",
      "84",
      "64",
      "100"
    ],
    "answer": 3,
    "explanation": "$a^{2}$ + 2ab + $b^{2}$ = (a + $b)^{2}$ = (6 + $4)^{2}$ = 100."
  },
  {
    "id": 221,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "Solve for x: x + 9 = 17",
    "options": [
      "x = 26",
      "x = 7",
      "x = 9",
      "x = 8"
    ],
    "answer": 3,
    "explanation": "x = 17 − 9 = 8."
  },
  {
    "id": 222,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "Solve for y: 5y = 45",
    "options": [
      "y = 40",
      "y = 5",
      "y = 10",
      "y = 9"
    ],
    "answer": 3,
    "explanation": "y = 45 ÷ 5 = 9."
  },
  {
    "id": 223,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "Solve for m: m / 4 = 7",
    "options": [
      "m = 11",
      "m = 3",
      "m = 1.75",
      "m = 28"
    ],
    "answer": 3,
    "explanation": "m = 7 × 4 = 28."
  },
  {
    "id": 224,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "Which symbol means 'greater than or equal to'?",
    "options": [
      "≤",
      ">",
      "≠",
      "≥"
    ],
    "answer": 3,
    "explanation": "≥ means greater than or equal to."
  },
  {
    "id": 225,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "If x > 5, which value is a valid solution?",
    "options": [
      "5",
      "4",
      "−6",
      "7"
    ],
    "answer": 3,
    "explanation": "7 is strictly greater than 5."
  },
  {
    "id": 226,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "Write as an equation: 'Three times a number n minus 4 is 11.'",
    "options": [
      "3n + 4 = 11",
      "4 − 3n = 11",
      "3(n − 4) = 11",
      "3n − 4 = 11"
    ],
    "answer": 3,
    "explanation": "3n − 4 = 11."
  },
  {
    "id": 227,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "easy",
    "question": "What is the solution of 2x = 0?",
    "options": [
      "x = 2",
      "x = −2",
      "No solution",
      "x = 0"
    ],
    "answer": 3,
    "explanation": "0 ÷ 2 = 0."
  },
  {
    "id": 228,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "Solve for x: 3x − 7 = 14",
    "options": [
      "x = 21",
      "x = 3",
      "x = 5",
      "x = 7"
    ],
    "answer": 3,
    "explanation": "3x = 21 → x = 7."
  },
  {
    "id": 229,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "If $2^{x + 4}$ = 18, find x.",
    "options": [
      "7",
      "11",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "x + 4 = 9 → x = 5."
  },
  {
    "id": 230,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "Solve: 5x − 3 = 2x + 12",
    "options": [
      "x = 3",
      "x = 9",
      "x = $\\frac{15}{7}$",
      "x = 5"
    ],
    "answer": 3,
    "explanation": "3x = 15 → x = 5."
  },
  {
    "id": 231,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "Solve the inequality: 2x + 3 < 11",
    "options": [
      "x > 4",
      "x < 7",
      "x ≤ 4",
      "x < 4"
    ],
    "answer": 3,
    "explanation": "2x < 8 → x < 4."
  },
  {
    "id": 232,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "The sum of two consecutive integers is 35. Find the smaller integer.",
    "options": [
      "18",
      "16",
      "15",
      "17"
    ],
    "answer": 3,
    "explanation": "x + (x + 1) = 35 → 2x = 34 → x = 17."
  },
  {
    "id": 233,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "If y = 2x + 1, what is y when x = −3?",
    "options": [
      "7",
      "−7",
      "5",
      "−5"
    ],
    "answer": 3,
    "explanation": "y = 2(−3) + 1 = −6 + 1 = −5."
  },
  {
    "id": 234,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "medium",
    "question": "Solve: (x / 3) + 5 = 9",
    "options": [
      "x = 42",
      "x = 4",
      "x = 3",
      "x = 12"
    ],
    "answer": 3,
    "explanation": "x/3 = 4 → x = 12."
  },
  {
    "id": 235,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "When you multiply or divide an inequality by a negative number, the inequality sign:",
    "options": [
      "Stays the same",
      "Becomes =",
      "Disappears",
      "Flips (reverses)"
    ],
    "answer": 3,
    "explanation": "Multiplying/dividing by a negative reverses the inequality sign."
  },
  {
    "id": 236,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "Solve: −3x ≥ 12",
    "options": [
      "x ≥ −4",
      "x ≤ 4",
      "x ≥ 4",
      "x ≤ −4"
    ],
    "answer": 3,
    "explanation": "Divide by −3 and flip the sign → x ≤ −4."
  },
  {
    "id": 237,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "A rectangle's length is 4 cm more than its width. If perimeter is 32 cm, find the width.",
    "options": [
      "8 cm",
      "10 cm",
      "7 cm",
      "6 cm"
    ],
    "answer": 3,
    "explanation": "2(w + w + 4) = 32 → 2w + 4 = 16 → 2w = 12 → w = 6 cm."
  },
  {
    "id": 238,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "Solve: (2x − 1)/3 = (x + 4)/2",
    "options": [
      "x = 10",
      "x = 7",
      "x = 11",
      "x = 14"
    ],
    "answer": 3,
    "explanation": "Cross-multiply: 2(2x−1) = 3(x+4) → 4x − 2 = 3x + 12 → x = 14."
  },
  {
    "id": 239,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "Reena is 3 times as old as Tina. In 5 years, the sum of their ages will be 46. Find Tina's age now.",
    "options": [
      "12",
      "27",
      "8",
      "9"
    ],
    "answer": 3,
    "explanation": "(3t + 5) + (t + 5) = 46 → 4t + 10 = 46 → 4t = 36 → t = 9."
  },
  {
    "id": 240,
    "chapter": "7M12",
    "topic": "Equation & Inequality",
    "difficulty": "hard",
    "question": "Which point lies on the line y = 3x − 2?",
    "options": [
      "(2, 6)",
      "(1, 3)",
      "(3, 5)",
      "(2, 4)"
    ],
    "answer": 3,
    "explanation": "Check (2, 4): 3(2) − 2 = 4 ✓."
  },
  {
    "id": 241,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "An angle greater than 90° and less than 180° is called:",
    "options": [
      "Acute angle",
      "Reflex angle",
      "Right angle",
      "Obtuse angle"
    ],
    "answer": 3,
    "explanation": "90° < obtuse < 180°."
  },
  {
    "id": 242,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "What is the measure of a straight angle?",
    "options": [
      "90°",
      "360°",
      "270°",
      "180°"
    ],
    "answer": 3,
    "explanation": "A straight line forms a 180° angle."
  },
  {
    "id": 243,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "Two lines in a plane that never intersect are called:",
    "options": [
      "Perpendicular lines",
      "Intersecting lines",
      "Transversals",
      "Parallel lines"
    ],
    "answer": 3,
    "explanation": "Parallel lines remain equidistant and never meet."
  },
  {
    "id": 244,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "What is the sum of angles around a single point?",
    "options": [
      "180°",
      "90°",
      "270°",
      "360°"
    ],
    "answer": 3,
    "explanation": "A full rotation around a point is 360°."
  },
  {
    "id": 245,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "If two lines cross, vertically opposite angles are always:",
    "options": [
      "Supplementary",
      "Complementary",
      "90°",
      "Equal"
    ],
    "answer": 3,
    "explanation": "Vertically opposite angles are always equal."
  },
  {
    "id": 246,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "An angle of 210° is classified as a:",
    "options": [
      "Obtuse angle",
      "Straight angle",
      "Acute angle",
      "Reflex angle"
    ],
    "answer": 3,
    "explanation": "Angles between 180° and 360° are reflex angles."
  },
  {
    "id": 247,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "easy",
    "question": "Perpendicular lines intersect at an angle of:",
    "options": [
      "45°",
      "180°",
      "60°",
      "90°"
    ],
    "answer": 3,
    "explanation": "Perpendicular lines form right angles (90°)."
  },
  {
    "id": 248,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "Two angles are supplementary. If one is 65°, find the other.",
    "options": [
      "25°",
      "125°",
      "90°",
      "115°"
    ],
    "answer": 3,
    "explanation": "180° − 65° = 115°."
  },
  {
    "id": 249,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "What is the complement of an angle measuring 38°?",
    "options": [
      "142°",
      "62°",
      "42°",
      "52°"
    ],
    "answer": 3,
    "explanation": "90° − 38° = 52°."
  },
  {
    "id": 250,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "Two angles on a straight line are (3x)° and (2x)°. Find x.",
    "options": [
      "18",
      "45",
      "30",
      "36"
    ],
    "answer": 3,
    "explanation": "3x + 2x = 180 → 5x = 180 → x = 36."
  },
  {
    "id": 251,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "When a transversal cuts parallel lines, alternate interior angles are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Unequal",
      "Equal"
    ],
    "answer": 3,
    "explanation": "Alternate interior angles are equal."
  },
  {
    "id": 252,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "When a transversal cuts parallel lines, co-interior (allied) angles add up to:",
    "options": [
      "90°",
      "360°",
      "120°",
      "180°"
    ],
    "answer": 3,
    "explanation": "Co-interior angles are supplementary (sum = 180°)."
  },
  {
    "id": 253,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "An angle is equal to its own complement. What is its measure?",
    "options": [
      "90°",
      "60°",
      "30°",
      "45°"
    ],
    "answer": 3,
    "explanation": "x + x = 90° → x = 45°."
  },
  {
    "id": 254,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "medium",
    "question": "If two supplementary angles are in ratio 4 : 5, find the larger angle.",
    "options": [
      "80°",
      "90°",
      "120°",
      "100°"
    ],
    "answer": 3,
    "explanation": "($\\frac{5}{9}$) × 180° = 100°."
  },
  {
    "id": 255,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "An angle is 24° more than its complement. Find the angle.",
    "options": [
      "33°",
      "66°",
      "48°",
      "57°"
    ],
    "answer": 3,
    "explanation": "x + (x − 24) = 90 → 2x = 114 → x = 57°."
  },
  {
    "id": 256,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "Two parallel lines are cut by a transversal. Co-interior angles are (2x + 10)° and (3x − 30)°. Find x.",
    "options": [
      "36",
      "44",
      "32",
      "40"
    ],
    "answer": 3,
    "explanation": "2x + 10 + 3x − 30 = 180 → 5x − 20 = 180 → 5x = 200 → x = 40."
  },
  {
    "id": 257,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "An angle is 4 times its supplement. Find the angle.",
    "options": [
      "36°",
      "135°",
      "150°",
      "144°"
    ],
    "answer": 3,
    "explanation": "x + x/4 = 180 → 5x/4 = 180 → x = 144°."
  },
  {
    "id": 258,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "Three rays meet at a point forming angles 2x, 3x, and 4x. Find the smallest angle.",
    "options": [
      "40°",
      "120°",
      "160°",
      "80°"
    ],
    "answer": 3,
    "explanation": "9x = 360 → x = 40. Smallest = 2x = 80°."
  },
  {
    "id": 259,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "What is the supplement of the complement of 35°?",
    "options": [
      "55°",
      "145°",
      "35°",
      "125°"
    ],
    "answer": 3,
    "explanation": "Complement of 35° = 55°. Supplement of 55° = 180° − 55° = 125°."
  },
  {
    "id": 260,
    "chapter": "7M13",
    "topic": "Lines & Angles",
    "difficulty": "hard",
    "question": "Two lines intersect; one angle is (5x − 15)° and its vertically opposite angle is (3x + 25)°. Find the angle.",
    "options": [
      "20°",
      "65°",
      "95°",
      "85°"
    ],
    "answer": 3,
    "explanation": "5x − 15 = 3x + 25 → 2x = 40 → x = 20 → Angle = 5(20) − 15 = 85°."
  },
  {
    "id": 261,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "How many sides does a pentagon have?",
    "options": [
      "6",
      "7",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Penta = 5 sides."
  },
  {
    "id": 262,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "What is the sum of interior angles of a triangle?",
    "options": [
      "90°",
      "360°",
      "270°",
      "180°"
    ],
    "answer": 3,
    "explanation": "Angles in any triangle add up to 180°."
  },
  {
    "id": 263,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "A triangle with all three sides equal is called:",
    "options": [
      "Isosceles triangle",
      "Scalene triangle",
      "Right triangle",
      "Equilateral triangle"
    ],
    "answer": 3,
    "explanation": "Equilateral = all sides (and angles = 60°) equal."
  },
  {
    "id": 264,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "What is the sum of interior angles of a quadrilateral?",
    "options": [
      "180°",
      "270°",
      "540°",
      "360°"
    ],
    "answer": 3,
    "explanation": "A quadrilateral splits into 2 triangles → 360°."
  },
  {
    "id": 265,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "A quadrilateral with only one pair of parallel sides is a:",
    "options": [
      "Parallelogram",
      "Rhombus",
      "Rectangle",
      "Trapezium"
    ],
    "answer": 3,
    "explanation": "A trapezium has one pair of parallel sides."
  },
  {
    "id": 266,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "How many diagonals does a rectangle have?",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "A quadrilateral has 2 diagonals."
  },
  {
    "id": 267,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "easy",
    "question": "The longest chord of a circle is its:",
    "options": [
      "Radius",
      "Tangent",
      "Arc",
      "Diameter"
    ],
    "answer": 3,
    "explanation": "The diameter passes through the center and is the longest chord."
  },
  {
    "id": 268,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "In △ABC, ∠A = 50° and ∠B = 75°. Find ∠C.",
    "options": [
      "65°",
      "45°",
      "125°",
      "55°"
    ],
    "answer": 3,
    "explanation": "180° − (50° + 75°) = 55°."
  },
  {
    "id": 269,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "In an isosceles triangle, the vertex angle is 40°. Find each base angle.",
    "options": [
      "40°",
      "140°",
      "65°",
      "70°"
    ],
    "answer": 3,
    "explanation": "(180° − 40°) ÷ 2 = 70°."
  },
  {
    "id": 270,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "What is the sum of exterior angles of any convex polygon?",
    "options": [
      "180°",
      "540°",
      "720°",
      "360°"
    ],
    "answer": 3,
    "explanation": "Exterior angles of any convex polygon always sum to 360°."
  },
  {
    "id": 271,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "Find the sum of interior angles of a hexagon (6 sides).",
    "options": [
      "540°",
      "360°",
      "900°",
      "720°"
    ],
    "answer": 3,
    "explanation": "(n − 2) × 180° = (6 − 2) × 180° = 720°."
  },
  {
    "id": 272,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "In parallelogram ABCD, ∠A = 68°. Find ∠B (adjacent angle).",
    "options": [
      "68°",
      "22°",
      "122°",
      "112°"
    ],
    "answer": 3,
    "explanation": "Adjacent angles in a parallelogram sum to 180° → 112°."
  },
  {
    "id": 273,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "A right-angled triangle has legs 6 cm and 8 cm. Find its hypotenuse.",
    "options": [
      "14 cm",
      "12 cm",
      "9 cm",
      "10 cm"
    ],
    "answer": 3,
    "explanation": "$\\sqrt{6^2 + 8^2}$ = $\\sqrt{100}$ = 10 cm."
  },
  {
    "id": 274,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "medium",
    "question": "What is the measure of each interior angle of a regular pentagon?",
    "options": [
      "120°",
      "72°",
      "90°",
      "108°"
    ],
    "answer": 3,
    "explanation": "540° ÷ 5 = 108°."
  },
  {
    "id": 275,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "An exterior angle of a triangle is 115° and one opposite interior angle is 48°. Find the other opposite interior angle.",
    "options": [
      "65°",
      "77°",
      "57°",
      "67°"
    ],
    "answer": 3,
    "explanation": "Exterior angle = sum of two opposite interior angles → 115° − 48° = 67°."
  },
  {
    "id": 276,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "The angles of a quadrilateral are x, 2x, 3x, and 4x. Find the largest angle.",
    "options": [
      "36°",
      "72°",
      "108°",
      "144°"
    ],
    "answer": 3,
    "explanation": "10x = 360° → x = 36°. Largest = 4 × 36° = 144°."
  },
  {
    "id": 277,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "Each exterior angle of a regular polygon is 40°. How many sides does it have?",
    "options": [
      "8",
      "10",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "n = 360° ÷ 40° = 9 sides."
  },
  {
    "id": 278,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "In a rhombus, the diagonals are 12 cm and 16 cm. Find the length of one side.",
    "options": [
      "14 cm",
      "20 cm",
      "8 cm",
      "10 cm"
    ],
    "answer": 3,
    "explanation": "Diagonals bisect at 90°: half-diagonals are 6 and 8 → side = $\\sqrt{6^2+8^2}$ = 10 cm."
  },
  {
    "id": 279,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "A ladder 13 m long reaches a wall 12 m high. How far is the foot of the ladder from the wall?",
    "options": [
      "1 m",
      "7 m",
      "6 m",
      "5 m"
    ],
    "answer": 3,
    "explanation": "√($13^{2}$ − $12^{2}$) = √(169 − 144) = $\\sqrt{25}$ = 5 m."
  },
  {
    "id": 280,
    "chapter": "7M14",
    "topic": "Plane Figures",
    "difficulty": "hard",
    "question": "Each interior angle of a regular polygon is 150°. How many sides does it have?",
    "options": [
      "10",
      "15",
      "8",
      "12"
    ],
    "answer": 3,
    "explanation": "Exterior = 180° − 150° = 30°. Sides = 360° ÷ 30° = 12."
  },
  {
    "id": 281,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "Two figures are congruent if they have the same:",
    "options": [
      "Color and weight",
      "Perimeter only",
      "Shape only",
      "Shape and size"
    ],
    "answer": 3,
    "explanation": "Congruent figures match identically in both shape and size."
  },
  {
    "id": 282,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "Which symbol denotes congruence?",
    "options": [
      "∼",
      "∥",
      "⊥",
      "≅"
    ],
    "answer": 3,
    "explanation": "≅ stands for 'is congruent to'."
  },
  {
    "id": 283,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "Two circles are congruent if they have the same:",
    "options": [
      "Center",
      "Color",
      "Position",
      "Radius"
    ],
    "answer": 3,
    "explanation": "Equal radii guarantee identical circles."
  },
  {
    "id": 284,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "If △ABC ≅ △PQR, which side corresponds to AB?",
    "options": [
      "QR",
      "PR",
      "BC",
      "PQ"
    ],
    "answer": 3,
    "explanation": "Order of vertices gives AB ↔ PQ."
  },
  {
    "id": 285,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "Two squares are congruent if they have equal:",
    "options": [
      "Angles only",
      "Centers",
      "Orientations",
      "Side lengths"
    ],
    "answer": 3,
    "explanation": "All squares have 90° angles; equal side lengths make them congruent."
  },
  {
    "id": 286,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "If △XYZ ≅ △LMN and ∠Y = 62°, what is ∠M?",
    "options": [
      "28°",
      "118°",
      "90°",
      "62°"
    ],
    "answer": 3,
    "explanation": "Corresponding parts of congruent triangles (CPCTC) are equal."
  },
  {
    "id": 287,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "easy",
    "question": "What does CPCTC stand for?",
    "options": [
      "Common Perimeter Curves...",
      "Central Points...",
      "Congruent Polygons...",
      "Corresponding Parts of Congruent Triangles are Congruent"
    ],
    "answer": 3,
    "explanation": "CPCTC: Corresponding Parts of Congruent Triangles are Congruent."
  },
  {
    "id": 288,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "Which is NOT a valid condition for two triangles to be congruent?",
    "options": [
      "SSS",
      "SAS",
      "ASA",
      "AAA"
    ],
    "answer": 3,
    "explanation": "AAA proves similarity (same shape), not congruence (same size)."
  },
  {
    "id": 289,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "What does the 'S' in RHS congruence stand for?",
    "options": [
      "Square",
      "Slope",
      "Sum",
      "Side"
    ],
    "answer": 3,
    "explanation": "RHS = Right angle, Hypotenuse, Side."
  },
  {
    "id": 290,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "In △ABC and △DEF, AB = DE, BC = EF, and ∠B = ∠E. Which axiom proves congruence?",
    "options": [
      "SSS",
      "ASA",
      "RHS",
      "SAS"
    ],
    "answer": 3,
    "explanation": "Two sides and the included angle between them → SAS."
  },
  {
    "id": 291,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "If △ABC ≅ △DEF, AC = 9 cm, and DE = 5 cm, find DF.",
    "options": [
      "5 cm",
      "14 cm",
      "4 cm",
      "9 cm"
    ],
    "answer": 3,
    "explanation": "AC corresponds to DF, so DF = 9 cm."
  },
  {
    "id": 292,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "In △PQR ≅ △STU, ∠P = 45°, ∠Q = 65°. Find ∠U.",
    "options": [
      "45°",
      "65°",
      "110°",
      "70°"
    ],
    "answer": 3,
    "explanation": "∠R = 180° − (45°+65°) = 70°, and ∠U = ∠R = 70°."
  },
  {
    "id": 293,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "A diagonal of a parallelogram divides it into two:",
    "options": [
      "Equilateral triangles",
      "Right triangles always",
      "Similar unequal triangles",
      "Congruent triangles"
    ],
    "answer": 3,
    "explanation": "Opposite sides & shared diagonal prove SSS congruence."
  },
  {
    "id": 294,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "medium",
    "question": "In SAS congruence, where must the equal angle be located?",
    "options": [
      "Opposite the longest side",
      "Outside the triangle",
      "Any corner",
      "Between the two equal sides"
    ],
    "answer": 3,
    "explanation": "The angle must be the included angle between the two sides."
  },
  {
    "id": 295,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "If △ABC ≅ △BAC, what type of triangle MUST △ABC be?",
    "options": [
      "Scalene",
      "Right-angled",
      "Obtuse",
      "Isosceles (with AC = BC)"
    ],
    "answer": 3,
    "explanation": "△ABC ≅ △BAC implies side AC = BC, so it is isosceles."
  },
  {
    "id": 296,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "In two right triangles, hypotenuse = 10 cm and one leg = 6 cm in both. Which test proves congruence?",
    "options": [
      "AAA",
      "SSA",
      "ASA",
      "RHS"
    ],
    "answer": 3,
    "explanation": "Right angle + Hypotenuse + one Side → RHS."
  },
  {
    "id": 297,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "If △PQR ≅ △XYZ with PQ = 2x + 3 and XY = 11, find x.",
    "options": [
      "7",
      "5",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "2x + 3 = 11 → 2x = 8 → x = 4."
  },
  {
    "id": 298,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "In △ABC ≅ △DEF, ∠A = (3x − 10)° and ∠D = (2x + 20)°. Find ∠A.",
    "options": [
      "30°",
      "70°",
      "90°",
      "80°"
    ],
    "answer": 3,
    "explanation": "3x − 10 = 2x + 20 → x = 30 → ∠A = 3(30) − 10 = 80°."
  },
  {
    "id": 299,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "Why is SSA NOT a general congruence condition?",
    "options": [
      "Sides aren't straight",
      "Angles can't be equal",
      "Triangles need 4 sides",
      "Two different triangles can share SSA (ambiguous case)"
    ],
    "answer": 3,
    "explanation": "SSA can form two non-congruent triangles unless the angle is 90° (RHS)."
  },
  {
    "id": 300,
    "chapter": "7M15",
    "topic": "Congruent Figures",
    "difficulty": "hard",
    "question": "ABCD is a kite with AB = AD and CB = CD. Diagonal AC splits it into △ABC and △ADC by which rule?",
    "options": [
      "RHS",
      "AAA",
      "ASA",
      "SSS"
    ],
    "answer": 3,
    "explanation": "AB=AD, CB=CD, and AC=AC (common) → SSS."
  },
  {
    "id": 301,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "How many faces does a cube have?",
    "options": [
      "4",
      "8",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "A cube has 6 square faces."
  },
  {
    "id": 302,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "How many vertices does a cuboid have?",
    "options": [
      "6",
      "12",
      "10",
      "8"
    ],
    "answer": 3,
    "explanation": "A cuboid has 8 corners (vertices)."
  },
  {
    "id": 303,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "How many edges does a cuboid have?",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 3,
    "explanation": "A cuboid has 12 edges."
  },
  {
    "id": 304,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "Which 3D solid has NO flat faces, NO edges, and NO vertices?",
    "options": [
      "Cylinder",
      "Cone",
      "Prism",
      "Sphere"
    ],
    "answer": 3,
    "explanation": "A sphere is completely curved."
  },
  {
    "id": 305,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "What shape are the bases of a cylinder?",
    "options": [
      "Squares",
      "Triangles",
      "Hexagons",
      "Circles"
    ],
    "answer": 3,
    "explanation": "A cylinder has 2 parallel circular bases."
  },
  {
    "id": 306,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "How many vertices does a cone have?",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "answer": 3,
    "explanation": "A cone comes to 1 apex (vertex)."
  },
  {
    "id": 307,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "easy",
    "question": "A triangular pyramid is also called a:",
    "options": [
      "Octahedron",
      "Prism",
      "Cuboid",
      "Tetrahedron"
    ],
    "answer": 3,
    "explanation": "A pyramid with a triangular base has 4 faces → tetrahedron."
  },
  {
    "id": 308,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "State Euler's formula connecting Faces (F), Vertices (V), and Edges (E).",
    "options": [
      "F + E − V = 2",
      "V + E − F = 2",
      "F + V + E = 2",
      "F + V − E = 2"
    ],
    "answer": 3,
    "explanation": "Euler's formula: F + V − E = 2."
  },
  {
    "id": 309,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "If a polyhedron has 5 faces and 6 vertices, how many edges does it have?",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "answer": 3,
    "explanation": "5 + 6 − E = 2 → E = 9 (triangular prism)."
  },
  {
    "id": 310,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "How many faces does a square-based pyramid have?",
    "options": [
      "4",
      "6",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "1 square base + 4 triangular faces = 5 faces."
  },
  {
    "id": 311,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "How many edges does a triangular prism have?",
    "options": [
      "6",
      "12",
      "8",
      "9"
    ],
    "answer": 3,
    "explanation": "3 top + 3 bottom + 3 vertical = 9 edges."
  },
  {
    "id": 312,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "Which 3D object has 2 triangular faces and 3 rectangular faces?",
    "options": [
      "Triangular pyramid",
      "Square pyramid",
      "Cylinder",
      "Triangular prism"
    ],
    "answer": 3,
    "explanation": "A triangular prism has 2 triangle bases and 3 rectangular sides."
  },
  {
    "id": 313,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "What is the top view of a cylinder standing upright on a table?",
    "options": [
      "Rectangle",
      "Triangle",
      "Square",
      "Circle"
    ],
    "answer": 3,
    "explanation": "Looking straight down at an upright cylinder shows a circle."
  },
  {
    "id": 314,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "medium",
    "question": "What is the front view of an upright cone?",
    "options": [
      "Circle",
      "Square",
      "Oval",
      "Triangle"
    ],
    "answer": 3,
    "explanation": "From the side/front, a cone looks like an isosceles triangle."
  },
  {
    "id": 315,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "How many edges does a pentagonal prism have?",
    "options": [
      "10",
      "12",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "5 + 5 + 5 = 15 edges."
  },
  {
    "id": 316,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "A polyhedron has 12 edges and 6 vertices. How many faces does it have?",
    "options": [
      "6",
      "10",
      "14",
      "8"
    ],
    "answer": 3,
    "explanation": "F + 6 − 12 = 2 → F = 8 (octahedron)."
  },
  {
    "id": 317,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "How many faces, vertices, and edges does a hexagonal pyramid have?",
    "options": [
      "8 F, 12 V, 18 E",
      "6 F, 6 V, 10 E",
      "7 F, 6 V, 12 E",
      "7 F, 7 V, 12 E"
    ],
    "answer": 3,
    "explanation": "Base has 6 sides: F=6+1=7, V=6+1=7, E=6+6=12."
  },
  {
    "id": 318,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "If you slice a cylinder horizontally (parallel to its base), the cross-section is a:",
    "options": [
      "Rectangle",
      "Triangle",
      "Ellipse",
      "Circle"
    ],
    "answer": 3,
    "explanation": "A horizontal cut matches the circular base."
  },
  {
    "id": 319,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "Can a polyhedron have 6 faces, 7 vertices, and 10 edges?",
    "options": [
      "Yes",
      "Only if regular",
      "Only if hollow",
      "No (violates Euler's formula)"
    ],
    "answer": 3,
    "explanation": "F + V − E = 6 + 7 − 10 = 3 ≠ 2."
  },
  {
    "id": 320,
    "chapter": "7M16",
    "topic": "Solid Objects",
    "difficulty": "hard",
    "question": "Which solid's net consists of 1 rectangle and 2 circles?",
    "options": [
      "Cone",
      "Cube",
      "Sphere",
      "Cylinder"
    ],
    "answer": 3,
    "explanation": "Rolling the rectangle forms the curved body between 2 circular ends."
  },
  {
    "id": 321,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "What are the coordinates of the origin?",
    "options": [
      "(1, 1)",
      "(0, 1)",
      "(1, 0)",
      "(0, 0)"
    ],
    "answer": 3,
    "explanation": "The x-axis and y-axis intersect at (0, 0)."
  },
  {
    "id": 322,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "In the point (5, 9), which number is the x-coordinate (abscissa)?",
    "options": [
      "9",
      "14",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "The first number in (x, y) is the x-coordinate."
  },
  {
    "id": 323,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "In which quadrant do BOTH x and y coordinates have positive signs?",
    "options": [
      "Second Quadrant",
      "Third Quadrant",
      "Fourth Quadrant",
      "First Quadrant"
    ],
    "answer": 3,
    "explanation": "(+, +) is Quadrant I."
  },
  {
    "id": 324,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "The horizontal axis on a coordinate plane is called the:",
    "options": [
      "y-axis",
      "origin",
      "quadrant",
      "x-axis"
    ],
    "answer": 3,
    "explanation": "Horizontal = x-axis; vertical = y-axis."
  },
  {
    "id": 325,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "In which quadrant does (−4, 5) lie?",
    "options": [
      "First Quadrant",
      "Third Quadrant",
      "Fourth Quadrant",
      "Second Quadrant"
    ],
    "answer": 3,
    "explanation": "Negative x, positive y (−, +) is Quadrant II."
  },
  {
    "id": 326,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "Where does the point (0, 6) lie?",
    "options": [
      "On the x-axis",
      "In Quadrant I",
      "At the origin",
      "On the y-axis"
    ],
    "answer": 3,
    "explanation": "When x = 0 and y ≠ 0, the point lies on the y-axis."
  },
  {
    "id": 327,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "easy",
    "question": "Where does the point (−7, 0) lie?",
    "options": [
      "On the y-axis",
      "In Quadrant II",
      "In Quadrant III",
      "On the x-axis"
    ],
    "answer": 3,
    "explanation": "When y = 0 and x ≠ 0, the point lies on the x-axis."
  },
  {
    "id": 328,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "In which quadrant does (−3, −8) lie?",
    "options": [
      "First Quadrant",
      "Second Quadrant",
      "Fourth Quadrant",
      "Third Quadrant"
    ],
    "answer": 3,
    "explanation": "(−, −) is Quadrant III."
  },
  {
    "id": 329,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "In which quadrant does (6, −2) lie?",
    "options": [
      "First Quadrant",
      "Second Quadrant",
      "Third Quadrant",
      "Fourth Quadrant"
    ],
    "answer": 3,
    "explanation": "(+, −) is Quadrant IV."
  },
  {
    "id": 330,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "What is the perpendicular distance of point (4, 7) from the x-axis?",
    "options": [
      "4 units",
      "11 units",
      "3 units",
      "7 units"
    ],
    "answer": 3,
    "explanation": "Distance from the x-axis equals |y| = 7."
  },
  {
    "id": 331,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "What is the perpendicular distance of point (−5, 3) from the y-axis?",
    "options": [
      "3 units",
      "−5 units",
      "8 units",
      "5 units"
    ],
    "answer": 3,
    "explanation": "Distance from the y-axis equals |x| = 5."
  },
  {
    "id": 332,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "If three corners of a rectangle are (1, 1), (5, 1), and (5, 4), what is the fourth corner?",
    "options": [
      "(4, 1)",
      "(1, 5)",
      "(5, 5)",
      "(1, 4)"
    ],
    "answer": 3,
    "explanation": "Match x = 1 and y = 4 → (1, 4)."
  },
  {
    "id": 333,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "Find the distance between (2, 3) and (8, 3).",
    "options": [
      "10 units",
      "5 units",
      "11 units",
      "6 units"
    ],
    "answer": 3,
    "explanation": "Same y-coordinate, so distance = |8 − 2| = 6 units."
  },
  {
    "id": 334,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "medium",
    "question": "Find the midpoint of the segment joining (2, 4) and (6, 8).",
    "options": [
      "(8, 12)",
      "(3, 6)",
      "(4, 4)",
      "(4, 6)"
    ],
    "answer": 3,
    "explanation": "((2+6)/2, (4+8)/2) = (4, 6)."
  },
  {
    "id": 335,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "Find the area of the triangle with vertices (0, 0), (6, 0), and (0, 5).",
    "options": [
      "30 sq. units",
      "11 sq. units",
      "25 sq. units",
      "15 sq. units"
    ],
    "answer": 3,
    "explanation": "Right triangle with base 6 and height 5 → ½ × 6 × 5 = 15."
  },
  {
    "id": 336,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "Find the area of the rectangle with vertices (−2, 1), (4, 1), (4, 5), (−2, 5).",
    "options": [
      "20 sq. units",
      "12 sq. units",
      "16 sq. units",
      "24 sq. units"
    ],
    "answer": 3,
    "explanation": "Width = 4 − (−2) = 6; height = 5 − 1 = 4; Area = 24."
  },
  {
    "id": 337,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "Find the distance between (0, 0) and (3, 4).",
    "options": [
      "7 units",
      "12 units",
      "1 unit",
      "5 units"
    ],
    "answer": 3,
    "explanation": "$\\sqrt{3^2 + 4^2}$ = $\\sqrt{25}$ = 5 units."
  },
  {
    "id": 338,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "If point (a − 2, b + 3) is the origin (0, 0), find a + b.",
    "options": [
      "1",
      "5",
      "−5",
      "−1"
    ],
    "answer": 3,
    "explanation": "a − 2 = 0 → a = 2; b + 3 = 0 → b = −3; a + b = −1."
  },
  {
    "id": 339,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "Points A(−3, 2), B(5, 2), C(5, −4) form a right triangle at B. What is the length of AB?",
    "options": [
      "6 units",
      "2 units",
      "10 units",
      "8 units"
    ],
    "answer": 3,
    "explanation": "|5 − (−3)| = 8 units."
  },
  {
    "id": 340,
    "chapter": "7M17",
    "topic": "Coordinates",
    "difficulty": "hard",
    "question": "Which point is equidistant from both axes?",
    "options": [
      "(0, 5)",
      "(3, −4)",
      "(5, 0)",
      "(−5, 5)"
    ],
    "answer": 3,
    "explanation": "Equidistant from both axes means |x| = |y| → |−5| = |5|."
  },
  {
    "id": 341,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "How many lines of symmetry does a square have?",
    "options": [
      "2",
      "1",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "2 diagonals + 2 midlines = 4 lines of symmetry."
  },
  {
    "id": 342,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "How many lines of symmetry does a rectangle (not a square) have?",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Only vertical and horizontal midlines (diagonals are not axes of symmetry)."
  },
  {
    "id": 343,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "How many lines of symmetry does an equilateral triangle have?",
    "options": [
      "1",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "3 lines of symmetry (one from each vertex to the opposite midpoint)."
  },
  {
    "id": 344,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "Which capital letter has BOTH horizontal and vertical lines of symmetry?",
    "options": [
      "A",
      "B",
      "L",
      "H"
    ],
    "answer": 3,
    "explanation": "H is symmetric horizontally and vertically."
  },
  {
    "id": 345,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "A scalene triangle has how many lines of symmetry?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "All sides/angles differ, so 0 lines of symmetry."
  },
  {
    "id": 346,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "Covering a flat surface with repeating shapes without gaps or overlaps is called:",
    "options": [
      "Reflection",
      "Enlargement",
      "Bearing",
      "Tessellation"
    ],
    "answer": 3,
    "explanation": "Tiling without gaps or overlaps is tessellation."
  },
  {
    "id": 347,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "easy",
    "question": "How many lines of symmetry does a circle have?",
    "options": [
      "4",
      "8",
      "1",
      "Infinitely many"
    ],
    "answer": 3,
    "explanation": "Every diameter is a line of symmetry."
  },
  {
    "id": 348,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "How many lines of symmetry does a regular hexagon have?",
    "options": [
      "3",
      "4",
      "8",
      "6"
    ],
    "answer": 3,
    "explanation": "A regular n-gon has n lines of symmetry → 6."
  },
  {
    "id": 349,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "What is the order of rotational symmetry of a square?",
    "options": [
      "2",
      "1",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "A square maps onto itself every 90° → 360°/90° = 4."
  },
  {
    "id": 350,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "Which regular polygons CANNOT tessellate by themselves?",
    "options": [
      "Equilateral triangles",
      "Squares",
      "Regular hexagons",
      "Regular pentagons"
    ],
    "answer": 3,
    "explanation": "108° does not divide 360°, leaving gaps."
  },
  {
    "id": 351,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "How many lines of symmetry does a rhombus (non-square) have?",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Its two diagonals are lines of symmetry."
  },
  {
    "id": 352,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "What is the angle of rotational symmetry of an equilateral triangle?",
    "options": [
      "60°",
      "90°",
      "180°",
      "120°"
    ],
    "answer": 3,
    "explanation": "360° ÷ 3 = 120°."
  },
  {
    "id": 353,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "What is the order of rotational symmetry of the letter Z?",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Rotating Z by 180° looks identical → order 2."
  },
  {
    "id": 354,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "medium",
    "question": "Honeycomb cells form a natural tessellation using:",
    "options": [
      "Regular pentagons",
      "Circles",
      "Regular octagons",
      "Regular hexagons"
    ],
    "answer": 3,
    "explanation": "Honeycombs tile using regular hexagons (120° × 3 = 360°)."
  },
  {
    "id": 355,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "Why can regular hexagons tessellate a plane?",
    "options": [
      "They have 6 sides",
      "Their exterior angle is 90°",
      "They are curved",
      "Their interior angle 120° divides 360° evenly (3 meet at a vertex)"
    ],
    "answer": 3,
    "explanation": "3 × 120° = 360°, leaving no gaps."
  },
  {
    "id": 356,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "Which regular polygon has rotational symmetry of order 8 and angle 45°?",
    "options": [
      "Regular hexagon",
      "Regular decagon",
      "Regular heptagon",
      "Regular octagon"
    ],
    "answer": 3,
    "explanation": "360° ÷ 45° = 8 sides → regular octagon."
  },
  {
    "id": 357,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "A parallelogram (non-rectangle, non-rhombus) has:",
    "options": [
      "2 lines of symmetry and order 2",
      "1 line of symmetry and order 1",
      "4 lines of symmetry",
      "0 lines of symmetry and rotational symmetry of order 2"
    ],
    "answer": 3,
    "explanation": "Folding doesn't match, but a 180° turn maps it onto itself."
  },
  {
    "id": 358,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "In a semi-regular tessellation of squares and regular octagons, how many shapes meet at each vertex?",
    "options": [
      "2 squares + 1 octagon",
      "2 squares + 2 octagons",
      "3 octagons",
      "1 square + 2 octagons"
    ],
    "answer": 3,
    "explanation": "90° + 135° + 135° = 360°."
  },
  {
    "id": 359,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "If a regular polygon has rotational symmetry of order n, what is its smallest angle of rotation?",
    "options": [
      "(180 / n)°",
      "(90 × n)°",
      "(n − 2) × 180°",
      "(360 / n)°"
    ],
    "answer": 3,
    "explanation": "Full turn 360° divided by order n."
  },
  {
    "id": 360,
    "chapter": "7M18",
    "topic": "Symmetry & Tessellation",
    "difficulty": "hard",
    "question": "Which letter has rotational symmetry of order 2 but NO line of symmetry?",
    "options": [
      "H",
      "X",
      "O",
      "S"
    ],
    "answer": 3,
    "explanation": "S has no mirror line, yet a 180° rotation leaves S unchanged."
  },
  {
    "id": 361,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Sliding a shape without turning or flipping it is called:",
    "options": [
      "Reflection",
      "Rotation",
      "Enlargement",
      "Translation"
    ],
    "answer": 3,
    "explanation": "Translation shifts every point by the same distance and direction."
  },
  {
    "id": 362,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Flipping a figure over a mirror line is called:",
    "options": [
      "Translation",
      "Rotation",
      "Dilation",
      "Reflection"
    ],
    "answer": 3,
    "explanation": "Reflection produces a mirror image."
  },
  {
    "id": 363,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Turning a figure around a fixed point is called:",
    "options": [
      "Translation",
      "Reflection",
      "Tessellation",
      "Rotation"
    ],
    "answer": 3,
    "explanation": "Rotation turns a shape around a center of rotation."
  },
  {
    "id": 364,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Which transformation changes the SIZE of a figure?",
    "options": [
      "Translation",
      "Reflection",
      "Rotation",
      "Enlargement"
    ],
    "answer": 3,
    "explanation": "Enlargement scales size; the other three are isometric (keep size)."
  },
  {
    "id": 365,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Translate (2, 3) by 4 units right. What is the new point?",
    "options": [
      "(2, 7)",
      "(−2, 3)",
      "(6, 7)",
      "(6, 3)"
    ],
    "answer": 3,
    "explanation": "Moving right adds to x: (2 + 4, 3) = (6, 3)."
  },
  {
    "id": 366,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "Translate (5, 7) by 2 units down. What is the new point?",
    "options": [
      "(3, 7)",
      "(5, 9)",
      "(7, 7)",
      "(5, 5)"
    ],
    "answer": 3,
    "explanation": "Moving down subtracts from y: (5, 7 − 2) = (5, 5)."
  },
  {
    "id": 367,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "easy",
    "question": "A shape and its mirror reflection are always:",
    "options": [
      "Different sizes",
      "Rotated 90°",
      "Disjoint",
      "Congruent"
    ],
    "answer": 3,
    "explanation": "Reflection preserves lengths and angles, so images are congruent."
  },
  {
    "id": 368,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "What is the image of (3, −2) when reflected across the x-axis?",
    "options": [
      "(−3, −2)",
      "(−3, 2)",
      "(−2, 3)",
      "(3, 2)"
    ],
    "answer": 3,
    "explanation": "Reflect across x-axis: (x, y) → (x, −y) → (3, 2)."
  },
  {
    "id": 369,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "What is the image of (4, 7) when reflected across the y-axis?",
    "options": [
      "(4, −7)",
      "(−4, −7)",
      "(7, 4)",
      "(−4, 7)"
    ],
    "answer": 3,
    "explanation": "Reflect across y-axis: (x, y) → (−x, y) → (−4, 7)."
  },
  {
    "id": 370,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "Translate (−2, 5) by vector (3, −4).",
    "options": [
      "(−5, 9)",
      "(1, 9)",
      "(−1, 1)",
      "(1, 1)"
    ],
    "answer": 3,
    "explanation": "(−2 + 3, 5 − 4) = (1, 1)."
  },
  {
    "id": 371,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "Rotate (2, 5) by 180° around the origin (0, 0).",
    "options": [
      "(−5, 2)",
      "(5, −2)",
      "(2, −5)",
      "(−2, −5)"
    ],
    "answer": 3,
    "explanation": "180° rotation maps (x, y) → (−x, −y)."
  },
  {
    "id": 372,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "Enlarge point (3, 2) from the origin with scale factor 3.",
    "options": [
      "(6, 5)",
      "(1, $\\frac{2}{3}$)",
      "(9, 2)",
      "(9, 6)"
    ],
    "answer": 3,
    "explanation": "Multiply both coordinates by k = 3 → (9, 6)."
  },
  {
    "id": 373,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "If (4, 1) translates to (1, 6), what is the translation vector?",
    "options": [
      "(3, −5)",
      "(5, 7)",
      "(−3, −5)",
      "(−3, 5)"
    ],
    "answer": 3,
    "explanation": "(1 − 4, 6 − 1) = (−3, 5)."
  },
  {
    "id": 374,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "medium",
    "question": "Reflect (−6, −1) across the line y = x.",
    "options": [
      "(6, 1)",
      "(1, 6)",
      "(−6, 1)",
      "(−1, −6)"
    ],
    "answer": 3,
    "explanation": "Reflect across y = x swaps coordinates: (x, y) → (y, x)."
  },
  {
    "id": 375,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "Rotate (4, 1) by 90° counter-clockwise (anticlockwise) about the origin.",
    "options": [
      "(1, −4)",
      "(−4, −1)",
      "(1, 4)",
      "(−1, 4)"
    ],
    "answer": 3,
    "explanation": "90° CCW maps (x, y) → (−y, x) → (−1, 4)."
  },
  {
    "id": 376,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "Rotate (3, 5) by 90° clockwise about the origin.",
    "options": [
      "(−5, 3)",
      "(−3, −5)",
      "(5, 3)",
      "(5, −3)"
    ],
    "answer": 3,
    "explanation": "90° CW maps (x, y) → (y, −x) → (5, −3)."
  },
  {
    "id": 377,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "Point (2, 3) is reflected across the x-axis, then translated by (4, 1). Find the final image.",
    "options": [
      "(6, 4)",
      "(−6, 4)",
      "(2, −2)",
      "(6, −2)"
    ],
    "answer": 3,
    "explanation": "Reflect x-axis: (2, −3). Translate (4, 1): (6, −2)."
  },
  {
    "id": 378,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "A triangle of area 12 cm² is enlarged with scale factor 2. What is the new area?",
    "options": [
      "24 cm²",
      "36 cm²",
      "14 cm²",
      "48 cm²"
    ],
    "answer": 3,
    "explanation": "Area scales by $k^{2}$ = $2^{2}$ = 4 → 12 × 4 = 48 cm²."
  },
  {
    "id": 379,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "What single rotation is equivalent to 90° CW followed by 180°?",
    "options": [
      "270° counter-clockwise",
      "180°",
      "No turn",
      "90° counter-clockwise"
    ],
    "answer": 3,
    "explanation": "−90° + 180° = +90° (90° counter-clockwise)."
  },
  {
    "id": 380,
    "chapter": "7M19",
    "topic": "Transformation",
    "difficulty": "hard",
    "question": "If point P'(−5, 2) is the image of P after reflection across the y-axis, what was P?",
    "options": [
      "(−5, −2)",
      "(5, −2)",
      "(2, −5)",
      "(5, 2)"
    ],
    "answer": 3,
    "explanation": "Reflecting across y-axis negates x, so reversing gives (5, 2)."
  },
  {
    "id": 381,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "Bearings are always measured starting from which direction?",
    "options": [
      "East",
      "South",
      "West",
      "North"
    ],
    "answer": 3,
    "explanation": "Bearings start at North (000°) and turn clockwise."
  },
  {
    "id": 382,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "In which direction are bearings measured?",
    "options": [
      "Counter-clockwise",
      "Upward",
      "Leftward",
      "Clockwise"
    ],
    "answer": 3,
    "explanation": "Always clockwise from North."
  },
  {
    "id": 383,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "What is the three-figure bearing of East?",
    "options": [
      "000°",
      "180°",
      "270°",
      "090°"
    ],
    "answer": 3,
    "explanation": "East is 90° clockwise from North → 090°."
  },
  {
    "id": 384,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "What is the three-figure bearing of South?",
    "options": [
      "090°",
      "270°",
      "000°",
      "180°"
    ],
    "answer": 3,
    "explanation": "South is 180° clockwise from North."
  },
  {
    "id": 385,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "What is the three-figure bearing of West?",
    "options": [
      "090°",
      "180°",
      "360°",
      "270°"
    ],
    "answer": 3,
    "explanation": "West is 270° clockwise from North."
  },
  {
    "id": 386,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "On a map with scale 1 cm = 10 km, what does 3 cm represent?",
    "options": [
      "3 km",
      "13 km",
      "300 km",
      "30 km"
    ],
    "answer": 3,
    "explanation": "3 × 10 = 30 km."
  },
  {
    "id": 387,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "easy",
    "question": "What is the bearing of North-East (NE)?",
    "options": [
      "090°",
      "135°",
      "315°",
      "045°"
    ],
    "answer": 3,
    "explanation": "Halfway between North (000°) and East (090°) is 045°."
  },
  {
    "id": 388,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "On a map with scale 1 cm = 5 km, two towns are 4.5 cm apart. Find the actual distance.",
    "options": [
      "20 km",
      "25 km",
      "9.5 km",
      "22.5 km"
    ],
    "answer": 3,
    "explanation": "4.5 × 5 = 22.5 km."
  },
  {
    "id": 389,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "What is the three-figure bearing of South-West (SW)?",
    "options": [
      "135°",
      "315°",
      "045°",
      "225°"
    ],
    "answer": 3,
    "explanation": "South (180°) + 45° = 225°."
  },
  {
    "id": 390,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "What is the three-figure bearing of North-West (NW)?",
    "options": [
      "045°",
      "225°",
      "270°",
      "315°"
    ],
    "answer": 3,
    "explanation": "360° − 45° = 315°."
  },
  {
    "id": 391,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "Using scale 1 : 50,000, what actual distance (in km) does 4 cm represent?",
    "options": [
      "20 km",
      "0.2 km",
      "200 km",
      "2 km"
    ],
    "answer": 3,
    "explanation": "4 × 50,000 cm = 200,000 cm = 2,000 m = 2 km."
  },
  {
    "id": 392,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "An actual room is 12 m long. Drawn at scale 1 cm = 2 m, what is its length on paper?",
    "options": [
      "24 cm",
      "10 cm",
      "4 cm",
      "6 cm"
    ],
    "answer": 3,
    "explanation": "12 ÷ 2 = 6 cm."
  },
  {
    "id": 393,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "A plane flies on a bearing of 135°. Which compass direction is this?",
    "options": [
      "North-East (NE)",
      "South-West (SW)",
      "North-West (NW)",
      "South-East (SE)"
    ],
    "answer": 3,
    "explanation": "Halfway between East (090°) and South (180°) is SE."
  },
  {
    "id": 394,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "medium",
    "question": "Express the scale 1 cm : 2 km in ratio form (1 : n).",
    "options": [
      "1 : 2,000",
      "1 : 20,000",
      "1 : 200",
      "1 : 200,000"
    ],
    "answer": 3,
    "explanation": "2 km = 2,000 m = 200,000 cm → 1 : 200,000."
  },
  {
    "id": 395,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "If the bearing of B from A is 070°, what is the back-bearing of A from B?",
    "options": [
      "110°",
      "290°",
      "070°",
      "250°"
    ],
    "answer": 3,
    "explanation": "Since 070° < 180°, add 180°: 070° + 180° = 250°."
  },
  {
    "id": 396,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "If the bearing of Q from P is 305°, find the bearing of P from Q.",
    "options": [
      "055°",
      "235°",
      "145°",
      "125°"
    ],
    "answer": 3,
    "explanation": "Since 305° > 180°, subtract 180°: 305° − 180° = 125°."
  },
  {
    "id": 397,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "On a map of scale 1 : 25,000, a road is 10 cm long. How long is it in km?",
    "options": [
      "25 km",
      "0.25 km",
      "250 km",
      "2.5 km"
    ],
    "answer": 3,
    "explanation": "10 × 25,000 = 250,000 cm = 2,500 m = 2.5 km."
  },
  {
    "id": 398,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "A ship sails 6 km East then 8 km North. How far is it from the start?",
    "options": [
      "14 km",
      "2 km",
      "12 km",
      "10 km"
    ],
    "answer": 3,
    "explanation": "Right triangle: $\\sqrt{6^2 + 8^2}$ = 10 km."
  },
  {
    "id": 399,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "Two cities are 36 km apart. On a map of scale 1 : 300,000, how far apart are they on the map?",
    "options": [
      "1.2 cm",
      "120 cm",
      "9 cm",
      "12 cm"
    ],
    "answer": 3,
    "explanation": "1 cm = 3 km. 36 ÷ 3 = 12 cm."
  },
  {
    "id": 400,
    "chapter": "7M20",
    "topic": "Bearing & Scale Drawing",
    "difficulty": "hard",
    "question": "A hiker faces bearing 040° and turns 150° clockwise. What is the new bearing?",
    "options": [
      "110°",
      "250°",
      "170°",
      "190°"
    ],
    "answer": 3,
    "explanation": "040° + 150° = 190°."
  },
  {
    "id": 401,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "What does a tally mark group of four vertical lines crossed by one diagonal line represent?",
    "options": [
      "4",
      "6",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "A bundle of 4 + 1 diagonal tally represents 5."
  },
  {
    "id": 402,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "The value that appears MOST frequently in a data set is the:",
    "options": [
      "Mean",
      "Median",
      "Range",
      "Mode"
    ],
    "answer": 3,
    "explanation": "Mode = most frequent value."
  },
  {
    "id": 403,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "Find the mode of: 4, 7, 4, 9, 2, 4, 8.",
    "options": [
      "7",
      "6",
      "9",
      "4"
    ],
    "answer": 3,
    "explanation": "4 appears 3 times, more than any other number."
  },
  {
    "id": 404,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "Find the range of: 12, 5, 19, 8, 25.",
    "options": [
      "13",
      "25",
      "5",
      "20"
    ],
    "answer": 3,
    "explanation": "Range = Max − Min = 25 − 5 = 20."
  },
  {
    "id": 405,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "A circular chart divided into slices (sectors) to show data is a:",
    "options": [
      "Bar graph",
      "Line graph",
      "Histogram",
      "Pie chart"
    ],
    "answer": 3,
    "explanation": "A pie chart represents proportions as sectors of a 360° circle."
  },
  {
    "id": 406,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "Find the mean of: 10, 20, 30.",
    "options": [
      "15",
      "30",
      "60",
      "20"
    ],
    "answer": 3,
    "explanation": "(10 + 20 + 30) ÷ 3 = 20."
  },
  {
    "id": 407,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "easy",
    "question": "What is the total angle at the center of a pie chart?",
    "options": [
      "180°",
      "100°",
      "90°",
      "360°"
    ],
    "answer": 3,
    "explanation": "A complete circle is 360°."
  },
  {
    "id": 408,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "Find the mean of: 12, 18, 15, 21, 9.",
    "options": [
      "14",
      "16",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Sum = 75; 75 ÷ 5 = 15."
  },
  {
    "id": 409,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "Find the median of: 7, 3, 9, 1, 5.",
    "options": [
      "3",
      "7",
      "9",
      "5"
    ],
    "answer": 3,
    "explanation": "Sorted: 1, 3, 5, 7, 9 → middle value is 5."
  },
  {
    "id": 410,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "Find the median of the even-count data: 4, 8, 12, 16, 20, 24.",
    "options": [
      "12",
      "16",
      "15",
      "14"
    ],
    "answer": 3,
    "explanation": "Average of the two middle terms (12 and 16) = 14."
  },
  {
    "id": 411,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "In a pie chart, a category is 25% of the total. What is its central angle?",
    "options": [
      "25°",
      "45°",
      "180°",
      "90°"
    ],
    "answer": 3,
    "explanation": "25% of 360° = 90°."
  },
  {
    "id": 412,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "In a survey of 60 students, 15 chose cricket. Find the pie chart angle for cricket.",
    "options": [
      "60°",
      "120°",
      "45°",
      "90°"
    ],
    "answer": 3,
    "explanation": "($\\frac{15}{60}$) × 360° = 90°."
  },
  {
    "id": 413,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "The mean of 4 numbers is 11. What is their total sum?",
    "options": [
      "15",
      "22",
      "40",
      "44"
    ],
    "answer": 3,
    "explanation": "Sum = Mean × Count = 11 × 4 = 44."
  },
  {
    "id": 414,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "medium",
    "question": "In a pictograph, 1 icon = 5 trees. How many icons represent 35 trees?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "answer": 3,
    "explanation": "35 ÷ 5 = 7 icons."
  },
  {
    "id": 415,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "The mean of 5 numbers is 14. If one number is removed, the mean of the remaining 4 becomes 12. Find the removed number.",
    "options": [
      "18",
      "20",
      "16",
      "22"
    ],
    "answer": 3,
    "explanation": "Sum of 5 = 70; Sum of 4 = 48; Removed = 70 − 48 = 22."
  },
  {
    "id": 416,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "Find x if the mean of 8, 12, x, 16, and 14 is 13.",
    "options": [
      "13",
      "14",
      "17",
      "15"
    ],
    "answer": 3,
    "explanation": "Sum must be 13 × 5 = 65. 8+12+16+14 = 50 → x = 15."
  },
  {
    "id": 417,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "A pie chart sector has angle 108°. What percentage of the total does it represent?",
    "options": [
      "25%",
      "36%",
      "20%",
      "30%"
    ],
    "answer": 3,
    "explanation": "(108 / 360) × 100% = 30%."
  },
  {
    "id": 418,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "The median of sorted data 5, 8, x, x+2, 16, 20 is 12. Find x.",
    "options": [
      "10",
      "12",
      "13",
      "11"
    ],
    "answer": 3,
    "explanation": "(x + x + 2) / 2 = 12 → x + 1 = 12 → x = 11."
  },
  {
    "id": 419,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "If the mean of 6 observations is 20 and each observation is increased by 4, what is the new mean?",
    "options": [
      "20",
      "26",
      "44",
      "24"
    ],
    "answer": 3,
    "explanation": "Adding a constant c to every value increases the mean by c → 24."
  },
  {
    "id": 420,
    "chapter": "7M21",
    "topic": "Presentation of Data",
    "difficulty": "hard",
    "question": "Class A (20 kids) has mean score 70. Class B (30 kids) has mean score 80. Find the combined mean.",
    "options": [
      "75",
      "74",
      "78",
      "76"
    ],
    "answer": 3,
    "explanation": "(20×70 + 30×80) / 50 = (1400 + 2400) / 50 = 3800 / 50 = 76."
  },
  {
    "id": 421,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "In a right-angled triangle, $\\sin\\theta = $",
    "options": [
      "$\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$",
      "$\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$",
      "$\\frac{\\text{Opposite}}{\\text{Adjacent}}$",
      "$\\frac{\\text{Hypotenuse}}{\\text{Opposite}}$"
    ],
    "answer": 0,
    "explanation": "SOH-CAH-TOA: $\\sin\\theta = \\frac{P}{H}$."
  },
  {
    "id": 422,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "What is the exact value of $\\sin 30^\\circ$?",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$",
      "$\\frac{1}{\\sqrt{2}}$"
    ],
    "answer": 0,
    "explanation": "$\\sin 30^\\circ = \\frac{1}{2}$."
  },
  {
    "id": 423,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "What is the exact value of $\\tan 45^\\circ$?",
    "options": [
      "$1$",
      "$0$",
      "$\\sqrt{3}$",
      "$\\frac{1}{\\sqrt{3}}$"
    ],
    "answer": 0,
    "explanation": "$\\tan 45^\\circ = \\frac{\\sin 45^\\circ}{\\cos 45^\\circ} = 1$."
  },
  {
    "id": 424,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If $\\sin\\theta = \\frac{3}{5}$, find $\\cos\\theta$ (for acute $\\theta$).",
    "options": [
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{5}{4}$",
      "$\\frac{2}{5}$"
    ],
    "answer": 0,
    "explanation": "$B = \\sqrt{5^2 - 3^2} = 4$, so $\\cos\\theta = \\frac{4}{5}$."
  },
  {
    "id": 425,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Simplify: $\\sin^2\\theta + \\cos^2\\theta$",
    "options": [
      "$1$",
      "$0$",
      "$2$",
      "$\\tan^2\\theta$"
    ],
    "answer": 0,
    "explanation": "Fundamental identity: $\\sin^2\\theta + \\cos^2\\theta = 1$."
  },
  {
    "id": 426,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If $\\tan A = \\sqrt{3}$, what is angle $A$?",
    "options": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "explanation": "$\\tan 60^\\circ = \\sqrt{3}$."
  },
  {
    "id": 427,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "A ladder leans at $60^\\circ$ to the ground with base $4\\text{ m}$ from the wall. Find the ladder length.",
    "options": [
      "$8\\text{ m}$",
      "$4\\sqrt{3}\\text{ m}$",
      "$2\\text{ m}$",
      "$4\\sqrt{2}\\text{ m}$"
    ],
    "answer": 0,
    "explanation": "$\\cos 60^\\circ = \\frac{4}{H} \\Rightarrow \\frac{1}{2} = \\frac{4}{H} \\Rightarrow H = 8\\text{ m}$."
  },
  {
    "id": 428,
    "chapter": "9M20",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "Evaluate: $\\sec^2 45^\\circ - \\tan^2 45^\\circ$",
    "options": [
      "$1$",
      "$0$",
      "$2$",
      "$3$"
    ],
    "answer": 0,
    "explanation": "$\\sec^2\\theta - \\tan^2\\theta = 1$ for all $\\theta$."
  },
  {
    "id": 429,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "easy",
    "question": "Find the roots of $(x - 3)(x + 5) = 0$.",
    "options": [
      "$3, -5$",
      "$-3, 5$",
      "$3, 5$",
      "$-3, -5$"
    ],
    "answer": 0,
    "explanation": "Set each factor to zero: $x = 3$ or $x = -5$."
  },
  {
    "id": 430,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "easy",
    "question": "Factorize: $x^2 - 16$",
    "options": [
      "$(x + 4)(x - 4)$",
      "$(x - 4)^2$",
      "$(x + 8)(x - 2)$",
      "$(x + 4)^2$"
    ],
    "answer": 0,
    "explanation": "Difference of squares: $a^2 - b^2 = (a+b)(a-b)$."
  },
  {
    "id": 431,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "medium",
    "question": "Solve: $x^2 - 7x + 12 = 0$",
    "options": [
      "$3, 4$",
      "$-3, -4$",
      "$2, 6$",
      "$1, 12$"
    ],
    "answer": 0,
    "explanation": "$(x - 3)(x - 4) = 0 \\Rightarrow x = 3, 4$."
  },
  {
    "id": 432,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "medium",
    "question": "What is the discriminant of $ax^2 + bx + c = 0$?",
    "options": [
      "$b^2 - 4ac$",
      "$b^2 + 4ac$",
      "$\\sqrt{b^2 - 4ac}$",
      "$-b \\pm 2a$"
    ],
    "answer": 0,
    "explanation": "Discriminant $D = b^2 - 4ac$."
  },
  {
    "id": 433,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "hard",
    "question": "For what value of $k$ does $x^2 + kx + 9 = 0$ have equal roots?",
    "options": [
      "$\\pm 6$",
      "$\\pm 3$",
      "$9$",
      "$\\pm 18$"
    ],
    "answer": 0,
    "explanation": "Equal roots when $b^2 - 4ac = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$."
  },
  {
    "id": 434,
    "chapter": "10M07",
    "topic": "Quadratics",
    "difficulty": "hard",
    "question": "Find the sum of roots of $2x^2 - 10x + 7 = 0$.",
    "options": [
      "$5$",
      "$-5$",
      "$\\frac{7}{2}$",
      "$10$"
    ],
    "answer": 0,
    "explanation": "Sum of roots $= -\\frac{b}{a} = -\\frac{-10}{2} = 5$."
  },
  {
    "id": 435,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "easy",
    "question": "What is the standard equation of an ellipse centered at $(0, 0)$?",
    "options": [
      "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$",
      "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$",
      "$x^2 + y^2 = a^2$",
      "$y^2 = 4ax$"
    ],
    "answer": 0,
    "explanation": "An ellipse has $+$, whereas a hyperbola has $-$."
  },
  {
    "id": 436,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "easy",
    "question": "For ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, find semi-major axis $a$.",
    "options": [
      "$5$",
      "$3$",
      "$25$",
      "$9$"
    ],
    "answer": 0,
    "explanation": "$a^2 = 25 \\Rightarrow a = 5$."
  },
  {
    "id": 437,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "medium",
    "question": "For ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, find the length of the major axis.",
    "options": [
      "$8$",
      "$4$",
      "$6$",
      "$16$"
    ],
    "answer": 0,
    "explanation": "Major axis length $= 2a = 2(4) = 8$."
  },
  {
    "id": 438,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "medium",
    "question": "What is the eccentricity $e$ of ANY ellipse?",
    "options": [
      "$0 < e < 1$",
      "$e = 1$",
      "$e > 1$",
      "$e = 0$"
    ],
    "answer": 0,
    "explanation": "Circle has $e=0$, ellipse $0 < e < 1$, parabola $e=1$, hyperbola $e>1$."
  },
  {
    "id": 439,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "hard",
    "question": "Find the foci of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.",
    "options": [
      "$(\\pm 3, 0)$",
      "$(0, \\pm 3)$",
      "$(\\pm 4, 0)$",
      "$(\\pm 5, 0)$"
    ],
    "answer": 0,
    "explanation": "$c^2 = a^2 - b^2 = 25 - 16 = 9 \\Rightarrow c = 3$, so foci are $(\\pm 3, 0)$."
  },
  {
    "id": 440,
    "chapter": "10M16",
    "topic": "Ellipses",
    "difficulty": "hard",
    "question": "Find the eccentricity of $\\frac{x^2}{100} + \\frac{y^2}{64} = 1$.",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{6}{5}$",
      "$\\frac{8}{10}$"
    ],
    "answer": 0,
    "explanation": "$c = \\sqrt{100 - 64} = 6$, $a = 10$, so $e = \\frac{6}{10} = \\frac{3}{5}$."
  },
  {
    "id": 441,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "easy",
    "question": "Volume of a cylinder with radius $r$ and height $h$ is:",
    "options": [
      "$\\pi r^2 h$",
      "$\\frac{1}{3}\\pi r^2 h$",
      "$2\\pi r h$",
      "$\\frac{4}{3}\\pi r^3$"
    ],
    "answer": 0,
    "explanation": "Cylinder volume = base area $\\pi r^2 \\times h$."
  },
  {
    "id": 442,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "easy",
    "question": "Volume of a cone compared to a cylinder of the same $r$ and $h$ is:",
    "options": [
      "$\\frac{1}{3}$ of the cylinder",
      "$\\frac{1}{2}$ of the cylinder",
      "$2\\times$ the cylinder",
      "Equal"
    ],
    "answer": 0,
    "explanation": "$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$."
  },
  {
    "id": 443,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "medium",
    "question": "Find the volume of a cylinder with $r = 7\\text{ cm}$ and $h = 10\\text{ cm}$ ($\\pi = \\frac{22}{7}$).",
    "options": [
      "$1540\\text{ cm}^3$",
      "$440\\text{ cm}^3$",
      "$770\\text{ cm}^3$",
      "$220\\text{ cm}^3$"
    ],
    "answer": 0,
    "explanation": "$\\frac{22}{7} \\times 49 \\times 10 = 1540\\text{ cm}^3$."
  },
  {
    "id": 444,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "medium",
    "question": "Find the surface area of a sphere of radius $7\\text{ cm}$ ($\\pi = \\frac{22}{7}$).",
    "options": [
      "$616\\text{ cm}^2$",
      "$154\\text{ cm}^2$",
      "$308\\text{ cm}^2$",
      "$1232\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "$SA = 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49 = 616\\text{ cm}^2$."
  },
  {
    "id": 445,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "hard",
    "question": "A cone has radius $3\\text{ cm}$ and height $4\\text{ cm}$. Find its slant height $l$.",
    "options": [
      "$5\\text{ cm}$",
      "$7\\text{ cm}$",
      "$12\\text{ cm}$",
      "$6\\text{ cm}$"
    ],
    "answer": 0,
    "explanation": "$l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$."
  },
  {
    "id": 446,
    "chapter": "9M07",
    "topic": "Mensuration 3D",
    "difficulty": "hard",
    "question": "If a sphere radius doubles ($2r$), its volume becomes how many times larger?",
    "options": [
      "$8\\times$",
      "$4\\times$",
      "$2\\times$",
      "$6\\times$"
    ],
    "answer": 0,
    "explanation": "Volume scales as $r^3$: $2^3 = 8\\times$."
  }
];
