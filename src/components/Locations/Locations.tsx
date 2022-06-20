import { useHistory, useRouteMatch } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Store from '../../contexts/Store';
import Button from '../Button/Button';
import TableHead from '../Table/components/TableHead/TableHead';
import TableItems from '../Table/components/TableItems/TableItems';
import Table from '../Table/Table';
import './styles.css';

function Locations() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const headData = ['Location', 'Location No.', 'Chargers', 'Country', 'Last Updated'];

  const { state } = useContext(Store);
  const handleSwitch = () => {
    history.push(`${path}/add-location`);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="locations-con">
      <section>
        <h3>Locations</h3>
        <Button width={150} height={30} handleClick={handleSwitch} text="Add Location" />
      </section>
      <Table>
        <TableHead data={headData} />
        <TableItems locations={state.locations} />
      </Table>
    </div>
  );
}

export default Locations;
