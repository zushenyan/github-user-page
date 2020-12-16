const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1 hour
  get: async ({ req, res }) => {
    // resolve the issue of `renderToHTML`
    // https://github.com/vercel/next.js/issues/14737
    const _resEnd = res.end;
    const data = await new Promise((resolve) => {
      res.end = (payload) => {
        resolve(res.statusCode === 200 && payload);
      };
      app.render(req, res, req.path, {
        ...req.query,
        ...req.params,
      });
    });
    res.end = _resEnd;

    return { data };
  },
  send: ({ data, res }) => res.send(data),
});

app.prepare().then(() => {
  const server = express();
  server
    .get('/users/:id', (req, res) => ssrCache({ req, res }))
    .get('/', (req, res) => ssrCache({ req, res }))
    .get('*', (req, res) => handle(req, res))
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
});
