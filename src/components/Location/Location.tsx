import Chargers from '../Chargers/Chargers';
import AddLocation from '../AddLocation/AddLocation';
import Button from '../Button/Button';
import './styles.css';
import AddCharger from '../AddCharger/AddCharger';
import { useContext, useEffect, useState } from 'react';
import { ChargerType, LocationInputType, LocationType } from '../../utils/types';
import { useHistory, useLocation } from 'react-router-dom';
import Store from '../../contexts/Store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { transformLocationData } from '../../utils/transformData';

interface LocationState {
  location: LocationType;
}

function Location() {
  const { dispatch } = useContext(Store);
  const history = useHistory();
  const { state } = useLocation<LocationState>();
  const [location, setLocation] = useState(state?.location || {});
  const [chargers, setChargers] = useState<Array<ChargerType>>(location.chargers || []);
  const [showModal, setShowModal] = useState(false);

  const updateOrAddLocation = (data: LocationType) => {
    setLocation({ ...data, chargers });
    dispatch;
  };

  const {
    register,
    handleSubmit,
    reset
    // watch
    // formState: { errors }
  } = useForm<LocationInputType>();

  const onSubmit: SubmitHandler<LocationInputType> = (data) => {
    const location = transformLocationData(data);
    console.log('after...', location);
    dispatch({ type: 'ADD_LOCATION', payload: { ...location, chargers } });
    history.push('/locations');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addCharger = (charger: ChargerType) => {
    setChargers([...chargers, charger]);
    setShowModal(false);
  };
  useEffect(() => {
    console.log('country', location);
    reset({
      Name: location.name,
      City: location.city,
      'Location No.': location.location,
      'Postal Code': location.postalCode,
      Country: location.country
    });
  }, []);

  return (
    <div className="location-con">
      <AddLocation
        register={register}
        updateOrAddLocation={(val: LocationType) => updateOrAddLocation(val)}
        showModal={toggleModal}
        location={location}
      />
      <Chargers chargers={chargers} />
      <span className="location-button-con">
        <Button
          icon="save"
          width={150}
          height={30}
          text="Save Location"
          handleClick={handleSubmit(onSubmit)}
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
