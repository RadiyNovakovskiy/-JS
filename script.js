"use strict"

// Практика JS 18

function spacey(a){
    let arr = new Array();
    arr.push(a[0]);
    for (let i=0; i<a.length-1; i++) {
        arr.push(a[0] += a[i+1]);
    }
    return arr;
}

alert(spacey(['kevin', 'has','no','space']));
alert(spacey(['this','cheese','has','no','holes']));