function calculateGrade(score) {
    try {
        // Check if the input is a valid number
        //The logical OR ( || )  operator for a set of operands is true if and only if one or more of its operands is true.
        if (isNaN(score) || !isFinite(score) || score < 0 || score > 100) {
            throw new Error('Invalid input!');
        }
        if(score>=90){
            return 'A'; 
        }else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    } catch (error) {
       
        return 'Error: ' + error.message;
    }
}

// Test the calculateGrade function with various scores
console.log(calculateGrade('abc'));

