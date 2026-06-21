# TikTok Shop Market Simulation Game

React + Vite + Anime.js app for a Political Economy presentation about TikTok Shop as a market intermediary, platform business actor, and possible rule-maker.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is written to `dist/`.

## Asset pack

The game uses the cropped transparent PNG asset pack under `public/assets/`.
The aggregate sheet and preview image are intentionally excluded.

Visual placement, layer depth, opacity, scale, and choice reactions are mapped in:

```text
src/data/sceneAssets.js
```

Update that file to move an asset between scenes or adjust its parallax behavior. The text, choices, metrics, result logic, real data, and quiz stay in their existing data/component files.

## Deploy

- Vercel: Framework preset `Vite`, build command `npm run build`, output directory `dist`.
- Cloudflare Pages: build command `npm run build`, output directory `dist`.
