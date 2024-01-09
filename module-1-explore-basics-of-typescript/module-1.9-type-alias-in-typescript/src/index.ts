{
  //  * type aliases for typescript

  type Agent = {
    name: string;
    age: number;
    address: string;
    gender: string;
    contact?: string;
    isActive: boolean;
  };

  const agent1: Agent = {
    name: 'John Smith',
    age: 23,
    address: 'Berlin Street',
    gender: 'Male',
    isActive: true,
  };
  const agent2: Agent = {
    name: 'Sophie Miller',
    age: 34,
    gender: 'Female',
    address: 'Paris Street',
    contact: '0100000',
    isActive: true,
  };

  // * custom type aliases for typescript

  type UserName = string;
  type IsChecked = boolean;

  const userName: UserName = 'Random Name';
  const verification: IsChecked = false;

  // const add: NumberType = (a, b) => {
  //   a + b;
  // };

  type Add = (value1: number, value2: number) => number;

  const add: Add = (a, b) => {
    return a + b;
  };
}
