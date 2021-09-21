"use strict"

// Практика JS 5

let firstNumber = +prompt("Введите первое число: ");
let secondNumber = +prompt("Введите второе число: ");

if(firstNumber > secondNumber){
    alert(+firstNumber + +secondNumber);
}
else if(firstNumber < secondNumber){
    alert(secondNumber - firstNumber);
}
else{
    alert("Числа одинаковые!");
}

