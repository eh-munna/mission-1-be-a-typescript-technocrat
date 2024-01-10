{
  //? Constraint using key of
  /*
  
  * when we need to define a string literal union type with the keys of another type,
  * we will use the keyof operator
  * it will take the keys from the source type, and will be assigned to the new type as string literal union type
  
  */

  type User = {
    name: string;
    email: string;
  };

  // * now making a new string literal union type from the source type but manually

  type UserStrLiteralUnion = 'name' | 'email'; // manually

  // * now making a new string literal union type from the source type
  type UserStrLiteral = keyof User;

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

  const getKey = <DynamicObj, DynamicKey extends keyof DynamicObj>(
    myObj: DynamicObj,
    myKey: DynamicKey
  ) => {
    return myObj[myKey];
  };

  const result1 = getKey(user, 'name');

  // !Argument of type '"call"' is not assignable to parameter of type '"name" | "age" | "hasOwnProperty"'
  // * const result2 = getKey(user1, 'call');
  const result2 = getKey(user2, 'address');
}
