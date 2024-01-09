// function literal

function add(value1: number, value2: number): number {
  return value1 + value2;
}

add(2, 2);

// arrow function

const add2 = (value1: number, value2: number): number => value1 + value2;
add2(4, 2);

const salary = {
  employee: 'John',
  currentBalance: 200,
  calcSalary(newSalary: number): number {
    return this.currentBalance + newSalary;
  },
};
