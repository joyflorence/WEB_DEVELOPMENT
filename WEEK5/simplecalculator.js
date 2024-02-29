function calculate(expression) {
    try {
        // Use eval to evaluate the mathematical expression
        let result = eval(expression);

        // Check if the result is a valid number
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }

        return result;
    } catch (error) {
        // Handle errors and return an error message
        return 'Error: ' + error.message;
    }
}

// Test the calculate function with various expressions
console.log(calculate("2 + 3"));        // Output: 5
console.log(calculate("4 * 5"));        // Output: 20
console.log(calculate("10 / 2"));       // Output: 5
console.log(calculate("8 - 3"));        // Output: 5
console.log(calculate("12 / 0"));       // Output: Error: Invalid expression
console.log(calculate("abc + 3"));      // Output: Error: Invalid expression
