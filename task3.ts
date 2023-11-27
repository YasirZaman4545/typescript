// Scenario 1 - Modify Array with Methods

const initialArray: string[] = ["Apple", "Banana", "Orange"];

// Push new elements
initialArray.push("Grape", "Strawberry");
console.log("Array after pushing:", initialArray);

// Pop the last element
const poppedElement = initialArray.pop();
console.log("Popped element:", poppedElement);
console.log("Array after popping:", initialArray);

// Shift the first element
const shiftedElement = initialArray.shift();
console.log("Shifted element:", shiftedElement);
console.log("Array after shifting:", initialArray);

// Unshift new elements
initialArray.unshift("Pineapple", "Mango");
console.log("Array after unshifting:", initialArray);

// Scenario 2 - Subarray Creation

// Create a subarray using splice
const subarray1 = initialArray.splice(2, 2);
console.log("Subarray created using splice:", subarray1);
console.log("Original array after splice:", initialArray);

// Create a subarray using slice
const subarray2 = initialArray.slice(1, 4);
console.log("Subarray created using slice:", subarray2);
console.log("Original array after slice:", initialArray);
