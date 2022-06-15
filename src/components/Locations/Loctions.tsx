import Table from '../Table/Table';
import './styles.css';

function Locations() {
  return (
    <div className="locations-con">
      <section>
        <h3>Locations</h3>
        <button> + Add Location</button>
      </section>
      <Table />
    </div>
  );
}

export default Locations;
