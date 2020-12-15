import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import User from '../../components/User';
import { getUser, Response } from '../../lib/apis/user';

export default function UserPage(context: Response): JSX.Element {
  return (
    <User
      username={context.login}
      avatarURL={context.avatar_url}
      followers={context.followers}
      following={context.following}
    />
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
