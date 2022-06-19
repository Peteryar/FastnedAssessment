import './styles.css';
import { ReactComponent as LogOutIcon } from '../../assets/log-out.svg';
import { Link } from 'react-router-dom';

function NavItem({ text, icon, path, active }: Props) {
  return (
    <Link to={path} className={text === 'Log Out' ? 'item-con1' : 'item-con'}>
      {text === 'Log Out' ? (
        <LogOutIcon style={{ marginRight: 15 }} />
      ) : (
        <span
          style={{ marginRight: 25, color: active ? '#ffdd30' : '#A2A4B9' }}
          className="material-symbols-outlined">
          {icon}
        </span>
      )}
      <p style={{ color: active ? '#ffdd30' : undefined }}>{text}</p>
    </Link>
  );
}

interface Props {
  text: string;
  icon?: string;
  navigate: Function;
  index?: number;
  active?: boolean;
  path: string;
}

export default NavItem;
