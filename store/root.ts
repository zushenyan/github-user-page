import { combineReducers, createSelector } from '@reduxjs/toolkit';

import slice from '../features/Home/slice';

const rootReducer = combineReducers({
  users: slice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// selectors
export const getState = createSelector(
  (s: RootState) => s,
  (v) => v
);
