"use strict"

// Практика JS 15

const maxDiff = (mass) =>  mass.length <=1 ? 0 : Math.max(...mass) - Math.min(...mass);

alert(maxDiff([0, 1, 2, 3, 4, 5, 6]));
alert(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
alert(maxDiff([0, 1, 2, 3, 4, 5, 16]));
alert(maxDiff([16]));
alert(maxDiff([]));