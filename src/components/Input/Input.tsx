import { UseFormRegister, Path } from 'react-hook-form';
import './styles.css';

const TextInput = <TFormValues extends Record<string, unknown>>({
  icon,
  register,
  required,
  label,
  width
}: Props<TFormValues>) => {
  return (
    <div style={{ width }} className="input-wrapper">
      <p className="input-label">{label}</p>
      <div className="input-con">
        <input placeholder={label} {...register(label, { required })} />
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </div>
    </div>
  );
};

const SelectInput = <TFormValues extends Record<string, unknown>>({
  icon,
  register,
  required,
  label,
  width,
  options
}: Props<TFormValues>) => {
  return (
    <div style={{ width }} className="input-wrapper">
      <p className="input-label">{label}</p>
      <div className="input-con">
        <select {...register(label, { required })} aria-label={label}>
          {options?.map((option, key) => (
            <option key={key}>{option}</option>
          ))}
        </select>
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </div>
    </div>
  );
};

type Props<TFormValues> = {
  register: UseFormRegister<TFormValues>;
  required?: boolean;
  icon?: string;
  label: Path<TFormValues>;
  width?: string;
  options?: Array<string>;
};

export { TextInput, SelectInput };
