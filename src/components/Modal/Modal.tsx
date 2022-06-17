import { ReactNode } from 'react';
import './styles.css';

function Modal({ children }: Prop) {
  return <div className="modal">{children}</div>;
}

interface Prop {
  children: ReactNode;
}

export default Modal;
