import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from './reducer';

export const store = configureStore({
  reducer: {
    news: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
