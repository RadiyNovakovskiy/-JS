"use strict"

// Практика JS 8

function finalGrade(examMark, projectCount){
    let mark = 0;
    if(examMark > 90 || projectCount > 10){
        mark = 100;
    }
    else if(examMark > 75 || projectCount > 5){
        mark = 90;
    }
    else if(examMark > 50 || projectCount > 2){
        mark = 75;
    }
    else{
        mark = 0;
    }
    return mark;
}

alert("Ваша оценка: " + finalGrade(100, 12));
alert("Ваша оценка: " + finalGrade(99, 0));
alert("Ваша оценка: " + finalGrade(10, 15));
alert("Ваша оценка: " + finalGrade(85, 5));
alert("Ваша оценка: " + finalGrade(55, 3));
alert("Ваша оценка: " + finalGrade(55, 0));
alert("Ваша оценка: " + finalGrade(20, 2));
