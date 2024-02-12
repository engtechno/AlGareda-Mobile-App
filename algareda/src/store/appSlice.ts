import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  news: any[];
  searchText: string;
  totalResults: number;
}

const initialState: AppState = {
  news: [],
  searchText: '',
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
  },
});

export const {setNews, setSearchText, setTotalResults} = appSlice.actions;
export default appSlice.reducer;
