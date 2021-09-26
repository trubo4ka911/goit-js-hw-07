'use strict';

const counterPlaceHolder = document.getElementById("value");
const btnIncrement = document.querySelector('[data-action="increment"]');

btnIncrement.classList = ('increment');

const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.classList = ('decrement');

let number = 0;

function changeColor(number){
    let color = "";
    
    switch (true) {
        case(number < 0):
        color = "red";
        break;
    
        case(number > 0):
        color = "green";
        break;
    
        default: 
        color = "black";
    } 
    return color;
}

btnIncrement.addEventListener("click", function(){
    number +=1;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function(){
    number -=1;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});