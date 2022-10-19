import { createRoutesView } from "atomic-router-react/scope";
import { Suspense } from 'react';
import { PrimaryLayout } from '../widgets/PrimaryLayout';

import { routesMap } from '../shared/configs/routes';
import { Example1 } from './Example1';
import { Home } from './Home';

const RoutesView = createRoutesView({
  routes: [
    { route: routesMap.home, view: Home, layout: PrimaryLayout },
    { route: routesMap.example1, view: Example1, layout: PrimaryLayout }
  ],
});

export const Pages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoutesView />
    </Suspense>
  )
}