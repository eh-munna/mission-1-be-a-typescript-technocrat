{
  // * ternary-operator
  // * optional chaining
  // * nullish coalescing operator

  // * ternary-operator

  const age: number = 17;
  const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
  // console.log({ isAdult });

  // * nullish coalescing operator

  const isUser = null;
  const isAdmin = undefined;
  const result = isUser ?? 'Not a user';
  const result2 = isAdmin ?? 'Not an admin';
  console.log({ result });
  console.log({ result2 });
}
