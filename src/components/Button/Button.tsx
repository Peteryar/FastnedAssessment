import { memo, MouseEventHandler } from 'react';
import './styles.css';

function Button({ text, handleClick, icon, width, height, color, margin }: Prop) {
  console.log('button rendering...', text);
  return (
    <button
      style={{ width, height, backgroundColor: color, margin }}
      className="btn"
      onClick={handleClick}>
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
  color?: string;
  margin?: number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default memo(Button);
