"use strict";
{
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
