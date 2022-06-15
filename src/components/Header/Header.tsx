import { MouseEventHandler } from 'react';

import './styles.css';

function Header({ toggleSidebar, showSidebar }: Props) {
  return (
    <div data-testid="header" className="header-con">
      <ul>
        <span>
          <li>Overview</li>
          <div></div>
        </span>
      </ul>
      <div>
        {showSidebar ? (
          <span onClick={toggleSidebar} className="material-symbols-outlined hamburger-menu">
            close
          </span>
        ) : (
          <span onClick={toggleSidebar} className="material-symbols-outlined hamburger-menu">
            menu
          </span>
        )}
      </div>
    </div>
  );
}

interface Props {
  toggleSidebar: MouseEventHandler<HTMLSpanElement>;
  showSidebar: boolean;
}

export default Header;
