import { MouseEventHandler } from 'react';
import './styles.css';

function Button({ text, handleClick, icon, width, height }: Prop) {
  return (
    <button style={{ width, height }} className="btn" onClick={handleClick}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <p>{text}</p>
    </button>
  );
}

interface Prop {
  width?: number;
  height?: number;
  icon?: string;
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default Button;
