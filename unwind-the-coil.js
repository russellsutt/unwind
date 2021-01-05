// You have a coiled snake matrix.  Look at the numerical order to understand the pattern that must be returned.
// This must be scalable so it is not limited to a 4x4 matrix.

const snakeMatrix = [
    [ 1, 2, 3, 4 ],
    [ 12, 13, 14, 5 ],
    [ 11, 16, 15, 6 ],
    [ 10, 9, 8, 7 ]
]

// expected return 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16.

// You may not flatten ( making it one array ) and sort numerically. If I replace 3 with 20, 12 with "string", and 16 with "16"
// I expect 1, 2, 20, 4, 5, 6, 7, 8, 9, 10, 11, "string", 13, 14, 15, "16".

// You can reverse arrays.

// You can return segments in different lines.  But they must not be returned in an array.  (Check the spread operator)

// Can we use recusion?

// Have fun!


unwind = (matrix) => {
    // your code here
}


unwind(snakeMatrix)

