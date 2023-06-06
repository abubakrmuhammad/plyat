import { FirebaseApp } from 'firebase/app';
import { Timestamp } from 'firebase/firestore';
import { tournamentCategories } from './helpers';

export type RootNavStackParamList = {
  Home: undefined;
  GamingZones: undefined;
  Blogs: undefined;
  Tournaments: undefined;
  GamingZoneDetail: { id: string };
  BlogDetail: { id: string };
  TournamentDetail: { id: string };
  Drawer: undefined;
};

export interface GamingZone {
  id: string;
  name: string;
  description: string;
  bannerName: string;
  iconName: string;
  isLiked: boolean;
  rate: number;
  timing: string;
  specs: string;
  address: string;
  phone: string;
  mapLink: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  tags: string[];
  mdName: string;
  bannerName: string;
  publishedDate: Timestamp;
  readMoreLink: string;
}

export interface BlogWithImageURL extends Exclude<Blog, 'bannerName'> {
  imageURL: string;
}

export interface Tournament {
  id: string;
  title: string;
  description: string;
  categories: TournamentCategoryId[];
  bannerName: string;
  iconName: string;
  eventDate: Timestamp;
  registrationEndDate: Timestamp;
  isLiked: boolean;
  prize: number;
  location: string;
  registrationLink: string;
}

export interface TournamentWithImageURL
  extends Exclude<Tournament, 'bannerName'> {
  imageURL: string;
}

export type TournamentCategoryId = (typeof tournamentCategories)[number]['id'];

