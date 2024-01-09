{
  // *? What we will learn :
  // * rest operator
  // * spread operator
  // * destructuring

  // ** spread operator

  const users1: string[] = ['john', 'fred', 'alexander'];
  const users2: string[] = ['smith', 'felix', 'graham'];

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

  const allStudents = { ...stdList1, ...stdList2 };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };
  greetFriends(...users1, ...users2);
}
