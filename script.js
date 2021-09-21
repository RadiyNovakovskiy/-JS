"use strict"

// Практика JS 10

const unwantedNames = ["Дима", "Саша", "Ольга", "Никита"];

const deleteNames = (array) => array = array.filter(item => !unwantedNames.includes(item));

console.log(deleteNames(['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга', ]));
console.log(deleteNames(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга', ]));
console.log(deleteNames(['Алишер', 'Ольга', ]));