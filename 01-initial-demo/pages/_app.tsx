import { ReactElement } from 'react';
import { NextPage } from 'next';
import '../styles/globals.css'
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}
