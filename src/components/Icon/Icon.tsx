import { MouseEventHandler } from 'react';

function Icon({ name, handleClick, color }: Prop) {
  return (
    <span style={{ color }} onClick={handleClick} className="material-symbols-outlined">
      {name}
    </span>
  );
}

interface Prop {
  name: string;
  handleClick?: MouseEventHandler<HTMLSpanElement>;
  color?: string;
}

export default Icon;
