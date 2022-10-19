import { FunctionComponent, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  header: JSX.Element
}>

export const BaseTemplate:FunctionComponent<Props> = ({ header, children}) => (
  <>
    {header}

    <section>
      {children}
    </section>
  </>
)