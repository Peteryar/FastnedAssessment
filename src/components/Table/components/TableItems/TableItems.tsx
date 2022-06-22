import { MouseEventHandler, ReactNode } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ChargerType, LocationType } from '../../../../utils/types';
import Icon from '../../../Icon/Icon';
import './styles.css';

function TableItems({ width, children }: Prop) {
  return (
    <div style={{ width }} className="table-items-con">
      {children}
    </div>
  );
}

function Item({ location }: ItemProp) {
  const { path } = useRouteMatch();
  const history = useHistory();
  console.log('item---> rendering.....');
  const editBtnHandler = () => {
    history.push({ pathname: `${path}/location`, state: { location, from: 'Edit_View_Screen' } });
  };
  return (
    <div onClick={editBtnHandler} className="table-item-con">
      <p>{location.name}</p>
      <p>{location.location}</p>
      <p>{location?.chargers?.length}</p>
      <p>{location.country}</p>
      <p>{location.lastUpdated}</p>
      <span>
        <button>Edit</button>
      </span>
    </div>
  );
}

function Item1({ charger, removeCharger, editCharger }: Item1Prop) {
  console.log('Item 1 rendering...');
  return (
    <div className="table-item-con">
      <p>{charger.id}</p>
      <p>{charger.type}</p>
      <p>{charger.serialNumber}</p>
      <p>{charger.status}</p>
      <p>{charger.lastUpdated || 'NIL'}</p>
      <section>
        <button onClick={editCharger}>
          <Icon name="edit_note" />
        </button>
        <button onClick={removeCharger}>
          <Icon color="red" name="delete" />
        </button>
      </section>
    </div>
  );
}

interface Item1Prop {
  charger: ChargerType;
  removeCharger: MouseEventHandler;
  editCharger: MouseEventHandler;
}

interface Prop {
  children: ReactNode;
  width?: string;
}

interface ItemProp {
  location: LocationType;
}

export { TableItems, Item, Item1 };
