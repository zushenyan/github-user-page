import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Theme from '../../components/Theme';

import slice from './slice';
import { getTheme } from './selectors';

export type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const dispatch = useDispatch();

  const theme = useSelector(getTheme);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? 'black-theme' : 'white-theme';
    dispatch(slice.actions.setTheme(theme));
  };

  return (
    <Theme theme={theme} onChangeTheme={handleToggle}>
      {children}
    </Theme>
  );
}
