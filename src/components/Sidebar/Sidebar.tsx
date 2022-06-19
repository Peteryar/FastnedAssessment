import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavItem from '../NavItem/NavItem';
import './styles.css';

function Sidebar({ showSidebar, closeSidebar }: Props) {
  const [active, setActive] = useState(0);
  // const [deviceWidth, setDeviceWith] = useState(window.innerWidth);

  const navigate = (path: number) => {
    setActive(path);
    closeSidebar();
  };

  const logout = () => {
    //handle logout
    console.log('logging out...');
  };

  const items = [
    { name: 'Locations', icon: 'where_to_vote', path: '/locations' },
    { name: 'Chargers', icon: 'ev_charger', path: '/chargers' },
    { name: 'Reports', icon: 'bug_report', path: '/reports' },
    { name: 'Company', icon: 'villa', path: '/company' },
    { name: 'User Account', icon: 'account_circle', path: '/user' },
    { name: 'History', icon: 'description', path: '/history' }
  ];
  return (
    <div style={{ display: showSidebar ? 'flex' : undefined }} className="sidebar-con">
      <div className="sidebar-top">
        <Link className="logo" to="/">
          <Logo width="50%" height={100} />
        </Link>
        {items.map((item, i) => (
          <NavItem
            path={item.path}
            active={active === i ? true : false}
            navigate={(path: number) => navigate(path)}
            key={i}
            index={i}
            text={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <div>
        <NavItem path="" text="Log Out" navigate={logout} />
      </div>
    </div>
  );
}

interface Props {
  showSidebar: boolean;
  closeSidebar: Function;
}

export default Sidebar;
