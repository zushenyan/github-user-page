import React from 'react';

import styles from './SearchUsersLayout.module.css';

export type Props = {
  top: React.ReactNode;
  middle: React.ReactNode;
  bottom: React.ReactNode;
};

export default function SearchUsersLayout({
  top,
  middle,
  bottom,
}: Props): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['top']}>{top}</div>
      <div className={styles['middle']}>{middle}</div>
      <div className={styles['bottom']}>{bottom}</div>
    </div>
  );
}
