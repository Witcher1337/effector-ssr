import { createRoute } from 'atomic-router';

export const routesMap = {
  home: createRoute(),
  example1: createRoute()
};

export const routes = [
  {
    path: '/',
    route: routesMap.home,
  },
  {
    path: '/example1',
    route: routesMap.example1,
  }
];