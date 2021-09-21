"use strict"

// Практика JS 16

const getLongWords = (words, n) => words.split(' ').filter(word => word.length > n);

alert(getLongWords('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5));
alert(getLongWords('Над городом облака, коридоры, берега, проспект, река.', 7));