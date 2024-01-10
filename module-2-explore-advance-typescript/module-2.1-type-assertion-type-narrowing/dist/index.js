"use strict";
{
    // ? Type Assertion | Type Narrowing
    // * specifying the type with the help of assertions
    let value;
    value = 'This is a string';
    //   (value as number).
    const calcAge = (birthYear) => {
        if (typeof birthYear === 'string') {
            return 2024 - parseFloat(birthYear);
        }
        if (typeof birthYear === 'number') {
            return 2024 - birthYear;
        }
    };
    const resultNum = calcAge(1992);
    console.log({ resultNum }, typeof resultNum);
    const resultStr = calcAge('1992');
    console.log({ resultStr }, typeof resultStr);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
