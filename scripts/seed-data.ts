// ============================================================
// FULL A2Z DATASET
// Generated from the user's supplied current TakeUForward export
// (current 442-entry sheet) and older Codolio export.
//
// IMPORTANT: archiveQuestions intentionally distinguishes:
//   removed = genuinely absent as a standalone entry
//   merged  = old item folded into a current broader/equivalent item
//   renamed = same problem under a new title
// ============================================================

export interface SeedQuestion {
  title: string;
  difficulty: "Basic" | "Easy" | "Medium" | "Hard";
  leetcode_url?: string;
  gfg_url?: string;
  tuf_url?: string;
  yt_url?: string;
  tags?: string[];
}

export interface SeedLecture {
  title: string;
  questions: SeedQuestion[];
}

export interface SeedStep {
  title: string;
  lectures: SeedLecture[];
}

export const steps: SeedStep[] = [
  {
    "title": "Beginner Problems",
    "lectures": [
      {
        "title": "Fundamentals of Programming",
        "questions": [
          {
            "title": "Breaking The Myth",
            "difficulty": "Basic"
          },
          {
            "title": "Programming and What Are Computers?",
            "difficulty": "Basic"
          },
          {
            "title": "How to Think Like a Programmer",
            "difficulty": "Basic"
          },
          {
            "title": "Flowcharts and Pseudocode",
            "difficulty": "Basic"
          },
          {
            "title": "Flowchart Problem-Solving",
            "difficulty": "Basic"
          },
          {
            "title": "Dry Runs, Edge Cases and Debugging",
            "difficulty": "Basic"
          },
          {
            "title": "Programming Languages and Choosing a Path",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Language Basics",
        "questions": [
          {
            "title": "Learn C++",
            "difficulty": "Basic"
          },
          {
            "title": "Learn Java",
            "difficulty": "Basic"
          },
          {
            "title": "Learn Python",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Logic Building (Patterns)",
        "questions": [
          {
            "title": "Easy and Medium",
            "difficulty": "Medium"
          },
          {
            "title": "Hard",
            "difficulty": "Hard"
          }
        ]
      },
      {
        "title": "Patterns",
        "questions": [
          {
            "title": "Pattern 1",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 2",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 3",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 4",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 5",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 6",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 7",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 8",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 9",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 10",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 11",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 12",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 13",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 14",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 15",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 16",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 17",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 18",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 19",
            "difficulty": "Basic"
          },
          {
            "title": "Pattern 20",
            "difficulty": "Medium"
          },
          {
            "title": "Pattern 21",
            "difficulty": "Medium"
          },
          {
            "title": "Pattern 22",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Time Complexity",
        "questions": [
          {
            "title": "Theory with examples",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Standard Libraries & Collections",
        "questions": [
          {
            "title": "STL",
            "difficulty": "Medium"
          },
          {
            "title": "Java Collections",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://codolio.com/question-tracker/sheet/strivers-a2z-dsa-sheet?category=popular#"
          },
          {
            "title": "Python Libraries Part 1",
            "difficulty": "Basic"
          },
          {
            "title": "Python Libraries Part 2",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Concept Basics",
        "questions": [
          {
            "title": "Basic Maths",
            "difficulty": "Basic"
          },
          {
            "title": "Basic Arrays",
            "difficulty": "Basic"
          },
          {
            "title": "Basic Hashing",
            "difficulty": "Basic"
          },
          {
            "title": "Basic String",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Basic Maths",
        "questions": [
          {
            "title": "Count all Digits of a Number",
            "difficulty": "Basic"
          },
          {
            "title": "Count number of odd digits in a number",
            "difficulty": "Basic"
          },
          {
            "title": "Reverse a number",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/reverse-integer?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Palindrome Number",
            "difficulty": "Basic"
          },
          {
            "title": "Return the Largest Digit in a Number",
            "difficulty": "Basic"
          },
          {
            "title": "Factorial of a given number",
            "difficulty": "Basic"
          },
          {
            "title": "Check if the Number is Armstrong",
            "difficulty": "Basic"
          },
          {
            "title": "Check for Perfect Number",
            "difficulty": "Basic"
          },
          {
            "title": "Check for Prime Number",
            "difficulty": "Basic"
          },
          {
            "title": "Count of Prime Numbers till N",
            "difficulty": "Basic"
          },
          {
            "title": "GCD of Two Numbers",
            "difficulty": "Basic"
          },
          {
            "title": "LCM of two numbers",
            "difficulty": "Basic"
          },
          {
            "title": "Divisors of a Number",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Basic Arrays",
        "questions": [
          {
            "title": "Sum of Array Elements",
            "difficulty": "Basic"
          },
          {
            "title": "Count of odd numbers in Array",
            "difficulty": "Basic"
          },
          {
            "title": "Check if the Array is Sorted I",
            "difficulty": "Basic"
          },
          {
            "title": "Reverse an array",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/reverse-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Basic Hashing",
        "questions": [
          {
            "title": "Highest Occurring Element in an Array",
            "difficulty": "Medium"
          },
          {
            "title": "Second Highest Occurring Element",
            "difficulty": "Basic"
          },
          {
            "title": "Sum of Highest and Lowest Frequency",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Basic Strings",
        "questions": [
          {
            "title": "Reverse a String II",
            "difficulty": "Basic"
          },
          {
            "title": "Palindrome Check",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/palindrome-number?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Largest Odd Number in a String",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/largest-odd-number-in-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest Common Prefix",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-common-prefix?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Isomorphic Strings",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/isomorphic-strings?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Rotate String",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/rotate-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Valid Anagram",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/valid-anagram?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Sort Characters by Frequency",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/sort-characters-by-frequency?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Basic Recursion",
        "questions": [
          {
            "title": "Recursion Theory",
            "difficulty": "Medium"
          },
          {
            "title": "Recursion Concepts with Parameters",
            "difficulty": "Medium"
          },
          {
            "title": "Sum of First N Numbers",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/sum-of-first-n-numbers?utm=codolio"
          },
          {
            "title": "Factorial of a Given Number",
            "difficulty": "Basic"
          },
          {
            "title": "Sum of Array Elements II",
            "difficulty": "Basic"
          },
          {
            "title": "Reverse a String I",
            "difficulty": "Basic"
          },
          {
            "title": "Check if String is Palindrome or Not",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/valid-palindrome?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Check if a Number is Prime or Not",
            "difficulty": "Basic"
          },
          {
            "title": "Reverse an array 2",
            "difficulty": "Medium"
          },
          {
            "title": "Check if the Array is Sorted II",
            "difficulty": "Basic"
          },
          {
            "title": "Sum of Digits in a Given Number",
            "difficulty": "Basic"
          },
          {
            "title": "Fibonacci Number",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/fibonacci-number?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Algorithms",
        "questions": [
          {
            "title": "Selection Sort",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/selection-sort?utm=codolio"
          },
          {
            "title": "Bubble Sort",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/bubble-sort?utm=codolio"
          },
          {
            "title": "Insertion Sorting",
            "difficulty": "Basic"
          },
          {
            "title": "Merge Sorting",
            "difficulty": "Medium"
          },
          {
            "title": "Quick Sorting",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Arrays",
    "lectures": [
      {
        "title": "Fundamentals",
        "questions": [
          {
            "title": "Linear Search",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/linear-search?utm=codolio"
          },
          {
            "title": "Largest Element",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/largest-element?utm=codolio"
          },
          {
            "title": "Second Largest Element",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/second-largest-element?utm=codolio"
          },
          {
            "title": "Maximum Consecutive Ones",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/max-consecutive-ones?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Left Rotate Array by One",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/rotate-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Left Rotate Array by K Places",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/rotate-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Logic Building",
        "questions": [
          {
            "title": "Move Zeros to End",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/move-zeroes?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Remove duplicates from sorted array",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Find missing number",
            "difficulty": "Basic"
          },
          {
            "title": "Union of two sorted arrays",
            "difficulty": "Medium"
          },
          {
            "title": "Intersection of two sorted arrays",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQs(Medium)",
        "questions": [
          {
            "title": "Majority Element-I",
            "difficulty": "Medium"
          },
          {
            "title": "Leaders in an Array",
            "difficulty": "Basic",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/leaders-in-an-array?utm=codolio"
          },
          {
            "title": "Rearrange array elements by sign",
            "difficulty": "Medium"
          },
          {
            "title": "Print the matrix in spiral manner",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/spiral-matrix?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Pascal's Triangle I",
            "difficulty": "Medium"
          },
          {
            "title": "Pascal's Triangle II",
            "difficulty": "Medium"
          },
          {
            "title": "Pascal's Triangle III",
            "difficulty": "Medium"
          },
          {
            "title": "Rotate matrix by 90 degrees",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/rotate-image?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Set Matrix Zeroes",
            "difficulty": "Medium"
          },
          {
            "title": "Two Sum",
            "difficulty": "Basic"
          },
          {
            "title": "3 Sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/3sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "4 Sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/4sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Sort an array of 0's 1's and 2's",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/sort-colors?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Kadane's Algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Next Permutation",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/next-permutation?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "FAQs(Hard)",
        "questions": [
          {
            "title": "Majority Element-II",
            "difficulty": "Medium"
          },
          {
            "title": "Find the repeating and missing number",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/find-the-repeating-and-missing-number?utm=codolio"
          },
          {
            "title": "Count Inversions",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-inversions?utm=codolio"
          },
          {
            "title": "Reverse Pairs",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/reverse-pairs?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Maximum Product Subarray in an Array",
            "difficulty": "Medium"
          },
          {
            "title": "Merge two sorted arrays without extra space",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/merge-sorted-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "Hashing",
    "lectures": [
      {
        "title": "Theory",
        "questions": [
          {
            "title": "Basic Hashing",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "Longest Consecutive Sequence in an Array",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-consecutive-sequence?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest subarray with sum K",
            "difficulty": "Medium"
          },
          {
            "title": "Largest Subarray with Sum 0",
            "difficulty": "Medium"
          },
          {
            "title": "Count subarrays with given sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/subarray-sum-equals-k?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Count subarrays with given xor K",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Binary Search",
    "lectures": [
      {
        "title": "Fundamentals",
        "questions": [
          {
            "title": "Search X in sorted array",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/binary-search?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Lower Bound",
            "difficulty": "Basic"
          },
          {
            "title": "Upper Bound",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Logic Building",
        "questions": [
          {
            "title": "Search insert position",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/search-insert-position?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Floor and Ceil in Sorted Array",
            "difficulty": "Basic"
          },
          {
            "title": "First and last occurrence",
            "difficulty": "Medium"
          },
          {
            "title": "Search in rotated sorted array-I",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/search-in-rotated-sorted-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Search in rotated sorted array-II",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Find minimum in Rotated Sorted Array",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Find out how many times the array is rotated",
            "difficulty": "Basic"
          },
          {
            "title": "Single element in sorted array",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/single-element-in-a-sorted-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "On answers",
        "questions": [
          {
            "title": "Find square root of a number",
            "difficulty": "Medium"
          },
          {
            "title": "Find Nth root of a number",
            "difficulty": "Medium"
          },
          {
            "title": "Find the smallest divisor",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Koko eating bananas",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/koko-eating-bananas?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum days to make M bouquets",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Capacity to Ship Packages Within D Days",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Kth Missing Positive Number",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/kth-missing-positive-number?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Painter's Partition",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/painters-partition?utm=codolio"
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "Aggressive Cows",
            "difficulty": "Medium"
          },
          {
            "title": "Book Allocation Problem",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/book-allocation-problem?utm=codolio"
          },
          {
            "title": "Find peak element",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/find-peak-element?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Median of 2 sorted arrays",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/median-of-two-sorted-arrays?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Kth element of 2 sorted arrays",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/kth-element-of-2-sorted-arrays?utm=codolio"
          },
          {
            "title": "Minimize Max Distance to Gas Station",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/minimize-max-distance-to-gas-station?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Split array - largest sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/split-array-largest-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "2D Arrays",
    "lectures": [
      {
        "title": "2D Arrays",
        "questions": [
          {
            "title": "Find row with maximum 1's",
            "difficulty": "Basic"
          },
          {
            "title": "Search in a 2D Matrix",
            "difficulty": "Medium"
          },
          {
            "title": "Search in 2D matrix - II",
            "difficulty": "Medium"
          },
          {
            "title": "Find Peak Element - II",
            "difficulty": "Medium"
          },
          {
            "title": "Matrix Median",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/matrix-median?utm=codolio"
          }
        ]
      }
    ]
  },
  {
    "title": "Recursion",
    "lectures": [
      {
        "title": "Implementation Problems",
        "questions": [
          {
            "title": "Pow(x,n)",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/powx-n?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Generate Parentheses",
            "difficulty": "Medium"
          },
          {
            "title": "Power Set",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/subsets?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Subsequence Pattern Problems",
        "questions": [
          {
            "title": "Check if there exists a subsequence with sum K",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/check-if-there-exists-a-subsequence-with-sum-k?utm=codolio"
          },
          {
            "title": "Count all subsequences with sum K",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-all-subsequences-with-sum-k?utm=codolio"
          }
        ]
      },
      {
        "title": "FAQs (Medium)",
        "questions": [
          {
            "title": "Combination Sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/combination-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Combination Sum II",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/combination-sum-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Subsets I",
            "difficulty": "Medium"
          },
          {
            "title": "Subsets II",
            "difficulty": "Medium"
          },
          {
            "title": "Combination Sum III",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/combination-sum-iii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Hard",
        "questions": [
          {
            "title": "Letter Combinations of a Phone Number",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "FAQs (Hard)",
        "questions": [
          {
            "title": "Palindrome partitioning",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/palindrome-partitioning?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Word Search",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/word-search?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "N Queen",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/n-queens?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Rat in a Maze",
            "difficulty": "Hard",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/rat-in-a-maze?utm=codolio"
          },
          {
            "title": "M Coloring Problem",
            "difficulty": "Hard",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/m-coloring-problem?utm=codolio"
          },
          {
            "title": "Sudoku Solver",
            "difficulty": "Hard"
          }
        ]
      }
    ]
  },
  {
    "title": "Linked-List",
    "lectures": [
      {
        "title": "Fundamentals (Single LL)",
        "questions": [
          {
            "title": "Introduction to Singly LinkedList",
            "difficulty": "Basic"
          },
          {
            "title": "Traversal in Linked List",
            "difficulty": "Basic"
          },
          {
            "title": "Deletion in Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insertion in Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Deletion of the head of LL",
            "difficulty": "Medium"
          },
          {
            "title": "Deletion of the tail of Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Deletion of the Kth element of Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Delete the element with value X",
            "difficulty": "Basic"
          },
          {
            "title": "Insertion at the head of Linked List",
            "difficulty": "Basic"
          },
          {
            "title": "Insertion at the tail of Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insertion at the Kth position of Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insertion before the value X in Linked List",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Fundamentals (Doubly LL)",
        "questions": [
          {
            "title": "Introduction to Doubly LL",
            "difficulty": "Basic"
          },
          {
            "title": "Deletion in Doubly LL",
            "difficulty": "Medium"
          },
          {
            "title": "Insertion in DLL",
            "difficulty": "Medium"
          },
          {
            "title": "Convert Array to Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Delete Tail of Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Delete Kth Element of Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Removing given node in Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insert node before head in Doubly Linked List",
            "difficulty": "Basic"
          },
          {
            "title": "Insert node before tail in Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insert node before (kth node) in Doubly Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Insert before given node in Doubly Linked List",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Logic Building",
        "questions": [
          {
            "title": "Add two numbers in Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Segregate odd and even nodes in Linked List",
            "difficulty": "Medium"
          },
          {
            "title": "Sort a Linked List of 0's 1's and 2's",
            "difficulty": "Medium"
          },
          {
            "title": "Remove Nth node from the back of the LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Reverse a LL",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQs (Medium)",
        "questions": [
          {
            "title": "Add one to a number represented by LL",
            "difficulty": "Medium"
          },
          {
            "title": "Find Middle of Linked List",
            "difficulty": "Basic"
          },
          {
            "title": "Delete the middle node in LL",
            "difficulty": "Medium"
          },
          {
            "title": "Check if LL is palindrome or not",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/palindrome-linked-list?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Find the intersection point of Y LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/intersection-of-two-linked-lists?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Detect a loop in LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/linked-list-cycle?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Find the starting point in LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/linked-list-cycle-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Length of loop in LL",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/length-of-loop-in-ll?utm=codolio"
          }
        ]
      },
      {
        "title": "FAQs (Hard)",
        "questions": [
          {
            "title": "Reverse LL in group of given size K",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/reverse-nodes-in-k-group?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Rotate a LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/rotate-list?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Merge two Sorted Lists",
            "difficulty": "Medium"
          },
          {
            "title": "Flattening of LL",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/flattening-of-ll?utm=codolio"
          },
          {
            "title": "Sort LL",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/sort-list?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Clone a LL with random and next pointer",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQS (DLL)",
        "questions": [
          {
            "title": "Delete all occurrences of a key in DLL",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/delete-all-occurrences-of-a-key-in-dll?utm=codolio"
          },
          {
            "title": "Remove duplicates from sorted DLL",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/remove-duplicated-from-sorted-dll?utm=codolio"
          },
          {
            "title": "Find Pairs with Given Sum in Doubly Linked List",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Bit Manipulation",
    "lectures": [
      {
        "title": "Theory",
        "questions": [
          {
            "title": "Introduction to Bits and Tricks",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Problems",
        "questions": [
          {
            "title": "Minimum Bit Flips to Convert Number",
            "difficulty": "Basic"
          },
          {
            "title": "Single Number - I",
            "difficulty": "Basic"
          },
          {
            "title": "Single Number - II",
            "difficulty": "Medium"
          },
          {
            "title": "Single Number - III",
            "difficulty": "Medium"
          },
          {
            "title": "Divide two numbers without multiplication and division",
            "difficulty": "Medium"
          },
          {
            "title": "Power Set Bit Manipulation",
            "difficulty": "Medium"
          },
          {
            "title": "XOR of numbers in a given range",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Greedy Algorithms",
    "lectures": [
      {
        "title": "Easy",
        "questions": [
          {
            "title": "Assign Cookies",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/assign-cookies?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Lemonade Change",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/lemonade-change?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Fractional Knapsack",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/fractional-knapsack?utm=codolio"
          },
          {
            "title": "Jump Game - I",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Scheduling and Interval Problems",
        "questions": [
          {
            "title": "Shortest Job First",
            "difficulty": "Medium"
          },
          {
            "title": "Job sequencing Problem",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/job-sequencing-problem?utm=codolio"
          },
          {
            "title": "N meetings in one room",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/n-meetings-in-one-room?utm=codolio"
          },
          {
            "title": "Non-overlapping Intervals",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/non-overlapping-intervals?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Insert Interval",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/insert-interval?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Merge Intervals",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/merge-intervals?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum number of platforms required for a railway",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/minimum-number-of-platforms-required-for-a-railway?utm=codolio"
          }
        ]
      },
      {
        "title": "Hard",
        "questions": [
          {
            "title": "Valid Paranthesis Checker",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/valid-parenthesis-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Candy",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/candy?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Jump Game II",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Sliding Window / 2 Pointer",
    "lectures": [
      {
        "title": "Pattern and Template",
        "questions": [
          {
            "title": "Theory",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Constant Window",
        "questions": [
          {
            "title": "Maximum Points You Can Obtain from Cards",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Longest and Smallest Window Problems",
        "questions": [
          {
            "title": "Longest Substring Without Repeating Characters",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-substring-without-repeating-characters?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Max Consecutive Ones III",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/max-consecutive-ones-iii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Fruit Into Baskets",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/fruit-into-baskets?utm=codolio"
          },
          {
            "title": "Longest Substring With At Most K Distinct Characters",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest Repeating Character Replacement",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-repeating-character-replacement?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum Window Substring",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/minimum-window-substring?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Counting Subarrays / Substrings Problems",
        "questions": [
          {
            "title": "Number of Substrings Containing All Three Characters",
            "difficulty": "Medium"
          },
          {
            "title": "Binary Subarrays With Sum",
            "difficulty": "Medium"
          },
          {
            "title": "Count number of Nice subarrays",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/count-number-of-nice-subarrays?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Subarrays with K Different Integers",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  },
  {
    "title": "Stack / Queues",
    "lectures": [
      {
        "title": "Implementation",
        "questions": [
          {
            "title": "Implementation using different DS",
            "difficulty": "Medium"
          },
          {
            "title": "Implement Stack using Arrays",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/implement-stack-using-arrays?utm=codolio"
          },
          {
            "title": "Implement Queue using Arrays",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/implement-queue-using-arrays?utm=codolio"
          },
          {
            "title": "Implement Stack using Queue",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/implement-stack-using-queues?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Implement Queue using Stack",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/implement-queue-using-stacks?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Implement stack using Linkedlist",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/implement-stack-using-linkedlist?utm=codolio"
          },
          {
            "title": "Implement queue using Linkedlist",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/implement-queue-using-linkedlist?utm=codolio"
          },
          {
            "title": "Balanced Paranthesis",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Monotonic Stack",
        "questions": [
          {
            "title": "Next Greater Element",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/next-greater-element-i?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Next Greater Element - 2",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/next-greater-element-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Asteroid Collision",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/asteroid-collision?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Sum of Subarray Minimums",
            "difficulty": "Medium"
          },
          {
            "title": "Sum of Subarray Ranges",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/sum-of-subarray-ranges?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Remove K Digits",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/remove-k-digits?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "Implement Min Stack",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/min-stack?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Sliding Window Maximum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/sliding-window-maximum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Trapping Rainwater",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/trapping-rain-water?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Largest rectangle in a histogram",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/largest-rectangle-in-histogram?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Maximum Rectangles",
            "difficulty": "Hard"
          },
          {
            "title": "Stock span problem",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/online-stock-span?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Celebrity Problem",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/word-break?utm=codolio"
          },
          {
            "title": "LRU Cache",
            "difficulty": "Medium"
          },
          {
            "title": "LFU Cache",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/lfu-cache?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "Binary Trees",
    "lectures": [
      {
        "title": "Theory/Traversals",
        "questions": [
          {
            "title": "Introduction",
            "difficulty": "Basic"
          },
          {
            "title": "Inorder Traversal",
            "difficulty": "Basic"
          },
          {
            "title": "Preorder Traversal",
            "difficulty": "Basic"
          },
          {
            "title": "Postorder Traversal",
            "difficulty": "Basic"
          },
          {
            "title": "Level Order Traversal",
            "difficulty": "Medium"
          },
          {
            "title": "Pre, Post, Inorder in one traversal",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Medium Problems",
        "questions": [
          {
            "title": "Maximum Depth in BT",
            "difficulty": "Basic",
            "leetcode_url": "https://leetcode.com/problems/maximum-depth-of-binary-tree?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Check if two trees are identical or not",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/same-tree?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Check for balanced binary tree",
            "difficulty": "Medium"
          },
          {
            "title": "Diameter of Binary Tree",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/diameter-of-binary-tree?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Maximum path sum",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/binary-tree-maximum-path-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Check for symmetrical BTs",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/symmetric-tree?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Children Sum Property in Binary Tree",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "Zig Zag or Spiral Traversal",
            "difficulty": "Medium"
          },
          {
            "title": "Boundary Traversal",
            "difficulty": "Medium"
          },
          {
            "title": "Vertical Order Traversal",
            "difficulty": "Medium"
          },
          {
            "title": "Top View of BT",
            "difficulty": "Medium"
          },
          {
            "title": "Bottom view of BT",
            "difficulty": "Medium"
          },
          {
            "title": "Right/Left View of BT",
            "difficulty": "Medium"
          },
          {
            "title": "Print root to leaf path in BT",
            "difficulty": "Medium"
          },
          {
            "title": "LCA in BT",
            "difficulty": "Medium"
          },
          {
            "title": "Maximum Width of BT",
            "difficulty": "Medium"
          },
          {
            "title": "Print all nodes at a distance of K in BT",
            "difficulty": "Medium"
          },
          {
            "title": "Minimum time taken to burn the BT from a given Node",
            "difficulty": "Medium"
          },
          {
            "title": "Count total nodes in a complete BT",
            "difficulty": "Medium"
          },
          {
            "title": "Flatten Binary Tree to Linked List",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Construction Problems",
        "questions": [
          {
            "title": "Requirements needed to construct a unique BT",
            "difficulty": "Medium"
          },
          {
            "title": "Construct a BT from Preorder and Inorder",
            "difficulty": "Medium"
          },
          {
            "title": "Construct a BT from Postorder and Inorder",
            "difficulty": "Medium"
          },
          {
            "title": "Serialize and De-serialize BT",
            "difficulty": "Hard"
          }
        ]
      },
      {
        "title": "Traversal in Constant Space",
        "questions": [
          {
            "title": "Morris Inorder Traversal",
            "difficulty": "Hard"
          },
          {
            "title": "Morris Preorder Traversal",
            "difficulty": "Hard"
          }
        ]
      }
    ]
  },
  {
    "title": "Binary Search Trees",
    "lectures": [
      {
        "title": "Theory and Basics",
        "questions": [
          {
            "title": "Introduction to BST",
            "difficulty": "Basic"
          },
          {
            "title": "Search in BST",
            "difficulty": "Basic"
          },
          {
            "title": "Floor and Ceil in a BST",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "Medium",
        "questions": [
          {
            "title": "Insert a given node in BST",
            "difficulty": "Medium"
          },
          {
            "title": "Delete a node in BST",
            "difficulty": "Medium"
          },
          {
            "title": "Kth Smallest and Largest element in BST",
            "difficulty": "Medium"
          },
          {
            "title": "Check if a tree is a BST or not",
            "difficulty": "Medium"
          },
          {
            "title": "LCA in BST",
            "difficulty": "Medium"
          },
          {
            "title": "Construct a BST from a preorder traversal",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Inorder successor and predecessor in BST",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "BST iterator",
            "difficulty": "Medium"
          },
          {
            "title": "Two sum in BST",
            "difficulty": "Medium"
          },
          {
            "title": "Correct BST with two nodes swapped",
            "difficulty": "Medium"
          },
          {
            "title": "Largest BST in Binary Tree",
            "difficulty": "Hard",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/largest-bst-in-binary-tree?utm=codolio"
          }
        ]
      }
    ]
  },
  {
    "title": "Heaps",
    "lectures": [
      {
        "title": "Theory and Implementation",
        "questions": [
          {
            "title": "Heaps (Theory Video)",
            "difficulty": "Medium"
          },
          {
            "title": "Heapify Algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Build heap from a given Array",
            "difficulty": "Medium"
          },
          {
            "title": "Implement Min Heap",
            "difficulty": "Medium"
          },
          {
            "title": "Implement Max Heap",
            "difficulty": "Medium"
          },
          {
            "title": "Check if an array represents a min heap",
            "difficulty": "Medium"
          },
          {
            "title": "Convert Min Heap to Max Heap",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/convert-min-heap-to-max-heap?utm=codolio"
          },
          {
            "title": "Heap Sort",
            "difficulty": "Medium"
          },
          {
            "title": "K-th Largest element in an array",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "FAQs",
        "questions": [
          {
            "title": "Kth largest element in a stream of running integers",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/kth-largest-element-in-a-stream?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "Graphs",
    "lectures": [
      {
        "title": "Theory and traversals",
        "questions": [
          {
            "title": "Introduction to Graph",
            "difficulty": "Basic"
          },
          {
            "title": "Traversal Techniques",
            "difficulty": "Medium"
          },
          {
            "title": "Connected Components",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Traversal Problems",
        "questions": [
          {
            "title": "Number of provinces",
            "difficulty": "Medium"
          },
          {
            "title": "Number of islands",
            "difficulty": "Medium"
          },
          {
            "title": "Flood fill algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Number of enclaves",
            "difficulty": "Medium"
          },
          {
            "title": "Rotten Oranges",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/rotting-oranges?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Distance of nearest cell having one",
            "difficulty": "Medium"
          },
          {
            "title": "Surrounded Regions",
            "difficulty": "Medium"
          },
          {
            "title": "Number of distinct islands",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Cycles",
        "questions": [
          {
            "title": "Detect a cycle in an undirected graph",
            "difficulty": "Medium"
          },
          {
            "title": "Bipartite graph",
            "difficulty": "Medium"
          },
          {
            "title": "Topological sort or Kahn's algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Detect a cycle in a directed graph",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Hard Problems",
        "questions": [
          {
            "title": "Find eventual safe states",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/find-eventual-safe-states?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Course Schedule I",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/course-schedule?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Course Schedule II",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/course-schedule-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Alien Dictionary",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/alien-dictionary?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Shortest path in DAG",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/shortest-path-in-dag?utm=codolio"
          },
          {
            "title": "Shortest path in undirected graph with unit weights",
            "difficulty": "Medium"
          },
          {
            "title": "Word ladder I",
            "difficulty": "Medium"
          },
          {
            "title": "Word ladder II",
            "difficulty": "Hard"
          }
        ]
      },
      {
        "title": "Shortest Path Algorithms",
        "questions": [
          {
            "title": "Dijkstra's algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Print Shortest Path",
            "difficulty": "Medium"
          },
          {
            "title": "Shortest Distance in a Binary Maze",
            "difficulty": "Medium"
          },
          {
            "title": "Path with minimum effort",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/path-with-minimum-effort?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Cheapest flight within K stops",
            "difficulty": "Medium"
          },
          {
            "title": "Minimum multiplications to reach end",
            "difficulty": "Medium"
          },
          {
            "title": "Number of ways to arrive at destination",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Bellman ford algorithm",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/bellman-ford-algorithm?utm=codolio"
          },
          {
            "title": "Floyd warshall algorithm",
            "difficulty": "Hard"
          },
          {
            "title": "Find the city with the smallest number of neighbors",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Minimum Spanning Tree",
        "questions": [
          {
            "title": "MST theory",
            "difficulty": "Medium"
          },
          {
            "title": "Disjoint Set",
            "difficulty": "Medium"
          },
          {
            "title": "Find the MST weight",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Hard Problems II",
        "questions": [
          {
            "title": "Number of operations to make network connected",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Accounts merge",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/accounts-merge?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Number of islands II",
            "difficulty": "Hard"
          },
          {
            "title": "Making a large island",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/making-a-large-island?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Most stones removed with same row or column",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Additional Algorithms",
        "questions": [
          {
            "title": "Kosaraju's algorithm",
            "difficulty": "Hard",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/kosaraju's-algorithm?utm=codolio"
          },
          {
            "title": "Bridges in graph",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/critical-connections-in-a-network?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Articulation point in graph",
            "difficulty": "Hard"
          }
        ]
      }
    ]
  },
  {
    "title": "Dynamic Programming",
    "lectures": [
      {
        "title": "Introduction",
        "questions": [
          {
            "title": "Introduction to DP",
            "difficulty": "Basic"
          }
        ]
      },
      {
        "title": "1D DP",
        "questions": [
          {
            "title": "Climbing stairs",
            "difficulty": "Medium"
          },
          {
            "title": "Frog Jump",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/frog-jump?utm=codolio"
          },
          {
            "title": "Frog jump with K distances",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/frog-jump-with-k-distances?utm=codolio"
          },
          {
            "title": "Maximum sum of non adjacent elements",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/house-robber?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "House robber",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/house-robber-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "2D DP",
        "questions": [
          {
            "title": "Ninja's training",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/ninja's-training?utm=codolio"
          }
        ]
      },
      {
        "title": "DP on grids",
        "questions": [
          {
            "title": "Grid unique paths",
            "difficulty": "Medium"
          },
          {
            "title": "Unique paths II",
            "difficulty": "Medium"
          },
          {
            "title": "Minimum Falling Path Sum",
            "difficulty": "Medium"
          },
          {
            "title": "Triangle",
            "difficulty": "Medium"
          },
          {
            "title": "Cherry pickup II",
            "difficulty": "Hard"
          }
        ]
      },
      {
        "title": "DP on stocks",
        "questions": [
          {
            "title": "Best time to buy and sell stock",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Best time to buy and sell stock II",
            "difficulty": "Medium"
          },
          {
            "title": "Best time to buy and sell stock III",
            "difficulty": "Medium"
          },
          {
            "title": "Best time to buy and sell stock IV",
            "difficulty": "Hard"
          },
          {
            "title": "Best time to buy and sell stock with transaction fees",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "DP on subsequences",
        "questions": [
          {
            "title": "Subset sum equals to target",
            "difficulty": "Medium"
          },
          {
            "title": "Partition equal subset sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/partition-equal-subset-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Partition a set into two subsets with minimum absolute sum difference",
            "difficulty": "Hard"
          },
          {
            "title": "Count subsets with sum K",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-all-subsequences-with-sum-k?utm=codolio"
          },
          {
            "title": "Count partitions with given difference",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-partitions-with-given-difference?utm=codolio"
          },
          {
            "title": "0 and 1 Knapsack",
            "difficulty": "Medium"
          },
          {
            "title": "Minimum coins",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/coin-change?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Target sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/target-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Coin change II",
            "difficulty": "Medium"
          },
          {
            "title": "Unbounded knapsack",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/unbounded-knapsack?utm=codolio"
          },
          {
            "title": "Rod cutting problem",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/minimum-cost-to-connect-sticks?utm=codolio"
          }
        ]
      },
      {
        "title": "LIS",
        "questions": [
          {
            "title": "Longest Increasing Subsequence",
            "difficulty": "Medium"
          },
          {
            "title": "Print Longest Increasing Subsequence",
            "difficulty": "Medium"
          },
          {
            "title": "Largest Divisible Subset",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/largest-divisible-subset?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest String Chain",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-string-chain?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest Bitonic Subsequence",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/longest-bitonic-subsequence?utm=codolio"
          },
          {
            "title": "Number of Longest Increasing Subsequences",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "DP on strings",
        "questions": [
          {
            "title": "Longest common subsequence",
            "difficulty": "Medium"
          },
          {
            "title": "Longest common substring",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/longest-common-substring?utm=codolio"
          },
          {
            "title": "Longest palindromic subsequence",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/longest-palindromic-subsequence?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum insertions to make string palindrome",
            "difficulty": "Medium"
          },
          {
            "title": "Minimum insertions or deletions to convert string A to B",
            "difficulty": "Medium"
          },
          {
            "title": "Shortest common supersequence",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/shortest-common-supersequence?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Distinct subsequences",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/distinct-subsequences?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Edit distance",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/edit-distance?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Wildcard matching",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/wildcard-matching?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "MCM DP",
        "questions": [
          {
            "title": "Matrix chain multiplication",
            "difficulty": "Hard",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/matrix-chain-multiplication?utm=codolio"
          },
          {
            "title": "Burst balloons",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/burst-balloons?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Palindrome partitioning II",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/palindrome-partitioning-ii?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Partition Array for Maximum Sum",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/partition-array-for-maximum-sum?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum cost to cut the stick",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Different Ways to Evaluate a Boolean Expression",
            "difficulty": "Hard"
          }
        ]
      }
    ]
  },
  {
    "title": "Tries",
    "lectures": [
      {
        "title": "Theory",
        "questions": [
          {
            "title": "Trie Implementation and Operations",
            "difficulty": "Medium"
          },
          {
            "title": "Trie Implementation and Advanced Operations",
            "difficulty": "Medium"
          }
        ]
      },
      {
        "title": "Problems",
        "questions": [
          {
            "title": "Longest Word with All Prefixes",
            "difficulty": "Medium"
          },
          {
            "title": "Number of distinct substrings in a string",
            "difficulty": "Medium",
            "leetcode_url": null,
            "gfg_url": null,
            "tuf_url": "https://takeuforward.org/plus/dsa/problems/number-of-distinct-substrings-in-a-string?utm=codolio"
          },
          {
            "title": "Maximum XOR of two numbers in an array",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Maximum Xor with an element from an array",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "Strings (Advanced Algo)",
    "lectures": [
      {
        "title": "Medium Problems",
        "questions": [
          {
            "title": "Reverse every word in a string",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/reverse-words-in-a-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Minimum number of bracket reversals to make an expression balanced",
            "difficulty": "Medium"
          },
          {
            "title": "Count and say",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/count-and-say?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      },
      {
        "title": "Advanced Problems (Less asked)",
        "questions": [
          {
            "title": "Rabin Karp Algorithm",
            "difficulty": "Medium"
          },
          {
            "title": "Z function",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "KMP Algorithm or LPS array",
            "difficulty": "Medium"
          },
          {
            "title": "Shortest Palindrome",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/shortest-palindrome?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Longest happy prefix",
            "difficulty": "Hard",
            "leetcode_url": "https://leetcode.com/problems/longest-happy-prefix?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          }
        ]
      }
    ]
  },
  {
    "title": "Maths",
    "lectures": [
      {
        "title": "Sieve of Eratosthenes",
        "questions": [
          {
            "title": "Print all primes till N",
            "difficulty": "Medium",
            "leetcode_url": "https://leetcode.com/problems/count-primes?utm=codolio",
            "gfg_url": null,
            "tuf_url": null
          },
          {
            "title": "Prime factorisation of a Number",
            "difficulty": "Medium"
          },
          {
            "title": "Count primes in range L to R",
            "difficulty": "Medium"
          }
        ]
      }
    ]
  }
];

export interface SeedArchiveQuestion extends SeedQuestion {
  topic: string;
  status: "removed" | "merged" | "renamed";
  reason: string;
  equivalentTitle?: string;
}

export const archiveQuestions: SeedArchiveQuestion[] = [
  {
    "topic": "Strings",
    "title": "Remove outermost Paranthesis",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/remove-outermost-parentheses?utm=codolio"
  },
  {
    "topic": "Strings",
    "title": "Maximum Nesting Depth of Paranthesis",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses?utm=codolio"
  },
  {
    "topic": "Strings",
    "title": "Roman Number to Integer and vice versa",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/roman-to-integer?utm=codolio"
  },
  {
    "topic": "Strings",
    "title": "Implement Atoi",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/string-to-integer-atoi?utm=codolio"
  },
  {
    "topic": "Strings",
    "title": "Sum of Beauty of all substring",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings?utm=codolio"
  },
  {
    "topic": "Linked List",
    "title": "Search an element in the LL",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/search-in-linked-list?utm=codolio"
  },
  {
    "topic": "Linked List",
    "title": "Reverse a DLL",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/reverse-a-doubly-linked-list?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Recursive Implementation of atoi()",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/string-to-integer-atoi?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Sort a stack using recursion",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/sort-a-stack?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Reverse a stack using recursion",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/reverse-a-stack?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Generate all binary strings",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/generate-binary-strings-without-consecutive-1s?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Count Good numbers",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/count-good-numbers?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Word Break",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/word-break?utm=codolio"
  },
  {
    "topic": "Recursion / Backtracking",
    "title": "Expression Add Operators",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/expression-add-operators?utm=codolio"
  },
  {
    "topic": "Bit Manipulation",
    "title": "Check if the i-th bit is set or not",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/check-if-the-i-th-bit-is-set-or-not?utm=codolio"
  },
  {
    "topic": "Bit Manipulation",
    "title": "Check if a number is odd or not",
    "difficulty": "Basic",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/check-if-a-number-is-odd-or-not?utm=codolio"
  },
  {
    "topic": "Bit Manipulation",
    "title": "Check if a number is power of 2 or not",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/power-of-two?utm=codolio"
  },
  {
    "topic": "Bit Manipulation",
    "title": "Count the number of set bits",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-the-number-of-set-bits?utm=codolio"
  },
  {
    "topic": "Bit Manipulation",
    "title": "Swap two numbers",
    "difficulty": "Basic",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/swap-two-numbers?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Infix to Postfix Conversion using Stack",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/infix-to-postfix-conversion?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Prefix to Infix Conversion",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/prefix-to-infix-conversion?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Prefix to Postfix Conversion",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/prefix-to-postfix-conversion?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Postfix to Prefix Conversion",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/postfix-to-prefix-conversion?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Convert Infix To Prefix Notation",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/infix-to-postfix-conversion?utm=codolio"
  },
  {
    "topic": "Stack / Queues",
    "title": "Number of NGEs to the right",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/number-of-greater-elements-to-the-right?utm=codolio"
  },
  {
    "topic": "Sliding Window / 2 Pointer",
    "title": "Minimum Window Subsequence",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/minimum-window-subsequence?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Sort K sorted array",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/merge-k-sorted-lists?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Merge M sorted Lists",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/merge-k-sorted-lists?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Task Scheduler",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/task-scheduler?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Hands of Straights",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/hand-of-straights?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Design twitter",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/design-twitter?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Connect \\`n\\` ropes with minimal cost",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/minimum-cost-to-connect-sticks?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Maximum Sum Combination",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "gfg_url": "https://www.interviewbit.com/problems/maximum-sum-combinations?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/find-median-from-data-stream?utm=codolio"
  },
  {
    "topic": "Heaps / Priority Queue",
    "title": "K most frequent elements",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/top-k-frequent-elements?utm=codolio"
  },
  {
    "topic": "Binary Search Tree",
    "title": "Merge 2 BST's",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/binary-search-tree-iterator?utm=codolio"
  },
  {
    "topic": "Graphs",
    "title": "0/1 Matrix (Bfs Problem)",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/01-matrix?utm=codolio"
  },
  {
    "topic": "Graphs",
    "title": "Network Delay time",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/network-delay-time?utm=codolio"
  },
  {
    "topic": "Graphs",
    "title": "Swim in rising water",
    "difficulty": "Hard",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/swim-in-rising-water?utm=codolio"
  },
  {
    "topic": "Dynamic Programming",
    "title": "Minimum path sum in Grid (DP 10)",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/minimum-path-sum?utm=codolio"
  },
  {
    "topic": "Dynamic Programming",
    "title": "Buy and Sell Stocks With Cooldown|(DP-39)",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown?utm=codolio"
  },
  {
    "topic": "Dynamic Programming",
    "title": "Count Square Submatrices with All Ones|(DP-56)",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/count-square-submatrices-with-all-ones?utm=codolio"
  },
  {
    "topic": "Trie / Advanced Strings",
    "title": "Bit PreRequisites for TRIE Problems",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/single-number?utm=codolio"
  },
  {
    "topic": "Trie / Advanced Strings",
    "title": "Hashing In Strings | Theory",
    "difficulty": "Easy",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "leetcode_url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string?utm=codolio"
  },
  {
    "topic": "Trie / Advanced Strings",
    "title": "Count palindromic subsequence in given string",
    "difficulty": "Medium",
    "status": "removed",
    "reason": "Not present as a separate question in the current 442-question sheet.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/count-palindromic-subsequences?utm=codolio"
  },
  {
    "topic": "Dynamic Programming",
    "title": "3-d DP : Ninja and his friends (DP-13)",
    "difficulty": "Hard",
    "status": "merged",
    "reason": "Same underlying problem as the current sheet's \"Cherry pickup II\".",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/ninja-and-his-friends?utm=codolio",
    "equivalentTitle": "Cherry pickup II"
  },
  {
    "topic": "Graphs — Theory",
    "title": "BFS",
    "difficulty": "Easy",
    "status": "merged",
    "reason": "Folded into the current sheet's combined \"Traversal Techniques\" lesson.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/traversal-techniques?utm=codolio",
    "equivalentTitle": "Traversal Techniques"
  },
  {
    "topic": "Graphs — Theory",
    "title": "DFS",
    "difficulty": "Easy",
    "status": "merged",
    "reason": "Folded into the current sheet's combined \"Traversal Techniques\" lesson.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/traversal-techniques?utm=codolio",
    "equivalentTitle": "Traversal Techniques"
  },
  {
    "topic": "Trie",
    "title": "Implement Trie - 2 (Prefix Tree)",
    "difficulty": "Medium",
    "status": "merged",
    "reason": "Covered under the current \"Trie Implementation and Advanced Operations\" entry.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/trie-implementation-and-advanced-operations?utm=codolio",
    "equivalentTitle": "Trie Implementation and Advanced Operations"
  },
  {
    "topic": "Binary Tree",
    "title": "Height of a Binary Tree",
    "difficulty": "Easy",
    "status": "renamed",
    "reason": "Same problem, now titled \"Maximum Depth in BT\".",
    "leetcode_url": "https://leetcode.com/problems/maximum-depth-of-binary-tree?utm=codolio",
    "equivalentTitle": "Maximum Depth in BT"
  },
  {
    "topic": "Binary Tree",
    "title": "Symmetric Binary Tree",
    "difficulty": "Easy",
    "status": "renamed",
    "reason": "Same problem, now titled \"Check for symmetrical BTs\".",
    "leetcode_url": "https://leetcode.com/problems/symmetric-tree?utm=codolio",
    "equivalentTitle": "Check for symmetrical BTs"
  },
  {
    "topic": "Binary Search Tree",
    "title": "Ceil in a Binary Search Tree",
    "difficulty": "Medium",
    "status": "renamed",
    "reason": "Now covered together with floor as \"Floor and Ceil in a BST\".",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/floor-and-ceil-in-a-bst?utm=codolio",
    "equivalentTitle": "Floor and Ceil in a BST"
  },
  {
    "topic": "Strings / Sliding Window",
    "title": "Count Number of Substrings",
    "difficulty": "Hard",
    "status": "merged",
    "reason": "The linked problem is the same as the current \"Subarrays with K Different Integers\" entry.",
    "leetcode_url": "https://leetcode.com/problems/subarrays-with-k-different-integers?utm=codolio",
    "equivalentTitle": "Subarrays with K Different Integers"
  },
  {
    "topic": "Strings",
    "title": "Reverse Every Word in A String",
    "difficulty": "Medium",
    "status": "renamed",
    "reason": "Same problem, title normalized to \"Reverse every word in a string\".",
    "leetcode_url": "https://leetcode.com/problems/reverse-words-in-a-string?utm=codolio",
    "equivalentTitle": "Reverse every word in a string"
  },
  {
    "topic": "Maths",
    "title": "Sieve of Eratosthenes",
    "difficulty": "Medium",
    "status": "merged",
    "reason": "Covered by the current Sieve section's \"Print all primes till N\" entry.",
    "leetcode_url": "https://leetcode.com/problems/count-primes?utm=codolio",
    "equivalentTitle": "Print all primes till N"
  },
  {
    "topic": "Dynamic Programming",
    "title": "Longest Increasing Subsequence |(DP-43)",
    "difficulty": "Medium",
    "status": "merged",
    "reason": "Duplicate LIS variant folded into the current LIS section.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/longest-increasing-subsequence?utm=codolio",
    "equivalentTitle": "Longest Increasing Subsequence"
  },
  {
    "topic": "Dynamic Programming",
    "title": "Matrix Chain Multiplication | Bottom-Up|(DP-49)",
    "difficulty": "Hard",
    "status": "merged",
    "reason": "Bottom-up implementation is no longer a separate current-sheet entry.",
    "tuf_url": "https://takeuforward.org/plus/dsa/problems/matrix-chain-multiplication?utm=codolio",
    "equivalentTitle": "Matrix chain multiplication"
  }
];
