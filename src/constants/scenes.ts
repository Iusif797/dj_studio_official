export const SCENE_KEYS = [
  'intro',
  'isolators',
  'vu-meters',
  'vinyl',
  'internals',
  'cables',
  'pricing',
  'formats',
  'venues',
  'testimonials',
  'faq',
] as const;

export type SceneKey = (typeof SCENE_KEYS)[number];

export const POST_MIXER_SCENES: SceneKey[] = ['pricing', 'formats', 'venues', 'testimonials', 'faq'];

export const SCENE_POSITIONS = [
  { scale: 1.0, x: 0, y: -2, rotate: -7, rotateX: 28, rotateY: -8 },
  { scale: 2.1, x: -14, y: 38, rotate: 8, rotateX: 18, rotateY: 12 },
  { scale: 2.4, x: 16, y: -18, rotate: -12, rotateX: 12, rotateY: -6 },
  { scale: 1.95, x: -18, y: -24, rotate: 26, rotateX: 16, rotateY: 8 },
  { scale: 12.0, x: 10, y: 15, rotate: -10, rotateX: 35, rotateY: -15 },
  { scale: 5.5, x: -15, y: -20, rotate: 18, rotateX: -20, rotateY: 40 },
  { scale: 1.15, x: -22, y: 1, rotate: 2, rotateX: 5, rotateY: -2 },
  { scale: 1.0, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
  { scale: 1.0, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
  { scale: 1.0, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
  { scale: 1.0, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
];
