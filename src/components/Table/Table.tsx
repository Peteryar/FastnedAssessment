import { ReactNode } from 'react';

function Table({ children }: Props) {
  return <>{children}</>;
}

interface Props {
  children: ReactNode;
}

export default Table;
