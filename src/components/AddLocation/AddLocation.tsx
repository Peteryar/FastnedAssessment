import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { LocationInputType } from '../../utils/types';
import Button from '../Button/Button';
import ViewContainer from '../Container/ViewContainer';
import { SelectInput, TextInput } from '../Input/Input';
import './styles.css';

function AddLocation({ showModal }: Props) {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors }
  } = useForm<LocationInputType>();
  // const onSubmit: SubmitHandler<LocationInputType> = (data) => console.log(data);

  console.log('error', errors);

  return (
    <ViewContainer icon="Add" title="Add Location">
      <div className="location-form">
        <TextInput required={true} width="45%" label="Name" register={register} />
        <TextInput required={true} width="45%" label="Location No." register={register} />
        <TextInput required={true} width="30%" label="City" register={register} />
        <TextInput required={true} width="30%" label="Postal Code" register={register} />
        <SelectInput
          options={['NL', 'DE', 'UK']}
          width="30%"
          label="Country"
          icon="arrow_drop_down"
          register={register}
          required={true}
        />
        {/* {errors && <span>This field is required</span>} */}
        <span className="add-charger-btn">
          <Button icon="Add" width={150} height={30} text="Add Charger" handleClick={showModal} />
        </span>
      </div>
    </ViewContainer>
  );
}

interface Props {
  showModal: React.MouseEventHandler<HTMLButtonElement>;
}

export default memo(AddLocation);
