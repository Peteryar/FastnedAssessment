import { useContext } from 'react';
import ACTIONS from '../../contexts/actions';
import DashboardContext from '../../contexts/DashboardContext';
import Button from '../Button/Button';
import TableHead from '../Table/components/TableHead/TableHead';
import TableItems from '../Table/components/TableItems/TableItems';
import Table from '../Table/Table';
import './styles.css';

function Locations() {
  const headData = ['Location', 'Location No.', 'Chargers', 'Country', 'Last Updated', 'Actions'];

  const items = [
    {
      name: 'Alkermaat',
      number: 223344,
      noChargers: 2,
      country: 'NLD',
      lastUpdated: '5 months ago',
      chargers: 4
    },
    {
      name: 'Aalscholver',
      number: 112233,
      noChargers: 5,
      country: 'NLD',
      lastUpdated: '5 months ago',
      chargers: 5
    }
  ];

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
      <Table>
        <TableHead data={headData} />
        <TableItems items={items} />
      </Table>
    </div>
  );
}

export default Locations;
