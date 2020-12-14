import React from 'react';

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
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onInputChange} value={inputValue} />
      <button type="submit">search</button>
    </form>
  );
}
