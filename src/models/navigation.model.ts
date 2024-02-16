// Model
import {ISingleNews} from './news.model';

export type RootStackParamList = {
  BottomNavigation: undefined;
  SingleNews: {title: string};
};

export type BottomTabParamList = {
  News: undefined;
  Settings: undefined;
};
