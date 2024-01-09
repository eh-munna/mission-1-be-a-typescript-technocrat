{
  //  * destructuring

  const user = {
    id: 123,
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };
  const { id } = user;

  const {
    name: { firstName },
  } = user;
  console.log(firstName);

  const friends: string[] = ['john', 'doe', 'alexander', 'butler'];

  const [, , bestFriend, ,] = friends;
  console.log(bestFriend);
}
