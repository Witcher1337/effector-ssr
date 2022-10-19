import ReactDOM from "react-dom";
import { loadableReady } from '@loadable/component'

import { App } from '../application';

loadableReady(() => {
  const container = document.getElementById('root');

  ReactDOM.hydrate(
    <App/>,
    container
  );
});