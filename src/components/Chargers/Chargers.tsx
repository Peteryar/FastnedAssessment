import ViewContainer from '../Container/ViewContainer';
import Table from '../Table/Table';
import TableHead from '../Table/components/TableHead/TableHead';
import TableItems from '../Table/components/TableItems/TableItems';
import { ChargerType } from '../../utils/types';

function Chargers({ chargers }: Props) {
  const headData = ['id', 'type', 'Serial Number', 'Status', ' lastUpdated'];
  return (
    <ViewContainer title="Add Charger" icon="charger">
      <Table>
        <TableHead width={'95%'} data={headData} />
        <TableItems width={'95%'} chargers={chargers} />
      </Table>
    </ViewContainer>
  );
}

interface Props {
  chargers: Array<ChargerType>;
}

export default Chargers;
