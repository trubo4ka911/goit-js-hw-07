const counterPlaceHolder = document.getElementById("value");
const btnIncrement = document.querySelector('[data-action="increment"]');

btnIncrement.classList = ('increment');

const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.classList = ('decrement');

let number = 0;

function changeColor(number){
    let color = "";
    if(number < 0 ){
        color = "red";
    }else if (number > 0 ){
        color = "green";
    }else{
        color="black";
    }
    return color;
}

btnIncrement.addEventListener("click", function(){
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function(){
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});