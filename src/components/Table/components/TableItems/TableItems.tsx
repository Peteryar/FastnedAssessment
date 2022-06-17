import { LocationType } from '../../../../utils/types';
import './styles.css';

function TableItems({ items, width }: Prop) {
  return (
    <div style={{ width }} className="table-items-con">
      {items?.map((item, i) => (
        <Item location={item} key={i} />
      ))}
      {items?.length == 0 && (
        <p style={{ textAlign: 'center' }}>No Charger has been added to this location</p>
      )}
    </div>
  );
}

function Item({ location }: ItemProp) {
  return (
    <div className="table-item-con">
      <p>{location.name}</p>
      <p>{location.number}</p>
      <p>{location.chargers}</p>
      <p>{location.country}</p>
      <p>{location.lastUpdated}</p>
      <span>
        <button>Edit</button>
      </span>
    </div>
  );
}

interface Prop {
  items: Array<LocationType>;
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
