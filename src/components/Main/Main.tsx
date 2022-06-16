import { useContext } from 'react';
import DashboardContext from '../../contexts/DashboardContext';
import AddLocation from '../AddLocations/AddLocations';
import Locations from '../Locations/Locations';
import './styles.css';
function Main() {
  const { state } = useContext(DashboardContext);
  return (
    <div className="main-con">
      {state.screen === 'locations' && <Locations />}
      {state.screen === 'add_location' && <AddLocation />}
    </div>
  );
}

export default Main;
