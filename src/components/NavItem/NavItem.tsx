import './styles.css';
import { ReactComponent as LogOutIcon } from '../../assets/log-out.svg';

function NavItem({ text, icon, navigate, index, active }: Props) {
  const handleNavigate = () => {
    navigate(index);
  };

  return (
    <div onClick={handleNavigate} className={text === 'Log Out' ? 'item-con1' : 'item-con'}>
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
    </div>
  );
}

interface Props {
  text: string;
  icon?: string;
  navigate: Function;
  index?: number;
  active?: boolean;
}

export default NavItem;
