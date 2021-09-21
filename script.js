"use strict"

// Практика JS 19

const evensAndOdds = (numm) => numm % 2 === 0 ? numm.toString(2) : numm.toString(16); 

alert(evensAndOdds(2));
alert(evensAndOdds(13));