// 1. Find the missing number in the array
// https://www.educative.io/find-the-missing-number

// Solution 1
const findMissingA = (input) => {
    let sumValues = 0;
    let sumGoal = 0;

    // If the input array contains only one element, return null
    if (input.length === 1) return null;

    // Calculate the sum of the array values and the sum of the expected sequence
    input.forEach((e, i) => {
        sumValues += e;
        sumGoal += i + 1;
    });

    // Add the next number in the sequence to the sumGoal
    sumGoal += input.length + 1;

    // The missing number is the difference between sumGoal and sumValues
    return sumGoal - sumValues;
};

// Solution 2, using sum of series math formula
const findMissing = (input) => {
    const n = input.length + 1;
    let sumValues = 0;

    // If the input array contains only one element, return null
    if (input.length === 1) return null;

    // Calculate the sum of the array values
    input.forEach((e) => sumValues += e);

    // Calculate the sum of the first n natural numbers
    const sumGoal = (n * (n + 1)) / 2;

    // The missing number is the difference between sumGoal and sumValues
    return sumGoal - sumValues;
};

// Test the function with a sample array
const list_missing_6 = [3, 7, 1, 2, 8, 4, 5];
console.log(findMissing(list_missing_6) === 6);

// Function to print array as a JSON string
const printArray = (arr) => JSON.stringify(arr);

// Test cases
let v = [1];
console.log("1. Original: " + printArray(v));
let missingNumber = findMissing(v);
console.log("   The missing number is: " + missingNumber);
console.log("\n-----------------------------------------------------------------------------------------------------\n");

let v1 = [3, 7, 1, 2, 4, 5];
console.log("2. Original: " + printArray(v1));
let missingNumber1 = findMissing(v1);
console.log("   The missing number is: " + missingNumber1);
console.log("\n-----------------------------------------------------------------------------------------------------\n");

let v2 = [9, 6, 4, 2, 3, 5, 7, 1];
console.log("3. Original: " + printArray(v2));
let missingNumber2 = findMissing(v2);
console.log("   The missing number is: " + missingNumber2);
console.log("\n-----------------------------------------------------------------------------------------------------\n");
