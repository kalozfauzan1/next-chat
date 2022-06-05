import {AppProps} from 'next/app';
import '@/styles/global.css';
import {AuthProvider} from "@/libs/auth";

export default function MyApp({Component, pageProps}: AppProps) {
  return <>
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  </>
}
