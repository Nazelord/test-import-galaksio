// Example JavaScript code
console.log("Hello from Galaksio Compute!");

// Calculate factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(5);
console.log(`Factorial of 5 is: ${result}`);
