import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  styles: {
    bg: string;
  };
}

export default createSlice({
  name: 'global',
  initialState: {
    styles: {
      bg: 'gray',
    },
  } as InitialState,
  reducers: {},
});
