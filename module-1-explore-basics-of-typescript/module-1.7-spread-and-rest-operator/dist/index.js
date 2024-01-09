"use strict";
{
    // *? What we will learn :
    // * rest operator
    // * spread operator
    // * destructuring
    // ** spread operator
    const users1 = ['john', 'fred', 'alexander'];
    const users2 = ['smith', 'felix', 'graham'];
    // * const allUsers: string[] = [...users1, ...users2];
    /*
  
    ! users1.push(users2);
  
    ! Argument of type 'string[]' is not assignable to parameter of type 'string'.
    
    */
    users1.push(...users2);
    const stdList1 = {
        biology: 'john',
        chemistry: 'fred',
        math: 'alexander',
    };
    const stdList2 = {
        dataStructure: 'smith',
        physics: 'felix',
        computerScience: 'graham',
    };
    const allStudents = Object.assign(Object.assign({}, stdList1), stdList2);
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends(...users1, ...users2);
}
