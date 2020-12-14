import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { getUser, Response } from '../../lib/apis/user';

export default function User(context: Response): JSX.Element {
  return (
    <div>
      <h1>username: {context.login}</h1>
      <h1>avatar: {context.avatar_url}</h1>
      <h1>followers: {context.followers}</h1>
      <h1>following: {context.following}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const name = context?.params?.id as string;
  const data = await getUser({ name });
  return {
    props: {
      ...data,
    },
  };
};
