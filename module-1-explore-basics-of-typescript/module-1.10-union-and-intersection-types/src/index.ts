{
  //  ? union - intersection for typescript
  // * union type

  type Agent = {
    name: string;
    age: number;
    gender: 'Male' | 'Female';
    bloodType?: 'A(+ve)' | 'A(-ve)' | 'B(+ve)' | 'B(-ve)';
  };

  const agent1: Agent = {
    name: 'David',
    age: 36,
    gender: 'Male',
  };

  const agent2: Agent = {
    name: 'Maximilian',
    age: 30,
    // !gender: 'Femal',
    // ! Type '"Femal"' is not assignable to type '"Male" | "Female"'.
    gender: 'Female',
  };

  // * intersection type

  type Basic = {
    bachelor: string;
    passport: boolean;
  };
  type Advanced = {
    experience: '2 years';
  };

  type Qualified = Basic & Advanced;

  const seniorPilot: Qualified = {
    bachelor: 'passed',
    passport: true,
    experience: '2 years',
  };
}
