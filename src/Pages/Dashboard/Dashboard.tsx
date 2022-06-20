import { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Locations from '../../components/Locations/Locations';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect to="/locations" />
  },
  {
    path: '/locations',
    main: () => <Main />
  },
  {
    path: '/chargers',
    main: () => <h2>Chargers</h2>
  },
  {
    path: '/reports',
    main: () => <h2>Reports</h2>
  },
  {
    path: '/company',
    main: () => <h2>Company</h2>
  },
  {
    path: '/user',
    main: () => <h2>Reports</h2>
  },
  {
    path: '/history',
    main: () => <h2>History</h2>
  }
];

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Router>
      <div className="dashboard-con">
        <Sidebar showSidebar={showSidebar} closeSidebar={() => setShowSidebar(false)} />
        <div className="dashboard-right">
          <Header showSidebar={showSidebar} toggleSidebar={() => setShowSidebar(!showSidebar)} />
          <Switch>
            {routes.map((route, index) => (
              <Route exact={route.exact} key={index} path={route.path} component={route.main} />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
