import ViewContainer from '../Container/ViewContainer';
import Table from '../Table/Table';
import TableHead from '../Table/components/TableHead/TableHead';
import TableItems from '../Table/components/TableItems/TableItems';

function Chargers() {
  const headData = ['id', 'type', 'Serial Number', 'Status', ' lastUpdated'];
  return (
    <ViewContainer title="Add Charger" icon="charger">
      <Table>
        <TableHead width={'95%'} data={headData} />
        <TableItems width={'95%'} items={[]} />
      </Table>
    </ViewContainer>
  );
}

export default Chargers;
