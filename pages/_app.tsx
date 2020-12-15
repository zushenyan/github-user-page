import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import store from '../store';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
