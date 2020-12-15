import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import User from '../../components/User';
import * as userApis from '../../lib/apis/user';
import * as reposApis from '../../lib/apis/repos';

type Context = userApis.Response & {
  repos: reposApis.Response;
};

export default function UserPage(context: Context): JSX.Element {
  const repos = context.repos.map((r) => ({
    name: r.full_name,
    url: r.url,
  }));
  return (
    <User
      username={context.login}
      avatarURL={context.avatar_url}
      followers={context.followers}
      following={context.following}
      repos={repos}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const name = context?.params?.id as string;
  const user = await userApis.getUser({ name });
  const repos = await reposApis.getRepos({ username: name });
  return {
    props: {
      ...user,
      repos,
    },
  };
};
