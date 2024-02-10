import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  news: any[];
}

const initialState: AppState = {
  news: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<any[]>) => {
      state.news = action.payload;
    },
  },
});

export const {} = appSlice.actions;
export default appSlice.reducer;
