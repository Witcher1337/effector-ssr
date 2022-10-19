import ReactDOM from "react-dom";
import { loadableReady } from '@loadable/component'
import { Provider } from "effector-react/scope";
import { RouterProvider } from "atomic-router-react/scope";
import { createHistoryRouter } from "atomic-router";
import { allSettled, createEvent, sample } from "effector";

import { Application } from './application';
import { getClientScope } from './shared/libs/get-client-scope';
import { createClientHistory } from './shared/libs/history';

import { routes } from './shared/configs/routes';

const scope = getClientScope();
const ready = createEvent();
const history = createClientHistory(scope);

const router = createHistoryRouter({
  routes,
});

sample({
  clock: ready,
  fn: () => history,
  target: router.setHistory,
});


allSettled(ready, { scope }).then(() => {
  loadableReady(() => {
    const container = document.getElementById('root');

    ReactDOM.hydrate(
      <Provider value={scope}>
        <RouterProvider router={router}>
          <Application />
        </RouterProvider>
      </Provider>,
      container
    );
  })
});
