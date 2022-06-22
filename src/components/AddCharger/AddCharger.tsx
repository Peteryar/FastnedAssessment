import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { transformChargerData } from '../../utils/transformData';
import { ChargerInputType, ChargerType } from '../../utils/types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { SelectInput, TextInput } from '../Input/Input';
import Modal from '../Modal/Modal';
import './styles.css';

function AddCharger({ hideModal, addCharger, charger, updateCharger }: Props) {
  const [compType, setCompType] = useState('Add');
  const {
    register,
    handleSubmit,
    reset
    // formState: { errors }
  } = useForm<ChargerInputType>();

  useEffect(() => {
    if (charger?.id) {
      setCompType('Edit');
    } else {
      setCompType('Add');
    }
    reset({
      'Serial Number': charger?.serialNumber,
      Status: charger?.status,
      'Charger Type': charger?.type
    });
  }, []);

  const onSubmit: SubmitHandler<ChargerInputType> = (data) => {
    const transformed = transformChargerData(data);
    if (compType === 'Edit') {
      console.log('submitting edit');
      updateCharger({ ...transformed, id: charger?.id });
    } else {
      console.log('adding charger');
      addCharger(transformed);
    }
  };

  return (
    <Modal>
      <div className="add-charger-con">
        <section className="add-charger-top">
          {compType === 'Add' ? <h1>Add Charger</h1> : <h1>Edit Charger</h1>}
          <Icon name="close" handleClick={hideModal} />
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className="add-charger-mid">
          <SelectInput<ChargerInputType>
            options={['CONNECTED', 'NOT_CONNECTED', 'REMOVED']}
            label="Status"
            register={register}
            icon="arrow_drop_down"
            width="30%"
            required={true}
          />
          <SelectInput<ChargerInputType>
            options={['HPC', 'T52', 'T53C']}
            label="Charger Type"
            register={register}
            icon="arrow_drop_down"
            width="30%"
            required={true}
          />
          <TextInput<ChargerInputType>
            required={true}
            label="Serial Number"
            register={register}
            width="30%"
          />
        </form>
        <section className="add-charger-btm">
          <Button text="Save" handleClick={handleSubmit(onSubmit)} />
          <Button color="#e2e2e2" text="Cancel" handleClick={hideModal} />
        </section>
      </div>
    </Modal>
  );
}

interface Props {
  hideModal: React.MouseEventHandler<HTMLSpanElement>;
  addCharger: (charger: ChargerType) => void;
  charger?: ChargerType;
  updateCharger: Function;
}

export default AddCharger;
