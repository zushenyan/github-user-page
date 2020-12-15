import React from 'react';

import styles from './Spinner.module.css';

export default function Spinner(): JSX.Element {
  return (
    <div className={styles['spinner']}>
      <div />
      <div />
      <div />
    </div>
  );
}
