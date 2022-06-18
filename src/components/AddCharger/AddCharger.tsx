import { SubmitHandler, useForm } from 'react-hook-form';
import { ChargerType } from '../../utils/types';
import Button from '../Button/Button';
import { SelectInput, TextInput } from '../Input/Input';
import Modal from '../Modal/Modal';
import './styles.css';

function AddCharger({ hideModal, addCharger }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChargerType>();
  const onSubmit: SubmitHandler<ChargerType> = (data) => {
    console.log(data);
    addCharger(data);
    console.log('errors--->', errors);
  };
  return (
    <Modal>
      <div className="add-charger-con">
        <section className="add-charger-top">
          <h1>Add Charger</h1>
          <span onClick={hideModal} className="material-symbols-outlined">
            close
          </span>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className="add-charger-mid">
          <SelectInput<ChargerType>
            options={['CONNECTED', 'NOT_CONNECTED']}
            label="Status"
            register={register}
            icon="arrow_drop_down"
            width="30%"
            required={true}
          />
          <SelectInput<ChargerType>
            options={['HPC', 'T52', 'T53C']}
            label="Charger Type"
            register={register}
            icon="arrow_drop_down"
            width="30%"
            required={true}
          />
          <TextInput<ChargerType>
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
}

export default AddCharger;
