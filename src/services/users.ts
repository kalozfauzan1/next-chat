import { Result } from '@/libs/result';
import axiosClient from './axiosClient';
import { getTokenCookie } from '@/libs/cookie';
import { User } from '@/services/types';

type UserApiResponse = {
  user: User;
};
export class UsersApi {
  config: any;

  constructor() {
    const token = getTokenCookie();
    this.config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  login = async (): Promise<Result<UserApiResponse>> => {
    try {
      const url = `/user/create`;
      const { data } = await axiosClient.post(url, {}, this.config);
      return Result.ok({ user: data.user });
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return Result.fail(error);
    }
  };
  getUserDetail = async (): Promise<Result<UserApiResponse>> => {
    try {
      const { data } = await axiosClient.get(`/user`, this.config);
      return Result.ok({ user: data.user });
    } catch (e) {
      return Result.fail(`Something when wrong`);
    }
  };
}
