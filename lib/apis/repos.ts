export interface Repo {
  full_name: string;
  url: string;
}

export type Response = Repo[];

export interface Params {
  username: string;
}

export const getRepos = async ({ username }: Params): Promise<Response> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return res.json();
};
