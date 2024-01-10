{
  //? introduction-to-generics
  // type Generic = Array<string>;
  // type Generic = Array<number>;
  // type Generic = Array<boolean>;
  // * Dynamic Generics
  type Generic<T> = Array<T>;
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
  const userStr: Generic<string> = ['a', 'b', 'c', 'd', 'e'];
  const userNum: Generic<number> = [1, 2, 3, 4, 5, 6];
  const boolArr: Generic<boolean> = [true, false, false, true, false];

  // * Generic with array of objects

  const users: Generic<{ name: string; age: number }> = [
    {
      name: 'John',
      age: 36,
    },
    {
      name: 'Smith',
      age: 24,
    },
  ];
  // * Generic with Tuple

  type GenericTuple<X, Y> = [X, Y];

  const couple: GenericTuple<string, string> = ['Mr. Smith', 'Ms. Smith'];

  // * Generic with Tuple with object

  const user: GenericTuple<number, { name: string; age: number }> = [
    123,
    { name: 'John', age: 12 },
  ];
}
