import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.css';

import SearchUsersLayout from '../../components/SearchUsersLayout';
import SearchBar from '../../components/SearchBar';
import Users from '../../components/Users';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

import slice from './slice';
import { search, gotoPage } from './thunks';
import {
  getInputValue,
  getUsers,
  getCurrentPage,
  getTotalPage,
  getNextDisabled,
  getPrevDisabled,
  getStatus,
  getShowBottom,
} from './selectors';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const keyword = useSelector(getInputValue);
  const users = useSelector(getUsers);
  const currentPage = useSelector(getCurrentPage);
  const totalPage = useSelector(getTotalPage);
  const nextDisabled = useSelector(getNextDisabled);
  const prevDisabled = useSelector(getPrevDisabled);
  const status = useSelector(getStatus);
  const showBottom = useSelector(getShowBottom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(slice.actions.setInputValue(e.target.value));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(search());
  };

  const handleNextPage = () => {
    dispatch(gotoPage(currentPage + 1));
  };

  const handlePrevPage = async () => {
    dispatch(gotoPage(currentPage - 1));
  };

  const data =
    users?.map((v) => ({
      username: v.login,
      avatarURL: v.avatar_url,
    })) || [];

  const top = (
    <SearchBar
      inputValue={keyword}
      onInputChange={handleInputChange}
      onSubmit={handleFormSubmit}
    />
  );

  const middle =
    status === 'loading' ? (
      <div className={styles['spinner']}>
        <Spinner />
      </div>
    ) : (
      <Users data={data} />
    );

  const bottom = showBottom ? (
    <Pagination
      currentPage={currentPage}
      totalPage={totalPage}
      onClickNext={handleNextPage}
      onClickPrev={handlePrevPage}
      nextDisabled={nextDisabled}
      prevDisabled={prevDisabled}
    />
  ) : null;

  return <SearchUsersLayout top={top} middle={middle} bottom={bottom} />;
}
