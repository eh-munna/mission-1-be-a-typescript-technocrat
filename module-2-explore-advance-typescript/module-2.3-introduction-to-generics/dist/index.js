"use strict";
{
    // * normal
    // const userStr: string[] = ['a', 'b', 'c', 'd', 'e'];
    // const userNum: number[] = [1, 2, 3, 4, 5, 6];
    // const boolArr: boolean[] = [true, false, false, true, false];
    // * without generics
    // const userStr: Array<string> = ['a', 'b', 'c', 'd', 'e'];
    // const userNum: Array<number> = [1, 2, 3, 4, 5, 6];
    // const boolArr: Array<boolean> = [true, false, false, true, false];
    // * with generics
    // const userStr: Generic = ['a', 'b', 'c', 'd', 'e'];
    // const userNum: Generic = [1, 2, 3, 4, 5, 6];
    // const boolArr: Generic = [true, false, false, true, false];
    // * dynamic generics
    const userStr = ['a', 'b', 'c', 'd', 'e'];
    const userNum = [1, 2, 3, 4, 5, 6];
    const boolArr = [true, false, false, true, false];
    // * Generic with array of objects
    const users = [
        {
            name: 'John',
            age: 36,
        },
        {
            name: 'Smith',
            age: 24,
        },
    ];
    const couple = ['Mr. Smith', 'Ms. Smith'];
    // * Generic with Tuple with object
    const user = [
        123,
        { name: 'John', age: 12 },
    ];
}
