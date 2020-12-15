import { createSelector } from '@reduxjs/toolkit';

import { getState } from '../../store/root';

export const PER_PAGE = 10;

export const getInputValue = createSelector(
  getState,
  (s) => s.users.inputValue
);

export const getCurrentPage = createSelector(
  getState,
  (s) => s.users.currentPage
);

export const getUsers = createSelector(getState, (s) => s.users.data?.items);

export const getTotalCounts = createSelector(
  getState,
  (s) => s.users.data?.total_count || 0
);

export const getTotalPage = createSelector(
  getState,
  getTotalCounts,
  (s, totalCounts) => Math.ceil(totalCounts / PER_PAGE)
);

export const getStatus = createSelector(getState, (s) => s.users.status);

export const getShowBottom = createSelector(
  getTotalPage,
  getStatus,
  (t, s) => t > 1 || s === 'success'
);

export const getNextDisabled = createSelector(
  getCurrentPage,
  getTotalPage,
  (c, t) => c + 1 >= t
);

export const getPrevDisabled = createSelector(
  getCurrentPage,
  (c) => c - 1 <= 0
);
