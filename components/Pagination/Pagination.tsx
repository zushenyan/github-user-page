import React from 'react';

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
    <div>
      <button onClick={onClickPrev} disabled={prevDisabled}>
        previous page
      </button>
      <span>
        <strong>
          {currentPage} of {totalPage}
        </strong>
      </span>
      <button onClick={onClickNext} disabled={nextDisabled}>
        next page
      </button>
    </div>
  );
}
