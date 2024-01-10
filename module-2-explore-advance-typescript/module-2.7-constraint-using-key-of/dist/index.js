"use strict";
{
    // * passing string literals union type as key of the object to the function
    const user = {
        name: 'John',
        age: 36,
        hasOwnProperty: true,
    };
    const user2 = {
        name: 'John',
        age: 36,
        address: 'Berlin',
    };
    const getKey = (myObj, myKey) => {
        return myObj[myKey];
    };
    const result1 = getKey(user, 'name');
    // !Argument of type '"call"' is not assignable to parameter of type '"name" | "age" | "hasOwnProperty"'
    // * const result2 = getKey(user1, 'call');
    const result2 = getKey(user2, 'address');
}
