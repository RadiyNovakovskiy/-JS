"use strict"

// Практика JS 21

const replaceSymbol = (string) => string.replace(/[ab]/g, function($1) { return $1 === 'a' ? 'b' : 'a' });

alert(replaceSymbol('abc'));
alert(replaceSymbol('aaabcccbaaa'));
alert(replaceSymbol('aabacbaa'));
alert(replaceSymbol('ccccc'));