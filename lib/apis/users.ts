export interface UserResponse {
  login: string;
  avatar_url: string;
}

export interface SearchUsersResponse {
  total_count: number;
  items: UserResponse[];
}

export interface Params {
  keyword: string;
  page?: number;
  perPage?: number;
}

export const searchUsers = async ({
  keyword,
  page = 1,
  perPage = 10,
}: Params): Promise<SearchUsersResponse> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${keyword}&page=${page}&per_page=${perPage}`
  );
  return res.json();
};
