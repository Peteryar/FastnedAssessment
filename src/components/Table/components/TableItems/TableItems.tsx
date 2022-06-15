import './styles.css';

function TableItems({ locations }: Prop) {
  return (
    <div className="table-items-con">
      {locations.map((item, i) => (
        <Item location={item} key={i} />
      ))}
    </div>
  );
}

function Item({ location }: ItemProp) {
  return (
    <div className="table-item-con">
      <p>{location.location}</p>
      <p>{location.id}</p>
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
  locations: Array<Location>;
}

interface ItemProp {
  location: Location;
}

interface Location {
  location: string;
  id: number;
  noChargers: number;
  country: string;
  lastUpdated: string;
  chargers: number;
}

export default TableItems;
