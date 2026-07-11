import { useSyncExternalStore } from 'react';

type ScrollSnapshot = {
  fraction: number;
  progress: number;
};

let snapshot: ScrollSnapshot = { fraction: 0, progress: 0 };
const listeners = new Set<() => void>();

export function setScrollMetrics(fraction: number, progress: number) {
  const nextFraction = Math.round(fraction * 500) / 500;
  const nextProgress = Math.round(progress * 1000) / 1000;
  if (snapshot.fraction === nextFraction && snapshot.progress === nextProgress) return;
  snapshot = { fraction: nextFraction, progress: nextProgress };
  listeners.forEach((listener) => listener());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot() {
  return snapshot;
}

export function useScrollFraction() {
  return useSyncExternalStore(
    subscribe,
    () => getSnapshot().fraction,
    () => 0
  );
}

export function useScrollProgress() {
  return useSyncExternalStore(
    subscribe,
    () => getSnapshot().progress,
    () => 0
  );
}
