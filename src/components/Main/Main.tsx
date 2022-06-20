import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ContextContainer } from '../../contexts/Store';
import Location from '../Location/Location';
import Locations from '../Locations/Locations';
import './styles.css';
// import { LocationType } from '../../utils/types';
// import { useState } from 'react';

function Main() {
  const { path } = useRouteMatch();
  // const [locations, setLocations] = useState(sample);
  return (
    <ContextContainer>
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
    </ContextContainer>
  );
}

export default Main;
