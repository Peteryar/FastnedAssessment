import Chargers from '../Chargers/Chargers';
import AddLocation from '../AddLocation/AddLocation';
import Button from '../Button/Button';
import './styles.css';
import AddCharger from '../AddCharger/AddCharger';
import { useState } from 'react';
import { ChargerType } from '../../utils/types';

function Location() {
  const [chargers, setChargers] = useState<Array<ChargerType>>([]);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('Adding location data....');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addCharger = (charger: ChargerType) => {
    setChargers([...chargers, charger]);
    setShowModal(false);
  };

  return (
    <div className="location-con">
      <AddLocation showModal={toggleModal} />
      <Chargers chargers={chargers} />
      <span className="location-button-con">
        <Button
          icon="save"
          width={150}
          height={30}
          text="Save Location"
          handleClick={handleSubmit}
        />
      </span>
      {showModal && (
        <AddCharger
          addCharger={(charger: ChargerType) => addCharger(charger)}
          hideModal={toggleModal}
        />
      )}
    </div>
  );
}

export default Location;
