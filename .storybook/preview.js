import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const routerMock = {
  push: () => {},
  prefetch: () => new Promise((res, rej) => {}),
};

export const decorators = [
  (Story) => <RouterContext.Provider value={routerMock}><Story /></RouterContext.Provider>
]
