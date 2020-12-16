import React from 'react';

import styles from './Theme.module.css';

export type Props = {
  theme: 'white-theme' | 'black-theme';
  onChangeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

export default function Theme({
  theme,
  onChangeTheme,
  children,
}: Props): JSX.Element {
  const className = [styles['wrapper'], styles[theme]].join(' ');
  return (
    <div className={className}>
      {children}
      <label className={styles['toggle']}>
        <span className={styles['label']}>Dark Mode</span>
        <input
          className={styles['input']}
          type="checkbox"
          onChange={onChangeTheme}
        />
      </label>
    </div>
  );
}
