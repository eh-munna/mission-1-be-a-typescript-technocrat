{
  // ? Type Assertion | Type Narrowing
  // * specifying the type with the help of assertions

  let value: any;

  value = 'This is a string';

  //   (value as number).

  const calcAge = (birthYear: string | number): string | number | undefined => {
    if (typeof birthYear === 'string') {
      return 2024 - parseFloat(birthYear);
    }
    if (typeof birthYear === 'number') {
      return 2024 - birthYear;
    }
  };

  const resultNum = calcAge(1992) as number;
  console.log({ resultNum }, typeof resultNum);
  const resultStr = calcAge('1992') as string;
  console.log({ resultStr }, typeof resultStr);

  type Error = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as Error).message);
  }
}
