import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import NewLayout from '../components/Layout/NewLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NewLayout>
        <Component {...pageProps} />
      </NewLayout>
    </>
  );
}
export default MyApp;
