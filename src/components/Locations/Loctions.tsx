import Button from '../Button/Button';
import Table from '../Table/Table';
import './styles.css';

function Locations() {
  return (
    <div className="locations-con">
      <section>
        <h3>Locations</h3>
        <Button text="Add Location" />
      </section>
      <Table />
    </div>
  );
}

export default Locations;
