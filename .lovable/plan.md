

## Problem

The map shows all countries in grey because the TopoJSON file (`world-atlas@2/countries-110m.json`) uses **numeric ISO 3166-1 codes** (e.g. `"120"` for Cameroon), not ISO_A3 letter codes (e.g. `"CMR"`). The current code checks for `ISO_A3` which doesn't exist in this dataset, so no country ever matches.

Additionally, the map style (grey/dark fills) doesn't match the warm, editorial design of the site.

## Plan

### 1. Fix country matching — use numeric ISO codes

Replace the `VISITED_COUNTRIES` mapping to use numeric ISO 3166-1 codes:

| Country | Numeric code |
|---|---|
| Cameroun | 120 |
| Côte d'Ivoire | 384 |
| Allemagne | 276 |
| Angleterre (UK) | 826 |
| Espagne | 724 |
| Sénégal | 686 |
| France | 250 |
| Belgique | 056 |
| Haïti | 332 |
| Rép. Dominicaine | 214 |

Note: Guadeloupe (GLP) is a French overseas territory and won't appear as a separate country in 110m resolution. We'll add a small note or skip it.

Match using `geo.id` (which contains the numeric code as a string).

### 2. Improve visual style to match the site DA

- Use a softer, warmer palette: non-visited countries in a light warm beige (`hsl(40, 20%, 88%)`), visited countries in a warm terracotta/brown accent color (e.g. `hsl(20, 50%, 45%)`) that complements the Lora serif / warm background aesthetic.
- Lighter, thinner borders.
- Subtle hover effect on visited countries only.

### 3. Tooltip on hover (already coded, will work once matching is fixed)

The existing `onMouseEnter`/`onMouseLeave` + tooltip logic is correct — it will work once the ISO codes are fixed.

### Files to modify

- `src/components/WorldMap.tsx` — switch to numeric codes, update color palette

