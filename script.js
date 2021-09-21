"use strict"

// Практика JS 14

const remove = (string, n) => string.replace(/!/g, match => n --> 0 ? '' : match);

alert(remove("Hi!", 1));
alert(remove("Hi!",100));
alert(remove("Hi!!!",1));
alert(remove("Hi!!!",100));
alert(remove("!Hi",1));
alert(remove("!Hi!",1));
alert(remove("!Hi!",100));
alert(remove("!!!Hi !!hi!!! !hi",1));
alert(remove("!!!Hi !!hi!!! !hi",3));
alert(remove("!!!Hi !!hi!!! !hi",5));
alert(remove("!!!Hi !!hi!!! !hi",100));