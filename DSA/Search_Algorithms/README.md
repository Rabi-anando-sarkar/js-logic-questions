# Search Algorithms

1. Linear Search
2. Binary Search
3. Recursive Binary Search

#### Cheat sheet 

- Calculation not dependent on input size - O(1)
- 1 loop - O(n)
- 2 nested loops - O(n²)
- Input size reduced by half - O(logn)

# PsuedoCode

# 1. Linear Search

### Linear search pseudocode

- Start at the first element in the array and move towards the last.
- At each element though, check if the element is equal to the target element.
- If element found, return the index of the element
- If element not found, return -1

### Big-O of Linear search fucntion

> Answer : Big-O O(n) : Linear
 
 # 2. Binary Search

### Binary search pseudocode

- If the array is empty, return -1 as the element cannot be found.
- If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
- If target is less than the middle element, binary search left half of the array.
- If target is greater than middle element, binary search right half of the array.

### Big-O of Linear search fucntion

> Answer : Big-O O(logn) : Logarithmic

### Big-O of Linear search fucntion by Recursion

> Answer : Big-O O(logn) : Logarithmic