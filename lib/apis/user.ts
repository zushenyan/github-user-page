export interface Response {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
}

export interface Params {
  name: string;
}

export const getUser = async ({ name }: Params): Promise<Response> => {
  const res = await fetch(`https://api.github.com/users/${name}`);
  return res.json();
};
