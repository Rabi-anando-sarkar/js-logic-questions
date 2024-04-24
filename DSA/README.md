# DSA

## Divided into Algorithm and Data Structure

- Algorithm : An Algorithm is a set of well-defined instructions to solve a particular problem

## Why algorithm

1. As a developer, you're going to come accross problems that you need to solve
2. Learning algorithms translates to learning diffrenet tecniques to efficiently solve those problems
3. One problem can be solved in many ways using diffrent algorithms
4. Every algorithm comes with its own tradeoffs when it comes to performance

## Algorithm analysis

- The absolute runnig time of an algorithm cannot be predicted, since it depends on a number of factors

1. Programming Language used to implement the algorithm
2. The computer the program runs on
3. Other programs running at the same time
4. Quality of the operating system

- We evaluate the preformance of an algorithm in terms of its input size

- Time Complexiity : The amount of time taken by an algorithm to run, as a function of input size

- Space Complexity : The amount of memory taken by an algorithm to run,as a function of input size

> By evaluating against the input size,the analysis is not only machine indepenfent but the comparison is also more appropriate.

> There is no one solution that works every single time.It is always good to know multiple ways to solve the problem and use the best sollution,given your constraints.

> if your app needs to be very quick and has plenty of memory to worl with,you dont have to worry about space complexity

> if you have very little memory to work with, you should pick a solution that is relatively slower but needs less space

## How to represent complexity

- asymptotic notations

- Mathematical tools to represnet time and space complexity

1. Big-O Notation (O-Notation) - Worst case complexity
2. Omega Noation (ω-Notation) - Best case Complexity
3. Theta notation (θ-Notation) - Avaerage case complexity

## Big-O Notation

The worst case complexity of an algorithm is represnted using the Big-O Notation

Big-O notation describes the complexity of an algorithm using algebraic terms

It has Two important characteristics
- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the minute details

```javascript
    function summation(n) {
        let sum = 0; //2
        for(let i=1; i<=n; i++) {
            sum += i; //4
        }
        return sum; //6
    }

    // summation(4) = 10
    // 1+2+3+4 = 10

    // Count the number of times a statment executes based on the input size
```

so if n = 4

> line 2 executes once

> line 4 executes 4 times

> line 6 executes once

total count = 4 + 2 => n + 2 

It is expressed in terms of inputs

It focuses on the bigger picture without getting caught up in the minute details

```
n + 2
n = 100     or      100 + 2
n = 1000    or      1000 + 2
n = 10000   or      10000 + 2
.
.
.
.
n = 10000000000     or      10000000000 + 2
```
So, The Time complexity of summation function is 

- Time Complexity O(n) - Linear : When iput increases time complexity also increases

Note : If you see a loop in an algorithm least we can say it is Linear (But keep in mind there are exceptions)

## Big-O Calculation

```javascript
    function summation(n) {
        return (n * (n+1)) / 2;
    }
```

Time Complexity of this function is : O(1) - Constant

```javascript
    for(let i=1;i<=n;i++) {
        for(let j=1;j<=i;j++) {
            // some code
        }
    }
```
> Note : Avoid this in both complexities

Time Complexity of this function is : O(n²) - Quadratic 3n² + 5n + 1

```javascript
    for(let i=1;i<=n;i++) {
        for(let j=1;j<=i;j++) {
            for(let k=1;k<=j;k++) {
                // some code
            }
        }
    }
```

Time Complexity of this function is : O(n³) - Cubic

> If the Input size reduces by half every iteration

Time Complexity will be : O(logn) - Logarithmic


## Space Complexity

> O(1) - Constant

- Sorting algorithms

> O(n) - Linear

- Extra space needed grows as the input size grows

> O(logn) - Logarithmic 

- Extra space needed grows but not that same rate as the input size 

## Objects - Big-O

```javascript
    const person = {
        firstname: "Rabi",
        lastname: "anando"
    }
```
- An object is a collection of key value pairs

> Insert - O(1)

> Remove - O(1)

> Access - O(1)

> Search - O(n)

> Object.keys() - O(n)

> Object.values() - O(n)

> Object.entries() - O(n)

## Arrays - Big-O

```javascript
    const odd = [1,3,5,7,9]
```

> Insert/remove at end - O(1)

> Insert/remove at beginnig - O(n)

> Access - O(1)

> Search - O(n)

> Push/Pop - O(1)

> Shift/ unshift/ concat/ slice/ splice - O(n)

> forEach/ map/ filter/ reduce - O(n)

## Algorithm design techniques

### 1. Bruce force 
- Simple and exhaustive technique that evaluates every possible outcome to find the best solution. Ex: Linear search

### 2. Greedy 
- Choose the best option at the current time, without any consideration for the future. Ex: Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm

### 3. Divide and Conquer 
- Divide the problem into smaller sub-problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution. Ex: Binary Search, Quick Sort, Merge Sort and Tower of Hanoi

### 4. Dynamic Programming 
- Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub problems. Store the result and reuse it for the same sub-problems. This is called memoization and is a optimization technique that improves the time complexity of your algorithm. Ex: Fibonacci numbers and climbing staircase

### 5. Backtracking 
- Generate all possible solutions. Check if the solution satisfies all the given constrains and only then you proceed with generating subsequent solutions. If the constraints are not satisfied, backtrack and go on a different path to find the solution. Ex: N-Queens problem

