import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  news: any[];
  searchText: string;
  language: 'en' | 'es' | '';
  mode: 'light' | 'dark';
  totalResults: number;
}

const initialState: AppState = {
  news: [],
  searchText: '',
  language: '',
  mode: 'light',
  totalResults: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<any[]>) => {
      state.news = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setLanguage: (state, action: PayloadAction<'en' | 'es'>) => {
      state.language = action.payload;
    },
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
});

export const {setNews, setSearchText, setTotalResults, setLanguage, setMode} =
  appSlice.actions;
export default appSlice.reducer;
