import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as usersApis from '../../lib/apis/users';

export const fetchUsers = createAsyncThunk(
  'global/getUsers',
  async (params: { keyword: string; page: number; perPage: number }) =>
    usersApis.searchUsers(params)
);

export interface InitialState {
  inputValue: string;
  lastSearchValue: string;
  currentPage: number;
  status: 'ready' | 'loading' | 'success' | 'error';
  data?: usersApis.SearchUsersResponse;
  error?: string;
}

export default createSlice({
  name: 'global',
  initialState: {
    inputValue: '',
    lastSearchValue: '',
    currentPage: 1,
    status: 'ready',
  } as InitialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setLastSearchValue: (state, action: PayloadAction<string>) => {
      state.lastSearchValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.error = undefined;
      state.status = 'loading';
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = 'oops';
      state.status = 'error';
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<usersApis.SearchUsersResponse>) => {
        state.error = undefined;
        state.data = action.payload;
        state.status = 'success';
      }
    );
  },
});
