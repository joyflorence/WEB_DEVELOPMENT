function calculate(expression) {
    try {
        // Use eval to evaluate the mathematical expression
        let result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }

        return result;
    } catch (error) {
        return 'Error: ' + error.message;
    }
}

// Test the calculate function with various expressions
console.log(calculate('3 + 4'));    
console.log(calculate('3 - 4'));    
