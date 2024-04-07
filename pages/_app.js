import '@/styles/globals.css';
import { useEffect } from 'react';
import { initGA, GA_TRACKING_ID } from '../utils/analytics';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initGA();
    }
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
