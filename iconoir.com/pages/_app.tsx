import type { AppProps } from 'next/app';
import '../styles/prism-theme.css';
import '../styles/theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
