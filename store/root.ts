import { combineReducers, createSelector } from '@reduxjs/toolkit';

import homeSlice from '../features/Home/slice';
import themeSlice from '../features/ThemeProvider/slice';

const rootReducer = combineReducers({
  users: homeSlice.reducer,
  theme: themeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// selectors
export const getState = createSelector(
  (s: RootState) => s,
  (v) => v
);
