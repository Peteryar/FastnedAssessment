function Button({ text }: Prop) {
  const styles = {
    width: 150,
    height: 40,
    backgroundColor: '#ffdd30',
    display: 'flex',
    justifyContent: 'space-around'
  };
  return (
    <button style={styles}>
      <span className="material-symbols-outlined">add</span>
      <p>{text}</p>
    </button>
  );
}

interface Prop {
  text: string;
}

export default Button;
