{
  // * nullable types

  const getSearchResult = (value: string | null) => {
    if (value) {
      console.log(`Searching for {${value}}`);
    } else {
      console.log(`Not found`);
    }
  };

  getSearchResult('hello');

  // * unknown types

  const handleUnknown = (value: unknown) => {
    if (typeof value === 'string') {
      console.log(`The {${value}} is s string type`);
    } else if (typeof value === 'number') {
      console.log(`The {${value}} is s number type`);
    } else {
      console.log(`No type found`);
    }
  };

  handleUnknown(null);

  // * never types

  const handleError = (message: string): never => {
    throw new Error(message);
  };

  handleError('An unknown error occurred');
}
