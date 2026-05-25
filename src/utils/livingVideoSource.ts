import { LIVING_HIGGSFIELD_SRC, LIVING_VIDEO_SRC } from '../constants/livingVideo';

export async function getLivingVideoSrc(): Promise<string> {
  try {
    const res = await fetch(LIVING_HIGGSFIELD_SRC, { method: 'HEAD' });
    if (res.ok) return LIVING_HIGGSFIELD_SRC;
  } catch {
    return LIVING_VIDEO_SRC;
  }
  return LIVING_VIDEO_SRC;
}
