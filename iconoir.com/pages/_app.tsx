import type { AppProps } from 'next/app';
import '../styles/prism-theme.css';
import '../styles/theme.css';
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
