import { useHistory, useRouteMatch } from 'react-router-dom';
import { ChargerType, LocationType } from '../../../../utils/types';
import './styles.css';

function TableItems({ chargers, width, locations }: Prop) {
  const items = locations || chargers;
  return (
    <div style={{ width }} className="table-items-con">
      {locations?.map((location, i) => (
        <Item location={location} key={i} />
      ))}
      {chargers?.map((charger, i) => (
        <Item1 charger={charger} key={i} />
      ))}
      {items?.length == 0 && (
        <p style={{ textAlign: 'center' }}>No Charger has been added to this location</p>
      )}
    </div>
  );
}

function Item({ location }: ItemProp) {
  const { path } = useRouteMatch();
  const history = useHistory();
  const editBtnHandler = () => {
    history.push(`${path}/location`);
  };
  return (
    <div className="table-item-con">
      <p>{location.name}</p>
      <p>{location.number}</p>
      <p>{location.chargers}</p>
      <p>{location.country}</p>
      <p>{location.lastUpdated}</p>
      <span>
        <button onClick={editBtnHandler}>Edit</button>
      </span>
    </div>
  );
}

function Item1({ charger }: Item1Prop) {
  return (
    <div className="table-item-con">
      <p>{charger['Serial Number']}</p>
      <p>{charger['Charger Type']}</p>
      <p>{charger['Serial Number']}</p>
      <p>{charger.Status}</p>
      <p>{charger.lastUpdated || 'NIL'}</p>
      <section>
        <button>
          <span style={{ textAlign: 'center' }} className="material-symbols-outlined">
            edit_note
          </span>
        </button>
        <button>
          <span style={{ color: 'red', textAlign: 'center' }} className="material-symbols-outlined">
            delete
          </span>
        </button>
      </section>
    </div>
  );
}

interface Item1Prop {
  charger: ChargerType;
}

interface Prop {
  locations?: Array<LocationType>;
  chargers?: Array<ChargerType>;
  width?: string;
}

interface ItemProp {
  location: LocationType;
}

// interface Location {
//   location: string;
//   id: number;
//   noChargers: number;
//   country: string;
//   lastUpdated: string;
//   chargers: number;
// }

export default TableItems;
