import Chargers from '../Chargers/Chargers';
import AddLocation from '../AddLocation/AddLocation';
import Button from '../Button/Button';
import './styles.css';
import AddCharger from '../AddCharger/AddCharger';
import { useState } from 'react';

function Location() {
  const [showModal, setShowModal] = useState(true);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('Adding location data....');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="location-con">
      <AddLocation showModal={toggleModal} />
      <Chargers />
      <span className="location-button-con">
        <Button
          icon="save"
          width={150}
          height={30}
          text="Save Location"
          handleClick={handleSubmit}
        />
      </span>
      {showModal && <AddCharger hideModal={toggleModal} />}
    </div>
  );
}

export default Location;
