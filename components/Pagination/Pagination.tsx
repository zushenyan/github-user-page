import React from 'react';

import styles from './Pagination.module.css';

export type Props = {
  currentPage: number;
  totalPage: number;
  onClickNext: () => void;
  onClickPrev: () => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
};

export default function Pagination({
  currentPage,
  totalPage,
  onClickNext,
  onClickPrev,
  nextDisabled,
  prevDisabled,
}: Props): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <button
        className={styles['button']}
        onClick={onClickPrev}
        disabled={prevDisabled}
      >
        &lt;
      </button>
      <div className={styles['text']}>
        {currentPage} of {totalPage}
      </div>
      <button
        className={styles['button']}
        onClick={onClickNext}
        disabled={nextDisabled}
      >
        &gt;
      </button>
    </div>
  );
}
