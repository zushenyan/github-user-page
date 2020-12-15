import '../styles/global.css';

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { motion } from 'framer-motion';

import store from '../store';

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}
