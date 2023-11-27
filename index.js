"use strict";
// Define product categories and their respective prices
const promptSync = require("prompt-sync")();
const fruits = {
    apple: 2.99,
    banana: 1.99,
    orange: 3.49,
};
const vegetables = {
    carrot: 1.50,
    tomato: 2.25,
    potato: 1.75,
};
const groceries = {
    milk: 3.80,
    bread: 2.50,
    eggs: 4.50,
};
// Initialize variables to track shopping items, expenses, and discounts
let shoppingItems = [];
let totalExpenses = 0;
let discountApplied = false;
let discountAmount = 0;
// Simulate buying fruits, vegetables, and groceries
console.log("Welcome to our supermarket!");
// Scenario 1 - Buying Groceries
console.log("Would you like to buy fruits, vegetables, or groceries?");
const choice = promptSync("Enter your preference: ");
if (choice === "fruits") {
    console.log("Available fruits:");
    for (const fruit in fruits) {
        console.log(`- ${fruit} for ₹${fruits[fruit]}`);
    }
    const fruitSelection = promptSync("Enter the fruit you want to buy: ");
    if (fruitSelection in fruits) {
        shoppingItems.push(`Fruit: ${fruitSelection} for ₹${fruits[fruitSelection]}`);
        totalExpenses += fruits[fruitSelection];
    }
    else {
        console.log("Invalid fruit selection. Please try again.");
    }
}
else if (choice === "vegetables") {
    console.log("Available vegetables:");
    for (const vegetable in vegetables) {
        console.log(`- ${vegetable} for ₹${vegetables[vegetable]}`);
    }
    const vegetableSelection = promptSync("Enter the vegetable you want to buy: ");
    if (vegetableSelection in vegetables) {
        shoppingItems.push(`Vegetable: ${vegetableSelection} for ₹${vegetables[vegetableSelection]}`);
        totalExpenses += vegetables[vegetableSelection];
    }
    else {
        console.log("Invalid vegetable selection. Please try again.");
    }
}
else if (choice === "groceries") {
    console.log("Available groceries:");
    for (const grocery in groceries) {
        console.log(`- ${grocery} for ₹${groceries[grocery]}`);
    }
    const grocerySelection = promptSync("Enter the grocery you want to buy: ");
    if (grocerySelection in groceries) {
        shoppingItems.push(`Grocery: ${grocerySelection} for ₹${groceries[grocerySelection]}`);
        totalExpenses += groceries[grocerySelection];
    }
    else {
        console.log("Invalid grocery selection. Please try again.");
    }
}
else {
    console.log("Invalid choice. Please try again.");
}
// Scenario 2 - Checking Discounts
if (totalExpenses >= 50) {
    discountApplied = true;
    discountAmount = totalExpenses * 0.10;
    totalExpenses -= discountAmount;
}
// Display the total bill
console.log("Your shopping cart:");
console.log(shoppingItems.join("\n"));
console.log("Total expenses: ₹" + totalExpenses);
// Scenario 3 - Checkout Process
console.log("Please choose your payment method:");
console.log("1. Cash");
console.log("2. Credit card");
console.log("3. Debit card");
const paymentMethod = parseInt(promptSync("Enter your choice (1-3): "));
switch (paymentMethod) {
    case 1:
        console.log("Thank you for your payment. Please come again!");
        break;
    case 2:
        console.log("Please swipe your credit card.");
        console.log("Thank you for your payment. Please come again!");
        break;
    case 3:
        console.log("Please insert your debit card and enter your PIN.");
        console.log("Thank you for your payment. Please come again!");
        break;
    default:
        console.log("Invalid payment method. Please try again.");
        break;
}
