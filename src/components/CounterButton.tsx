type Props = {
  label: string;
  onClick(): void;
};

function CounterButton({ label, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default CounterButton;
