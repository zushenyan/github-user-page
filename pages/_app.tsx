import '../styles/global.css';

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { motion } from 'framer-motion';

import store from '../store';

import ThemeProvider from '../features/ThemeProvider';

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Github user searcher</title>
        <meta
          name="description"
          content="A very simple Github user searcher."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <motion.div
            id="page-transition-animator"
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: { opacity: 0 },
              pageAnimate: { opacity: 1 },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </ThemeProvider>
      </Provider>
    </>
  );
}
