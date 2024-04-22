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

### Bubble sort Idea

- Compare adjacent elements in the array and swap the positions if they are not in the intended order
- Repeat the instruction as you step through each element in the array
- Once you step through the whole array with no swaps, the array is sorted

### Big-O of Bubble Sort

> Answer : Big-O O(n²) : Quadratic

# 2. Insertion Sort

### Insertion Sort Idea

- Virtually split the array into a sorted and an unsorted part
- Assume that the first element is already sorted and remaining elements are unsorted
- Select an unsorted element and compare with all elements in the sorted part
- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
- Insert the selected element at the right index
- Repeat till all the unsorted elements are placed in the right order

### Big-O of Insertion Sort

> Answer : Big-O O(n²) : Quadratic

# 3. Quick Sort

### Quick Sort Idea

- Identify the pivot element in the array
- Pick first element as pivot
- Pick last element as pivot (Our approach)
- Pick a random element as pivot
- Pick median as pivot
- Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
- Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
- Repeatedly concatenate the left array, pivot and right array till one sorted array remains

### Big-O of Quick Sort

> Answer : Worst Case - O(n²) - quadratic and Average Case - O(nlogn) - complex

# 4. Merge Sort

### Merge Sort Idea

- Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)

- Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

### Big-O of Merge Sort

> Answer :  Big-O O(nlogn)