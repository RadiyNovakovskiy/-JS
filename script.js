"use strict"

// Практика JS 4

let array = ["Саша", "Петя", "Оксана"];

console.log("Исходный массив: " + array);

let reverse_array = array.slice().reverse();
reverse_array.splice(1,1,"Олег");

console.log("Измененный массив: " + reverse_array);
console.log("Исходный массив: " + array);

array[0] = "Оксана";
array[1] = "Олег";
array[2] = "Саша";

console.log("Измененный массив: " + array);
