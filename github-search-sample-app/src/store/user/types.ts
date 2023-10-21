import { TPaginationReq } from '@/types/base';

export type TUser = {
  login: string;
  id: number;
  avatar_url: string;
  type: string;
  score: number;
};

export type TUsersSearchReq = TPaginationReq & {
  q: string;
};

export type TUsersSearchRes = {
  total_count: number;
  items: TUser[];
};

export type TUsersSearchStore = {
  isLoading: boolean;
  isError: boolean;
  users: TUsersSearchRes | null;
};
