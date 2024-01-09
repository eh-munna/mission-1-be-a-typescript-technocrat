"use strict";
// function literal
function add(value1, value2) {
    return value1 + value2;
}
add(2, 2);
// arrow function
const add2 = (value1, value2) => value1 + value2;
add2(4, 2);
const salary = {
    employee: 'John',
    currentBalance: 200,
    calcSalary(newSalary) {
        return this.currentBalance + newSalary;
    },
};
