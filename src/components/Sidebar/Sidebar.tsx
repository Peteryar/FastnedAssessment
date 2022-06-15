import { useState } from 'react';
// import Item from '../Item/Item';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavItem from '../NavItem/NavItem';
// import UserInfo from '../UserInfo/UserInfo';
// import Button from './Button/Button';
import './styles.css';

function Sidebar({ showSidebar, closeSidebar }: Props) {
  const [active, setActive] = useState(2);
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
    { name: 'Overview', icon: 'grid_view' },
    { name: 'Policy', icon: 'policy' },
    { name: 'Reports', icon: 'bug_report' },
    { name: 'Company', icon: 'villa' },
    { name: 'User Account', icon: 'account_circle' },
    { name: 'History', icon: 'description' }
  ];
  return (
    <div style={{ display: showSidebar ? 'flex' : undefined }} className="sidebar-con">
      <div className="sidebar-top">
        <Logo width="50%" height={100} />
        {/* <UserInfo />
        <Button /> */}
        {items.map((item, i) => (
          <NavItem
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
        <NavItem text="Log Out" navigate={logout} />
      </div>
    </div>
  );
}

interface Props {
  showSidebar: boolean;
  closeSidebar: Function;
}

export default Sidebar;
