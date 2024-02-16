import {configureStore} from '@reduxjs/toolkit';

// Slices
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
