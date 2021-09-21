"use strict"

// Практика JS 11

const difference = (arr1, arr2) => (arr1.reduce((a, b) => a*b))-(arr2.reduce((a, b) => a*b));

alert(difference([3, 2, 5], [1, 4, 4]));
alert(difference([9, 7, 2], [5, 2, 2]));
alert(difference([11, 2, 5], [1, 10, 8]));
alert(difference([4, 4, 7], [3, 9, 3]));
alert(difference([15, 20, 25], [10, 30, 25]));