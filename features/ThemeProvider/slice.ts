import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ThemeType = 'white-theme' | 'black-theme';

export interface InitialState {
  theme: ThemeType;
}

export default createSlice({
  name: 'theme',
  initialState: {
    theme: 'white-theme',
  } as InitialState,
  reducers: {
    setTheme: (s, a: PayloadAction<ThemeType>) => {
      s.theme = a.payload;
    },
  },
});
