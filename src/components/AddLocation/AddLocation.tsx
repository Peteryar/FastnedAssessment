import { memo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { LocationInputType, LocationType } from '../../utils/types';
import Button from '../Button/Button';
import ViewContainer from '../Container/ViewContainer';
import { SelectInput, TextInput } from '../Input/Input';
import './styles.css';

function AddLocation({ showModal, register, location }: Props<LocationInputType>) {
  return (
    <ViewContainer
      icon={location.name ? 'pin_drop' : 'Add'}
      title={location.name || 'Add Location'}>
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

interface Props<TFormValues> {
  showModal: React.MouseEventHandler<HTMLButtonElement>;
  updateOrAddLocation: (val: LocationType) => void;
  register: UseFormRegister<TFormValues>;
  location: LocationType;
}

export default memo(AddLocation);
