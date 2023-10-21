import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast/reducer';
import userReducer from './user/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
