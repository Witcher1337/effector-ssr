import { FunctionComponent, PropsWithChildren } from 'react'
import { BaseTemplate } from '../../shared/ui';
import { PrimaryHeader } from '../Header';

type Props = PropsWithChildren<{}>;

export const PrimaryLayout:FunctionComponent<Props> = ({ children}) => (
  <BaseTemplate
    header={<PrimaryHeader/>}
    children={children}
  />
)