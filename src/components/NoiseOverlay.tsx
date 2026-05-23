import { motion } from 'motion/react';

export default function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none noise-overlay select-none"
      aria-hidden="true"
    />
  );
}
