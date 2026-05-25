import { useScrollProgress } from '../hooks/useScrollMetrics';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#ff7849] to-[#ff7849]/60 z-[60]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
