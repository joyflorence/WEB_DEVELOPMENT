function greetUser(name) {
    console.log("Good Afternoon, " + name);
}
greetUser("John");




function calculatemodo(num1, num2) {
    return num1 % num2 ;
}

var result = calculatemodo(10, 4);
console.log(result); 

// PRODUCT
// function calculateProduct(num1, num2, num3) {
//     return num1 * num2 * num3;
// }
// var result = calculateProduct(3, 7, 5);
// console.log(result); 

// //SMALLEST NUM
// function findSmallestNumber(numbers) {
//     if (numbers.length === 0) {
//         return null; 
//     }

//     var smallest = numbers[0]; 

//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//     }

//     return smallest;
// }

// var numbers = [5, 2, 8, 1, 9];
// var result = findSmallestNumber(numbers);
// console.log(result); 

// //LARGEST NUMBER
// function findLargestNumber(numbers) {
//     if (numbers.length === 0) {
//         return null; // Return null if the array is empty
//     }

//     var largest = numbers[0]; // Assume the first number is the largest

//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i]; // Update the largest number
//         }
//     }

//     return largest;
// }

// var numbers = [5, 2, 8, 1, 9];
// var result = findLargestNumber(numbers);
// console.log(result); 