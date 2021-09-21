"use strict"

// Практика JS 7

let weight = prompt("Введите ваш вес: ");
let recomendation = "";

if(weight < 4){
    recomendation = "Вам пора перекусить";
}
else if(weight >= 4 && weight <= 5.5 ){
    recomendation = "Ваш вес в норме";
}
else{
    recomendation = "Вам пора на тренировку";
}

alert(recomendation);
