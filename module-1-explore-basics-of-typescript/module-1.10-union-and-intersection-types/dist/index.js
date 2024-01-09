"use strict";
{
    const agent1 = {
        name: 'David',
        age: 36,
        gender: 'Male',
    };
    const agent2 = {
        name: 'Maximilian',
        age: 30,
        // !gender: 'Femal',
        // ! Type '"Femal"' is not assignable to type '"Male" | "Female"'.
        gender: 'Female',
    };
    const seniorPilot = {
        bachelor: 'passed',
        passport: true,
        experience: '2 years',
    };
}
