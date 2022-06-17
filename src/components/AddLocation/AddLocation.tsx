import { useForm, SubmitHandler } from 'react-hook-form';
import { LocationInputType } from '../../utils/types';
import Button from '../Button/Button';
import ViewContainer from '../Container/ViewContainer';
import { TextInput } from '../Input/Input';
import './styles.css';

function AddLocation({ showModal }: Props) {
  const {
    register,
    handleSubmit,
    watch
    // formState: { errors }
  } = useForm<LocationInputType>();
  const onSubmit: SubmitHandler<LocationInputType> = (data) => console.log(data);

  console.log(watch('Name'));

  return (
    <ViewContainer icon="Add" title="Add Location">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput width="45%" label="Name" register={register} />
        <TextInput width="45%" label="Location No." register={register} />
        <TextInput width="30%" label="City" register={register} />
        <TextInput width="30%" label="Postal Code" register={register} />
        <TextInput width="30%" label="Country" icon="arrow_drop_down" register={register} />
        {/* {errors && <span>This field is required</span>} */}
        <span
          style={{
            boxSizing: 'border-box',
            alignSelf: 'center',
            justifyContent: 'flex-end',
            width: '100%'
          }}>
          <Button icon="Add" width={150} height={30} text="Add Charger" handleClick={showModal} />
        </span>
      </form>
    </ViewContainer>
  );
}

interface Props {
  showModal: React.MouseEventHandler<HTMLButtonElement>;
}

export default AddLocation;
