# Aureon Watches

Aureon Watches is a visual asset workspace for watch product imagery. The repository currently contains generated PNG watch images in the `Watch/` folder and is ready for additional product shots, campaign images, or placeholders as the collection grows.

## Contents

```text
.
├── AGENTS.md
├── README.md
└── Watch/
    ├── ChatGPT Image Feb 5, 2026, 03_48_49 PM.png
    ├── ChatGPT Image Feb 5, 2026, 03_49_04 PM.png
    ├── ChatGPT Image Feb 5, 2026, 03_49_07 PM.png
    └── ...
```

## Image Assets

All current watch images are PNG files at `1024 x 1536`, which works well for portrait product cards, catalog layouts, social posts, and hero crops.

| Asset | Size | Preview |
| --- | --- | --- |
| `ChatGPT Image Feb 5, 2026, 03_48_49 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_48_49%20PM.png" width="120" alt="Aureon watch asset 01"> |
| `ChatGPT Image Feb 5, 2026, 03_49_04 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_04%20PM.png" width="120" alt="Aureon watch asset 02"> |
| `ChatGPT Image Feb 5, 2026, 03_49_07 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_07%20PM.png" width="120" alt="Aureon watch asset 03"> |
| `ChatGPT Image Feb 5, 2026, 03_49_10 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_10%20PM.png" width="120" alt="Aureon watch asset 04"> |
| `ChatGPT Image Feb 5, 2026, 03_49_13 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_13%20PM.png" width="120" alt="Aureon watch asset 05"> |
| `ChatGPT Image Feb 5, 2026, 03_49_16 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_16%20PM.png" width="120" alt="Aureon watch asset 06"> |
| `ChatGPT Image Feb 5, 2026, 03_49_23 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_49_23%20PM.png" width="120" alt="Aureon watch asset 07"> |
| `ChatGPT Image Feb 5, 2026, 03_51_12 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2003_51_12%20PM.png" width="120" alt="Aureon watch asset 08"> |
| `ChatGPT Image Feb 5, 2026, 04_03_03 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2004_03_03%20PM.png" width="120" alt="Aureon watch asset 09"> |
| `ChatGPT Image Feb 5, 2026, 04_14_09 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2004_14_09%20PM.png" width="120" alt="Aureon watch asset 10"> |
| `ChatGPT Image Feb 5, 2026, 04_16_12 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2004_16_12%20PM.png" width="120" alt="Aureon watch asset 11"> |
| `ChatGPT Image Feb 5, 2026, 04_19_27 PM.png` | 1024 x 1536 | <img src="Watch/ChatGPT%20Image%20Feb%205,%202026,%2004_19_27%20PM.png" width="120" alt="Aureon watch asset 12"> |

## Adding More Images

Place new watch images in the `Watch/` folder. If a design, website, or catalog needs more images than are currently available, reuse the existing images as filler until final assets are added.

Recommended naming convention for future files:

```text
Watch/aureon-watch-collection-model-01.png
Watch/aureon-watch-collection-model-02.png
Watch/aureon-watch-lifestyle-01.png
Watch/aureon-watch-detail-01.png
```

Keep original high-resolution files when possible, then create cropped or compressed derivatives separately if a web build needs optimized assets.

## Usage Notes

- Use the images in `Watch/` as the source set for product cards, lookbooks, landing pages, social posts, and mockups.
- Reuse existing images for placeholder slots when a layout requires more watches than the current asset count.
- Preserve the original PNGs and avoid overwriting them during edits.
- When adding a web or app implementation later, create a separate source folder such as `src/` or `app/` and keep the watch image library in `Watch/`.

## Website

This repository includes a Vite and React website for the Aureon Watches storefront.

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
