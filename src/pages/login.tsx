import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/Login.module.scss';
import { useEffect, useState } from 'react';
import { useAuth } from '@/libs/auth';
import Image from 'next/image';

export default function Login() {
  // const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div />;

  return (
    <>
      <Head>
        <title>CodeBlog | LogIn</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            onClick={() => auth.signinWithGoogle(`/`)}
            className={styles.button}
          >
            <Image src="/icons/login-google.png" width={20} height={20} />
            <p>Login With Google</p>
          </div>
        </div>
      </div>
    </>
  );
}
