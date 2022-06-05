import { removeTokenCookie } from '@/libs/cookie';
import * as React from 'react';
import { User } from '@/services/types/user';
import { UsersApi } from '@/services';
import { useRouter } from 'next/router';
import useSWR from 'swr';

type UserHookProps = {
  redirectTo?: string;
  redirectIfFound?: boolean;
  restrictToRole?: 1 | 2;
};

type UserHook = {
  user?: User;
  mutate: any;
  logout: () => Promise<void>;
};

export function useUser({
  redirectTo,
  redirectIfFound,
  restrictToRole,
}: UserHookProps): UserHook {
  const router = useRouter();
  const userApi = new UsersApi();
  const { data, mutate, error } = useSWR(`user-detail`, userApi.getUserDetail);

  const user = data?.getValue().user;
  const finished = Boolean(data || error);
  const hasUser = Boolean(user);

  const logout = async () => {
    const confirmed = window.confirm(`Do you want to logout?`);
    if (confirmed) {
      removeTokenCookie();
      router.push(`/login`);
    }
  };

  React.useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, hasUser]);

  return {
    user: user,
    mutate: {},
    logout: logout,
  };
}
