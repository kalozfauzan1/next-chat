import nookies, { destroyCookie } from 'nookies';

export const TOKEN_STORAGE_NAME = `gchat.app.token`;

export function getTokenCookie(): string {
  return nookies.get()[TOKEN_STORAGE_NAME];
}

export function setTokenCookie(token: string) {
  nookies.set(null, TOKEN_STORAGE_NAME, token, {
    maxAge: 7 * 24 * 60 * 60,
    path: `/`,
  });
}

export function removeTokenCookie() {
  destroyCookie(null, TOKEN_STORAGE_NAME);
}
