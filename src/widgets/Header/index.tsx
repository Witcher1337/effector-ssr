import { Link  } from "atomic-router-react/scope";

import { routesMap } from '../../shared/configs/routes';

const navigation = [
  {
    name: 'Home',
    route: routesMap.home
  },
  {
    name: 'Example1',
    route: routesMap.example1
  }
];

export const PrimaryHeader = () => (
  <header>
    <nav>
      <ul>
        {navigation.map(({ route, name}) => (
          <li key={name}>
            <Link to={route}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)