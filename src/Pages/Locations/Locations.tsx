import { useHistory, useRouteMatch } from 'react-router-dom';
import { useContext } from 'react';
import Store from '../../contexts/Store';
import Button from '../../components/Button/Button';
import TableHead from '../../components/Table/components/TableHead/TableHead';
import { TableItems, Item } from '../../components/Table/components/TableItems/TableItems';
import Table from '../../components/Table/Table';
import './styles.css';

function Locations() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const headData = ['Location', 'Location No.', 'Chargers', 'Country', 'Last Updated'];

  const { state } = useContext(Store);
  const handleSwitch = () => {
    history.push({ pathname: `${path}/add-location`, state: { from: 'Add_Location' } });
  };

  console.log('I rendered....');
  return (
    <div className="locations-con">
      <section>
        <h3>Locations</h3>
        <Button width={150} height={30} handleClick={handleSwitch} text="Add Location" />
      </section>
      <Table>
        <TableHead data={headData} />
        <TableItems>
          {state.locations.length > 0 ? (
            state.locations.map((location, i) => <Item key={i} location={location} />)
          ) : (
            <p style={{ textAlign: 'center' }}>No Location has been added to the system</p>
          )}
        </TableItems>
      </Table>
    </div>
  );
}

export default Locations;
