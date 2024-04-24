1. Cartesian product
2. Climbing staircase
3. Tower of hanoi

#### Cheat sheet 

- Calculation not dependent on input size - O(1)
- 1 loop - O(n)
- 2 nested loops - O(n²)
- Input size reduced by half - O(logn)

# PsuedoCode

# 1. Cartesian product

### Cartesian product Idea

- Traverse each array and pair each element in the first array with each element in the second array

### Big-O of Cartesian product fucntion

> Answer : Big-O O(m*n)

# 2. Climbing staircase

### Climbing staircase idea

- At any given time, you can climb either 1 step or 2 steps
- If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
- Calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

### Big-O of Climbing staircase fucntion

> Answer : Big-O O(n)

# 3. Tower of hanoi

### Tower of hanoi idea

### Big-O of Climbing staircase fucntion

> Answer : Big-O O(2^n)