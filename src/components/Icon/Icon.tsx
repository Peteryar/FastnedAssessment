function Icon({ name }: Prop) {
  return <span className="material-symbols-outlined">{name}</span>;
}

interface Prop {
  name: string;
}

export default Icon;
