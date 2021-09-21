"use strict"

// Практика JS 6

let array = ["10", "20", "30", "255", "3000"];
let arr = [];

alert("Начальный массив: " + array);

array.forEach(item => {
    if(item.startsWith('1') || item.startsWith('2') || item.startsWith('5')){
        arr.push(item);
    }    
});
alert("Итоговый массив: " + arr);


