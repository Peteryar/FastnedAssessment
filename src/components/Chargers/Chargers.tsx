import ViewContainer from '../Container/ViewContainer';
import Table from '../Table/Table';
import TableHead from '../Table/components/TableHead/TableHead';
import { TableItems, Item1 } from '../Table/components/TableItems/TableItems';
import { ChargerType } from '../../utils/types';
import { memo } from 'react';
import { isEqual } from 'lodash';

function Chargers({ chargers, removeCharger, editCharger, showModal }: Props) {
  const headData = ['id', 'type', 'Serial Number', 'Status', ' lastUpdated'];
  console.log('chargers rendering...');
  const handleEditCharger = (charger: ChargerType) => {
    console.log('charger', charger);
    editCharger(charger);
    showModal();
  };
  return (
    <ViewContainer title="Add Charger" icon="charger">
      <Table>
        <TableHead width={'95%'} data={headData} />
        <TableItems width={'95%'}>
          {chargers.length > 0 ? (
            chargers.map((charger, i) => (
              <Item1
                editCharger={() => handleEditCharger(charger)}
                removeCharger={() => removeCharger(charger.id)}
                key={i}
                charger={charger}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>No Charger has been added to this location</p>
          )}
        </TableItems>
      </Table>
    </ViewContainer>
  );
}

interface Props {
  chargers: Array<ChargerType>;
  removeCharger: Function;
  editCharger: Function;
  showModal: Function;
}

export default memo(Chargers, isEqual);
