import { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ContextContainer } from '../../contexts/DashboardContext';

import './styles.css';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <ContextContainer>
      <div className="dashboard-con">
        <Sidebar showSidebar={showSidebar} closeSidebar={() => setShowSidebar(false)} />
        <div className="dashboard-right">
          <Header showSidebar={showSidebar} toggleSidebar={() => setShowSidebar(!showSidebar)} />
          <Main />
        </div>
      </div>
    </ContextContainer>
  );
}

export default Dashboard;
