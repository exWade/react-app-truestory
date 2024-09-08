export interface ICard {
    id?: number;
    order: number;
    title: string;
    image: string;
    description: string;
    city: string;
    year: number;
  }
  
  export interface IAccount {
    nickname: string;
    firstName: string;
    photo: string;
    status: string;
    about: AccountAbout;
    backgroundImage: string;
    cardsCount: number;
    followersCount: number;
    followingCount: number;
  }
  
  interface AccountAbout {
    residence: AccountResidence;
    job: string;
    age: number;
  }
  
  interface AccountResidence {
    city: string;
    country: string;
  }
  
  
//   interface СertainLang {
//     en: any;
//     tk: any;
//     rs: any;
//   }
  
//   export interface ILangs {
//     search: any;
//     about: any;
//     countersCards: any;
//     countersFollowers: any;
//     countersFollowing: any;
//     creatingUnit: any;
//     creatingTitle: any;
//     creatingUrl: any;
//     creatingDescription: any;
//     creatingPlace: any;
//     creatingYear: any;
//   }
  