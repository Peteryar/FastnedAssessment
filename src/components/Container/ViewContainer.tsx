import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import './styles.css';

function ViewContainer({ children, title, icon }: Prop) {
  return (
    <div className="view-con">
      <section className="view-title-con">
        <Icon name={icon} />
        <h4>{title}</h4>
      </section>
      {children}
    </div>
  );
}

interface Prop {
  children: ReactNode;
  title: string;
  icon: string;
}

export default ViewContainer;
