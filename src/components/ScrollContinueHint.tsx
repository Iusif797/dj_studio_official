import { ChevronDown } from 'lucide-react';
import { useScrollFraction } from '../hooks/useScrollMetrics';

type ScrollContinueHintProps = {
  label: string;
  onContinue: (index: number) => void;
};

export default function ScrollContinueHint({ label, onContinue }: ScrollContinueHintProps) {
  const scrollFraction = useScrollFraction();
  if (scrollFraction >= 10) return null;

  return (
    <div
      className="hidden md:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-white/40 hover:text-white"
      onClick={() => onContinue(Math.min(10, Math.round(scrollFraction) + 1))}
    >
      <span className="font-mono text-[8px] tracking-[0.22em] uppercase">{label}</span>
      <ChevronDown size={14} className="animate-bounce" />
    </div>
  );
}
