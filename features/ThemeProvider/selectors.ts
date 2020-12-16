import { createSelector } from '@reduxjs/toolkit';

import { getState } from '../../store/root';

export const getTheme = createSelector(getState, (s) => s.theme.theme);
