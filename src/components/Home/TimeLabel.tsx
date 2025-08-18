interface TimeLabelProps {
  hour: number;
}

export default function TimeLabel({ hour }: TimeLabelProps) {
  return (
    <button className="flex rounded bg-transparent p-2 text-center">
      <span>{hour.toFixed(2)}:00</span>
    </button>
  );
}
