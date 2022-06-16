import { useContext } from 'react';
import ACTIONS from '../../contexts/actions';
import DashboardContext from '../../contexts/DashboardContext';
import Button from '../Button/Button';
import Table from '../Table/Table';
import './styles.css';

function Locations() {
  const { dispatch } = useContext(DashboardContext);
  const handleSwitch = () => {
    dispatch({ type: ACTIONS.ADD_LOCATION });
  };

  return (
    <div className="locations-con">
      <section>
        <h3>Locations</h3>
        <Button width={150} height={30} handleClick={handleSwitch} text="Add Location" />
      </section>
      <Table />
    </div>
  );
}

export default Locations;
