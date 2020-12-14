import React, { useState } from 'react';
import { searchUsers, SearchUsersResponse } from '../lib/apis/users';

import SearchBar from '../components/SearchBar';
import Users from '../components/Users';
import Pagination from '../components/Pagination';

const PER_PAGE = 10;

export default function Home(): JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState<SearchUsersResponse>();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      setCurrentPage(1);
      const res = await searchUsers({
        keyword,
        page: currentPage,
        perPage: PER_PAGE,
      });
      setResult(res);
    })();
  };

  const handleNextPage = async () => {
    const newPage = currentPage + 1;
    const res = await searchUsers({
      keyword,
      page: newPage,
      perPage: PER_PAGE,
    });
    setResult(res);
    setCurrentPage(newPage);
  };

  const handlePrevPage = async () => {
    const newPage = currentPage - 1;
    const res = await searchUsers({
      keyword,
      page: newPage,
      perPage: PER_PAGE,
    });
    setResult(res);
    setCurrentPage(newPage);
  };

  const data =
    result?.items?.map((v) => ({
      username: v.login,
      avatarURL: v.avatar_url,
    })) || [];

  const totalPage = Math.ceil(result?.total_count || 0 / PER_PAGE);

  return (
    <div>
      <SearchBar
        inputValue={keyword}
        onInputChange={(e) => setKeyword(e.target.value)}
        onSubmit={handleFormSubmit}
      />
      <Users data={data} />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onClickNext={handleNextPage}
        onClickPrev={handlePrevPage}
        nextDisabled={currentPage + 1 >= totalPage}
        prevDisabled={currentPage - 1 <= 0}
      />
    </div>
  );
}
