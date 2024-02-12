// Model
import {ISingleNews} from './news.model';

export type RootStackParamList = {
  BottomNavigation: undefined;
  SingleNews: {data: ISingleNews};
};

export type BottomTabParamList = {
  News: undefined;
  Settings: undefined;
};
