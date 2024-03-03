const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");

let myage;
mysubmit.onclick = function(){
    myage = mytext.value;
    myage = Number(myage);
    if(myage>=35){
        resultelement.textContent = `Too old to access`;
    }
    else if(myage==0){ 
        resultelement.textContent = `Cannot be zero`;
    }
    else if(myage>=18){
        resultelement.textContent = `Old enough`;
    }
    else if(myage<0){
        resultelement.textContent = `Cannot be below zero`;
    }
    else{
        resultelement.textContent = `Must be 18+`;
    }
}


