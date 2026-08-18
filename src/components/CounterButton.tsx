type Props = {
  label: string;
  onClick(): void;
};

function CounterButton({ label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>;
}

export default CounterButton;
