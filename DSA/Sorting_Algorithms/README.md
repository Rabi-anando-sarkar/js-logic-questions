# Sorting Algorithms

1. Bubble Sort
2. Insertion Sort
3. Quick Sort
4. Merge Sort

#### Cheat sheet 

- Calculation not dependent on input size - O(1)
- 1 loop - O(n)
- 2 nested loops - O(n²)
- Input size reduced by half - O(logn)

# PsuedoCode

# 1. Bubble Sort

### Bubble sort pseudocode

- Compare adjacent elements in the array and swap the positions if they are not in the intended order
- Repeat the instruction as you step through each element in the array
- Once you step through the whole array with no swaps, the array is sorted

### Big-O of Linear search fucntion

> Answer : Big-O O(n²) : Quadratic

# 2. Insertion Sort

### Insertion Sort pseudocode

- Virtually split the array into a sorted and an unsorted part
- Assume that the first element is already sorted and remaining elements are unsorted
- Select an unsorted element and compare with all elements in the sorted part
- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
- Insert the selected element at the right index
- Repeat till all the unsorted elements are placed in the right order