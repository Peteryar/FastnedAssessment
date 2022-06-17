import { SubmitHandler, useForm } from 'react-hook-form';
import { ChargerInputType } from '../../utils/types';
import Button from '../Button/Button';
import { SelectInput, TextInput } from '../Input/Input';
import Modal from '../Modal/Modal';
import './styles.css';

function AddCharger({ hideModal }: Props) {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<ChargerInputType>();
  const onSubmit: SubmitHandler<ChargerInputType> = (data) => console.log(data);
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
          <SelectInput<ChargerInputType>
            options={['CONNECTED', 'NOT_CONNECTED']}
            label="Status"
            register={register}
            icon="arrow_drop_down"
          />
          <SelectInput<ChargerInputType>
            options={['HPC', 'T52', 'T53C']}
            label="Charger Type"
            register={register}
            icon="arrow_drop_down"
            width="30%"
          />
          <TextInput<ChargerInputType> label="Serial Number" register={register} width="30%" />
        </form>
        <section className="add-charger-btm">
          <Button text="Save" handleClick={handleSubmit(onSubmit)} />
          <Button color="#e2e2e2" text="Cancel" handleClick={() => console.log('canceling')} />
        </section>
      </div>
    </Modal>
  );
}

interface Props {
  hideModal: React.MouseEventHandler<HTMLSpanElement>;
}

export default AddCharger;
