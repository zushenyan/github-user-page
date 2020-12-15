import React from 'react';
import styles from './SearchBar.module.css';

export type Props = {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function SearchBar({
  inputValue,
  onInputChange,
  onSubmit,
}: Props): JSX.Element {
  return (
    <form className={styles['wrapper']} onSubmit={onSubmit}>
      <input
        className={styles['input']}
        aria-label="username"
        type="text"
        onChange={onInputChange}
        value={inputValue}
        placeholder="Type to seach users on Github.com"
      />
      <button className={styles['button']} type="submit">
        search
      </button>
    </form>
  );
}
