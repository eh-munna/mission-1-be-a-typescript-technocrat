"use strict";
{
    //? Function with Generics
    // * function returns a string array
    const myFunc = (value) => {
        return [value];
    };
    const result = myFunc('My Function');
    // * function returns generic
    const genericFunc = (value) => {
        return [value];
    };
    const resultGeneric = genericFunc('Generic Function');
    const resultGenericNumber = genericFunc(123);
    const genericFuncObj = genericFunc({
        id: 123,
        name: 'Generic Function',
    });
    // * function with tuple
    const genericTupleFunc = (value1, value2) => {
        return [value1, value2];
    };
    const resultTuple = genericTupleFunc('Mr. Smith', 123);
    // * add type any kind of type to the function
    const users = (userDetails) => {
        const isUser = true;
        return Object.assign(Object.assign({}, userDetails), { isUser });
    };
    const user1 = users({ name: 'John Smith', email: 'john@smith.com' });
    const user2 = users({
        name: 'Will Smith',
        email: 'will@smith.com',
        hasOwnPassword: true,
    });
    console.log(user1);
    console.log(user2);
}
