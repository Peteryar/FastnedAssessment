import Chargers from '../Chargers/Chargers';
import AddLocation from '../AddLocation/AddLocation';
import Button from '../Button/Button';
import './styles.css';
import AddCharger from '../AddCharger/AddCharger';
import { useCallback, useContext, useState } from 'react';
import { ChargerType, LocationInputType, LocationType } from '../../utils/types';
import { useHistory, useLocation } from 'react-router-dom';
import Store from '../../contexts/Store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { transformLocationData } from '../../utils/transformData';
import ACTIONS from '../../contexts/actions';

interface LocationState {
  location: LocationType;
  from: string;
}

function Location() {
  const { dispatch } = useContext(Store);
  const history = useHistory();
  const { state } = useLocation<LocationState>();
  const [location] = useState(state?.location || {});
  const [chargers, setChargers] = useState<Array<ChargerType>>(location.chargers || []);
  const [showModal, setShowModal] = useState(false);
  const [charger, editCharger] = useState<ChargerType>();

  const {
    register,
    handleSubmit,
    reset
    // watch
    // formState: { errors }
  } = useForm<LocationInputType>();

  const onSubmit: SubmitHandler<LocationInputType> = (data) => {
    const transformed = { id: location.id, ...transformLocationData(data) };
    if (state.from == 'Edit_View_Screen') {
      dispatch({ type: ACTIONS.EDIT_LOCATION, payload: { ...transformed, chargers } });
    } else {
      dispatch({ type: ACTIONS.ADD_LOCATION, payload: { ...transformed, chargers } });
    }
    history.push('/locations');
  };

  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const addCharger = (charger: ChargerType) => {
    setChargers([...chargers, charger]);
    setShowModal(false);
  };

  const updateCharger = useCallback(
    (charger: ChargerType) => {
      const index = chargers.findIndex((ch) => ch.id === charger.id);
      chargers[index] = charger;
    },
    [chargers]
  );

  const removeCharger = useCallback(
    (id: number) => {
      setChargers(chargers.filter((charger) => charger.id !== id));
    },
    [chargers]
  );

  const deleteLocation = useCallback(() => {
    dispatch({ type: ACTIONS.DELETE, payload: location });
    history.push('/locations');
  }, []);

  return (
    <div className="location-con">
      <AddLocation reset={reset} register={register} showModal={toggleModal} location={location} />
      <Chargers
        showModal={toggleModal}
        editCharger={useCallback((charger: ChargerType) => editCharger(charger), [])}
        chargers={chargers}
        removeCharger={removeCharger}
      />
      <span
        style={{ justifyContent: state.from == 'Add_Location' ? 'flex-end' : undefined }}
        className="location-button-con">
        {state.from === 'Edit_View_Screen' && (
          <Button
            icon="close"
            color="gray"
            width={200}
            height={30}
            text="Remove Location"
            handleClick={deleteLocation}
          />
        )}
        <Button
          icon="save"
          width={150}
          height={30}
          text="Save Location"
          handleClick={useCallback(handleSubmit(onSubmit), [])}
        />
      </span>
      {showModal && (
        <AddCharger
          updateCharger={updateCharger}
          charger={charger}
          addCharger={(charger: ChargerType) => addCharger(charger)}
          hideModal={toggleModal}
        />
      )}
    </div>
  );
}

export default Location;
