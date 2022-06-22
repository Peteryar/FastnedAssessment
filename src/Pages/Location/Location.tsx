import Chargers from '../../components/Chargers/Chargers';
import AddLocation from '../../components/AddLocation/AddLocation';
import Button from '../../components/Button/Button';
import './styles.css';
import AddCharger from '../../components/AddCharger/AddCharger';
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
    console.log('chargers----->', chargers);
    const transformed = { id: location.id, ...transformLocationData(data) };
    if (state.from == 'Edit_View_Screen') {
      dispatch({ type: ACTIONS.EDIT_LOCATION, payload: { ...transformed, chargers } });
    } else {
      dispatch({ type: ACTIONS.ADD_LOCATION, payload: { ...transformed, chargers } });
    }
    history.push('/locations');
  };

  const toggleModal = useCallback(() => {
    if (showModal) editCharger(undefined);
    setShowModal(!showModal);
  }, [showModal]);

  const addCharger = (charger: ChargerType) => {
    console.log('adding charger----->', charger);
    setChargers([...chargers, charger]);
    setShowModal(false);
  };

  const setEdittingCharger = useCallback((charger: ChargerType) => editCharger(charger), []);

  const updateCharger = (charger: ChargerType) => {
    const index = chargers.findIndex((ch) => ch.id === charger.id);
    console.log('charger to update...', chargers[index]);
    chargers[index] = charger;
    setChargers([...chargers]);
    setShowModal(false);
  };

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
        showModal={useCallback(() => setShowModal(!showModal), [])}
        editCharger={setEdittingCharger}
        chargers={chargers}
        removeCharger={removeCharger}
      />
      <span
        style={{ justifyContent: state.from == 'Add_Location' ? 'flex-end' : undefined }}
        className="location-button-con">
        {state.from === 'Edit_View_Screen' && (
          <Button
            color="#e2e2e2"
            icon="close"
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
          handleClick={handleSubmit(onSubmit)}
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
