const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isActive: boolean;
  university: 'Somewhere'; // type string literal
} = {
  university: 'Somewhere',
  firstName: 'John',
  lastName: 'Doe',
  isActive: false,
};
