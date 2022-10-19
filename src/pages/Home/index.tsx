import { PrimaryTemplate } from '../../shared/ui/templates';
import { PrimaryHeader } from '../../widgets';

import styles from './styles.module.scss';

export const Home = () => (
  <PrimaryTemplate
    header={<PrimaryHeader />}
  >
    <p className={styles.text}>
      This is a home page
    </p>
  </PrimaryTemplate>
)