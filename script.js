"use strict"

// Практика JS 17

const divisibleByThree = (number) => (number.split('').reduce((a, b) => parseInt(a)+parseInt(b))) % 3 == 0 ? true : false;

alert(divisibleByThree('19254'));
alert(divisibleByThree('123'));
alert(divisibleByThree('88'));
alert(divisibleByThree('1'));