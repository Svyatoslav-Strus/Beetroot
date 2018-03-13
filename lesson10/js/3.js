"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

findTheBiggestSalary(salaries);

function findTheBiggestSalary(salaries) {
    var biggest = 0;

    for (var key in salaries) {
        if (salaries[key] > biggest) {
            biggest = salaries[key];
        }
    }

    alert(biggest);
}

// ... ваш код выведет "Петя"