function grade(score){
    try{
       
    if(score<0){
        throw new Error('Score cannot be less than zero');
    }if(score>100){
        throw new Error('Score cannot be greater than 100');
    }
    if (score>=90){
        return 'A';
    }else if(score>=80){
        return 'B';
    }else if(score>=70){
        return 'C';
    }else if(score>=60){
        return 'D';
    }else{
        return 'F';
    }  
} catch(error){
    return 'error ' + error.message;
}
}
console.log(grade(90));

