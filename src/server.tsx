import ReactDOM from 'react-dom/server';  
import express from 'express';
import path from 'path';
import { ChunkExtractor } from '@loadable/server'
import { RouterProvider } from "atomic-router-react/scope";
import { createHistoryRouter } from "atomic-router";
import { Provider } from "effector-react/scope";

import { Application } from './application';
import { routes } from './shared/configs/routes';
import { allSettled, fork, serialize } from 'effector';
import { createServerHistory } from './shared/libs/history';

const app = express();
const port = 3000;

const statsFile = path.resolve('./dist/server/loadable-stats.json')
const extractor = new ChunkExtractor({ statsFile })


const router = createHistoryRouter({
  routes: routes,
});

app
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .get('*', async (req, res) => {
    const values = new Map();
    const scope = fork({
      values,
    });

    const history = createServerHistory(scope);

    history.push(req.url);

    await allSettled(router.setHistory, {
      scope,
      params: history,
    });

    await allSettled(router.setHistory, {
      scope,
      params: history,
    });

    const application = (
      <Provider value={scope}>
        <RouterProvider router={router}>
          <Application />
        </RouterProvider>
      </Provider>
    );
    
      const jsx = extractor.collectChunks(application)
      const html = ReactDOM.renderToString(jsx);
      const styleTags = extractor.getStyleTags();
      const initialState = serialize(scope);
      
      res.send(`
          <!DOCTYPE html>
          <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>My SSR App</title>
                  ${styleTags}
              </head>
              <body>
                  <script>
                    window.INITIAL_STATE = ${JSON.stringify(initialState)}
                  </script>
                  
                  <div id='root'>${html}</div>
              </body>
          </html>
      `);
  })
  .listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });