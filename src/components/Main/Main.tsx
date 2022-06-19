import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Location from '../Location/Location';
import Locations from '../Locations/Locations';
import './styles.css';

function Main() {
  const { path } = useRouteMatch();
  console.log('path---->', path);
  return (
    <div className="main-con">
      <Switch>
        <Route exact path={path}>
          <Locations />
        </Route>
        <Route path={`${path}/location`}>
          <Location />
        </Route>
        <Route path={`${path}/add-location`}>
          <Location />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
