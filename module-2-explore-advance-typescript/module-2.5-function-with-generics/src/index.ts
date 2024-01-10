{
  //? Function with Generics

  // * function returns a string array
  const myFunc = (value: string): string[] => {
    return [value];
  };
  const result = myFunc('My Function');

  // * function returns generic

  const genericFunc = <T>(value: T): T[] => {
    return [value];
  };

  const resultGeneric = genericFunc<string>('Generic Function');
  const resultGenericNumber = genericFunc<number>(123);

  // * function receiving object

  interface Params {
    id: number;
    name: string;
  }

  const genericFuncObj = genericFunc<Params>({
    id: 123,
    name: 'Generic Function',
  });

  // * function with tuple

  const genericTupleFunc = <T, Q>(value1: T, value2: Q): [T, Q] => {
    return [value1, value2];
  };

  const resultTuple = genericTupleFunc<string, number>('Mr. Smith', 123);

  // * add type any kind of type to the function

  const users = <T>(userDetails: T) => {
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
