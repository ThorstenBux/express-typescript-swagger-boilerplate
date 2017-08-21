import { Hero, HeroModelMongo } from "./model/hero";

// export const HEROES: Hero[] = [
//   { heroId: 11, name: "Mr. Nice", id: "1" },
//   { heroId: 12, name: "Narco", id: "2"  },
//   { heroId: 13, name: "Bombasto", id: "3"  },
//   { heroId: 14, name: "Celeritas", id: "4"  },
//   { heroId: 15, name: "Magneta", id: "5"  },
//   { heroId: 16, name: "RubberMan", id: "6"  },
//   { heroId: 17, name: "Dynama", id: "7"  },
//   { heroId: 18, name: "Dr IQ", id: "8" },
//   { heroId: 19, name: "Magma", id: "9"  },
//   { heroId: 20, name: "Tornado", id: "10"  }
// ];

const mongoHero = new HeroModelMongo({heroId: 1, name: "Mongoose"});
const mongoHero2 = new HeroModelMongo({heroId: 2, name: "Hedgehogs"});
const mongoHero3 = new HeroModelMongo({heroId: 3, name: "Dingo"});

export const HEROES: Hero[] = [
    mongoHero, mongoHero2, mongoHero3
];