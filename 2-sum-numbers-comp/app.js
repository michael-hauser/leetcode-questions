// 2. Determine if the sum of two integers is equal to the given value
// https://www.educative.io/sum-of-two-values

// Using a hash map to store values and check for the complement
const check_two_sum = (A, val) => {
    const foundValues = {};
    for (let i = 0; i < A.length; i++) {
        if (foundValues[val - A[i]]) return true;
        foundValues[A[i]] = true;
    }

    return false;
};

// Function to print array as a JSON string
const printArray = (arr) => JSON.stringify(arr);

// Test cases
let list = [5, 7, 1, 2, 8, 4, 3];
let sum = 10;
console.log(check_two_sum(list, sum)); // true, 7+3 or 2+8

sum = 2;
console.log(check_two_sum(list, sum)); // false, no pairs sum to 2
