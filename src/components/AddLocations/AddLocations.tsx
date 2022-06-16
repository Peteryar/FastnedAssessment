import { useForm, SubmitHandler } from 'react-hook-form';
import { Location } from '../../utils/types';
import Button from '../Button/Button';
import TextInput from '../Input/TextInput';
import './styles.css';

function AddLocation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Location>();
  const onSubmit: SubmitHandler<Location> = (data) => console.log(data);

  console.log(watch('Name'));

  return (
    <div className="add-location-con">
      <h4 className="add-title">
        <span style={{ fontWeight: 'bold' }} className="material-symbols-outlined">
          Add
        </span>
        Add Location
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput width="45%" label="Name" register={register} />
        <TextInput width="45%" label="Location No." register={register} />
        <TextInput width="30%" label="City" register={register} />
        <TextInput width="30%" label="Postal Code" register={register} />
        <TextInput width="30%" label="Country" icon="arrow_drop_down" register={register} />
        {errors && <span>This field is required</span>}
        <Button width={150} height={30} text="Add Charger" handleClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
}

export default AddLocation;
