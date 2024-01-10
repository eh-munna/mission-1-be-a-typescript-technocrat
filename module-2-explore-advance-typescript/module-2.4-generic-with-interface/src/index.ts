{
  //? Generics with interface

  interface Vehicle<T, D = null> {
    countryOfOrigin: string;
    typeOfVehicle: {
      name: string;
      model: string;
      year: number;
    };
    details: T;
    display?: D;
  }

  type Car = {
    engine: string;
    tyreType: string;
  };

  const car: Vehicle<
    {
      engine: string;
      tyreType: string;
    },
    null
  > = {
    countryOfOrigin: 'Germany',
    typeOfVehicle: {
      name: 'audi',
      model: 'fast',
      year: 2023,
    },
    details: {
      engine: 'BMW',
      tyreType: 'slow',
    },
  };

  interface Car2 {
    engine: string;
    tyreType: string;
    instantBreak: boolean;
  }

  type Display = {
    name: string;
    isCleaned: boolean;
  };
  const car2: Vehicle<Car2, Display> = {
    countryOfOrigin: 'Netherlands',
    typeOfVehicle: {
      name: 'porsche',
      model: 'faster',
      year: 2015,
    },
    details: {
      engine: 'OL',
      tyreType: 'very slow',
      instantBreak: true,
    },
    // display:{
    //   name:
    // }
  };
}
