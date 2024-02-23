//declaration
let phones = 10;
// initialiation
phones = 10;
//update
phones = 0;


//DATATYPES
//string
let greeting = "goodmorning"
let first_name = "Jane"
let last_name = "Precious"
console.log(greeting +' '+ first_name +' '+ last_name) // string concatenation
console.log(`${greeting },${first_name } ${last_name} `) // string concatenation

//variable naming using camelcase each except for the first starts with a capital letters
    //myVariableName
    //camelCase
    //calculateTotalAmount

//boolean
let isplaying = false;
let is_student = true;

//NULL
let student = null;
student = "Joy"

//undefined
let fullname;
console.log(fullname)

    //defined
    let full_name;
    full_name = "Florence"
    console.log(full_name)

//OBJECTS
let student_n = {};
student_n = {
    fname:"jane", // key(fname) and value(jane) (key-value pairs)
    lname:"Awio",
    access_no:"S345",
    parent: {
        fullna:"Luke",
        country: "sudean"
    }
}
console.log(student_n)
console.log("The first name is:",student_n.fname)
console.log("The last name is:",student_n.lname)
console.log("District:",student_n.district) //(Undefined)
console.log("fullname:",student_n.parent.fullna) //(Undefined)
console.log("country:",student_n.parent.country) //(Undefined)

