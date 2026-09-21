type Props = {
  buttonLabel: string;
  onClick(): void;
};

function CounterButton({ buttonLabel, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };

  return <button onClick={handleClick}>{buttonLabel}</button>;
}

export default CounterButton;
