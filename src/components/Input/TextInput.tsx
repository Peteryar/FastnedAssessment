import { UseFormRegister, Path } from 'react-hook-form';
import { Location } from '../../utils/types';
import './styles.css';

function TextInput({ icon, register, required, label, width }: Props) {
  return (
    <div style={{ width }} className="input-con">
      <input placeholder={label} {...register(label, { required })} />
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </div>
  );
}

interface Props {
  register: UseFormRegister<Location>;
  required?: boolean;
  icon?: string;
  label: Path<Location>;
  width?: string;
}

export default TextInput;
