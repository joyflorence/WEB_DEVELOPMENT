function myFunction() {
    try { 
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(error) {
       return 'error: ' + error.message;
    }
}

function myFunction(hour){
    let time = eval(hour)
    if (time < 12){
        greeting = 'Good morning'
        return greeting
    } else {
        greeting = 'good evening'
        return greeting
    }
}
console.log(myFunction(17))
