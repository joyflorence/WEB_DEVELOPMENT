function calculateGrade(score) {
    try {
        // Check if the input is a valid number
        if (isNaN(score) || !isFinite(score) || score < 0 || score > 100) {
            throw new Error('Invalid input. Please provide a valid score between 0 and 100.');
        }

        // Calculate the grade based on the score
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    } catch (error) {
        // Handle errors and return an error message
        return 'Error: ' + error.message;
    }
}

// Test the calculateGrade function with various scores
console.log(calculateGrade(95));    // Output: A
console.log(calculateGrade(83));    // Output: B
console.log(calculateGrade(75));    // Output: C
console.log(calculateGrade(62));    // Output: D
console.log(calculateGrade(45));    // Output: F
console.log(calculateGrade("abc")); // Output: Error: Invalid input. Please provide a valid score between 0 and 100.
