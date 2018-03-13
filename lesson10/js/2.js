"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

sum(salaries);

function sum(salaries){
    var result = 0;

    for (var key in salaries) {
        result += salaries[key];
    }

    alert(result);
}
//... ваш код выведет 650