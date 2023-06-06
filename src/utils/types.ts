import { FirebaseApp } from 'firebase/app';
import { Timestamp } from 'firebase/firestore';

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

