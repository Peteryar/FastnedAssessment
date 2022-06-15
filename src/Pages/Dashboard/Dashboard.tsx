import { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';

import './styles.css';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div data-testid="dashboard" className="dashboard-con">
      <Sidebar showSidebar={showSidebar} closeSidebar={() => setShowSidebar(false)} />
      <div className="dashboard-right">
        <Header showSidebar={showSidebar} toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
