import { SSRProvider } from '@react-aria/ssr';
import type { AppProps } from 'next/app';
import '../styles/prism-theme.css';
import '../styles/theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
