#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/videos/performance-higgsfield.mp4"
REF="$ROOT/public/videos/frames/04-peak.png"
PROMPT='Ultra-cinematic luxury nightclub DJ performance in Prague. Professional male DJ mixing on Pioneer CDJ-3000 and DJM-V10, orange laser beams through volumetric smoke, packed dancefloor silhouettes, slow dramatic camera dolly, amber club lighting, anamorphic flares, 24fps film grain. No text, no logos.'

if ! command -v higgsfield >/dev/null 2>&1; then
  echo "Install: npm install -g @higgsfield/cli"
  exit 1
fi

if ! higgsfield auth token >/dev/null 2>&1; then
  echo "Run: higgsfield auth login"
  exit 1
fi

echo "Generating via Higgsfield Kling 3.0 (pro)..."
URL=$(higgsfield generate create kling3_0 \
  --prompt "$PROMPT" \
  --start-image "$REF" \
  --duration 5 \
  --mode pro \
  --sound off \
  --aspect_ratio 16:9 \
  --wait \
  --wait-timeout 25m \
  --wait-interval 6s | tail -1)

echo "Downloading $URL"
curl -fsSL "$URL" -o "$OUT"
echo "Saved: $OUT"
