"use strict"

// Практика JS 20

let types = new function(a){
    this.boolean = new Array();
    this.number = new Array();
    this.string = new Array();
    a = [1, 2, 'a', 'b', true, false];
    a.forEach(item => {
        if(typeof(item) === "boolean"){
            this.boolean.push(item);
        }
        else if(typeof(item) === "number"){
            this.number.push(item);
        }
        else if (typeof(item) === "string"){
            this.string.push(item);
        }
    });
}
console.log(types);