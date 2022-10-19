import { PrimaryTemplate } from '../../shared/ui/templates';
import { PrimaryHeader } from '../../widgets';

import styles from './styles.module.scss';

export const Example1 = () => (
  <PrimaryTemplate
    header={<PrimaryHeader />}
  >
    <p className={styles.text}>
      This is a Example1 page
    </p>
  </PrimaryTemplate>
)