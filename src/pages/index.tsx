import { Route } from "atomic-router-react/scope";
import { Suspense, useEffect } from 'react';

import { routesMap } from '../shared/configs/routes';
import { Example1 } from './Example1';
import { Home } from './Home';


export const Pages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route route={routesMap.home} view={Home} />
      <Route route={routesMap.example1} view={Example1} />
    </Suspense>
  )
}