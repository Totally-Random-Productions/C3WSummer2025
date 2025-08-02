// Conditional statements
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
};


// In function declarations or definitions the variable used in the parenthesis at the beginning is called a parameter.

// Function to check if a number is even or odd
function evenOrOdd(aNumber) {
    if (aNumber % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrOdd(10)); // Even
console.log(evenOrOdd(7));  // Odd