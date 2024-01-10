{
  //? Constraints in TypeScript

  // * add any kind of data to the function but there must be some constraints

  interface Constraint {
    name: string;
    email: string;
  }

  const users = <T extends Constraint>(userDetails: T) => {
    const isUser = true;
    return {
      ...userDetails,
      isUser,
    };
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
