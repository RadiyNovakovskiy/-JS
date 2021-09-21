"use strict"

// Практика JS 12

const between = (start, end) => Array(end - start + 1).fill().map((a, index) => start + index);

alert(between(1, 4));
alert(between(-2, 2));
alert(between(20, 25));