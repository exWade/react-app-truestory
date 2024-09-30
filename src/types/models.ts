export interface ICard {
  id?: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  description: string;
  place: string;
  year: number;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
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

export interface IContext {
  theme: string | undefined;
  toggleTheme: () => void | undefined;
}

export interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;

  modalCreate: boolean;
  openCreate: () => void;
  closeCreate: () => void;
  
}

export interface AccountAbout {
  residence: AccountResidence;
  job: string;
  age: number;
}

export interface AccountResidence {
  city: string;
  country: string;
}
