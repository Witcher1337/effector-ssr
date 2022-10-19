import loadable from '@loadable/component';
import { Input } from './Input';

const LazyTest = loadable(() => import('./Test'));

export const App = () => (
  <div>
    <Input/>
    {false && (
      <LazyTest/>
    )}
  </div>
)