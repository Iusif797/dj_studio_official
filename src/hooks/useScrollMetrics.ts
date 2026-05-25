import { useSyncExternalStore } from 'react';

type ScrollSnapshot = {
  fraction: number;
  progress: number;
};

let snapshot: ScrollSnapshot = { fraction: 0, progress: 0 };
const listeners = new Set<() => void>();

export function setScrollMetrics(fraction: number, progress: number) {
  if (snapshot.fraction === fraction && snapshot.progress === progress) return;
  snapshot = { fraction, progress };
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
