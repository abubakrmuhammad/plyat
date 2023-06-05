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
