import { removeTokenCookie, setTokenCookie } from './cookie';
import * as React from 'react';

import firebase, { auth } from './firebase';
import {
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';
import { UsersApi } from '@/services';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AuthContext = React.createContext<FirebaseAuthHook>({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const provider = new GoogleAuthProvider();

interface FormattedFirebaseUser {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
  token: string;
  phoneNumber: string;
  role: string;
  emailVerified: boolean;
}

interface User extends FormattedFirebaseUser {
  fullName: string;
}

type FirebaseAuthHook = {
  user: User;
  loading: boolean;
  signinWithGoogle: (redirect: string, newRegister?: boolean) => Promise<void>;
  signout: () => Promise<void>;
};

function useFirebaseAuth(): FirebaseAuthHook {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  const handleUser = async (
    rawUser?: any,
    newRegister = false,
  ): Promise<void> => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      try {
        setTokenCookie(user.token);
        const userApi = new UsersApi();
        const userFromDb = await userApi.login();
        setUser({
          ...user,
          fullName: ``,
        });
      } catch (error) {
        removeTokenCookie();
        setUser(null);
        setLoading(false);
      }
      setLoading(false);
    } else {
      removeTokenCookie();
      setUser(null);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, handleUser);
    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdTokenResult(true);
    }, 10 * 45 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  const signinWithGoogle = async (redirect: string) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        await handleUser(result.user);

        if (redirect) {
          window.location.replace(redirect);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const signout = async () => {
    const confirmed = window.confirm(`Do you want to logout?`);
    if (confirmed) {
      return signOut(auth).then(async () => {
        await handleUser(undefined);
        window.location.replace(`/login`);
      });
    }
  };

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  } as FirebaseAuthHook;
}

const formatUser = async (user: any): Promise<FormattedFirebaseUser> => {
  const tokenResult = await user.getIdTokenResult();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    phoneNumber: user.phoneNumber,
    token: tokenResult.token,
    role: tokenResult.claims.role,
    emailVerified: user.emailVerified,
  };
};
