import { useState, memo, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED_COUNTRIES: Record<string, { en: string; fr: string }> = {
  "120": { en: "Cameroon", fr: "Cameroun" },
  "384": { en: "Ivory Coast", fr: "Côte d'Ivoire" },
  "276": { en: "Germany", fr: "Allemagne" },
  "826": { en: "United Kingdom", fr: "Royaume-Uni" },
  "724": { en: "Spain", fr: "Espagne" },
  "686": { en: "Senegal", fr: "Sénégal" },
  "250": { en: "France", fr: "France" },
  "056": { en: "Belgium", fr: "Belgique" },
  "332": { en: "Haiti", fr: "Haïti" },
  "214": { en: "Dominican Republic", fr: "Rép. Dominicaine" },
};

// French Guiana bounding box (approximate) to exclude from "France" highlight
const isInFrenchGuiana = (geo: any): boolean => {
  try {
    const coords = geo.geometry?.coordinates;
    if (!coords) return false;
    // Check if any polygon centroid falls in South America (French Guiana area)
    const flat = geo.geometry.type === "MultiPolygon" ? coords : [coords];
    for (const polygon of flat) {
      const ring = polygon[0];
      if (!ring || ring.length === 0) continue;
      const avgLon = ring.reduce((s: number, c: number[]) => s + c[0], 0) / ring.length;
      const avgLat = ring.reduce((s: number, c: number[]) => s + c[1], 0) / ring.length;
      // French Guiana is roughly at lon -53, lat 4
      if (avgLon < -40 && avgLat < 10 && avgLat > -5) return true;
    }
  } catch {
    // ignore
  }
  return false;
};

interface WorldMapProps {
  lang?: "en" | "fr";
}

const WorldMap = memo(({ lang = "en" }: WorldMapProps) => {
  const [tooltip, setTooltip] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div className="relative w-full" onMouseMove={handleMouseMove}>
      <ComposableMap
        projectionConfig={{ scale: 155, center: [10, 20] }}
        className="w-full h-auto"
        style={{ maxHeight: 380 }}
        width={800}
        height={420}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.id;
              const isVisited = id in VISITED_COUNTRIES;
              const name = isVisited ? VISITED_COUNTRIES[id][lang] : "";

              // For France (250), check if this specific polygon is French Guiana
              const isFranceOverseas = id === "250" && isInFrenchGuiana(geo);
              const shouldHighlight = isVisited && !isFranceOverseas;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (shouldHighlight && name) setTooltip(name);
                  }}
                  onMouseLeave={() => setTooltip("")}
                  style={{
                    default: {
                      fill: shouldHighlight
                        ? "hsl(25, 40%, 52%)"
                        : "hsl(38, 25%, 90%)",
                      stroke: "hsl(38, 18%, 82%)",
                      strokeWidth: 0.3,
                      outline: "none",
                    },
                    hover: {
                      fill: shouldHighlight
                        ? "hsl(25, 45%, 44%)"
                        : "hsl(38, 22%, 87%)",
                      stroke: "hsl(38, 18%, 82%)",
                      strokeWidth: 0.3,
                      outline: "none",
                      cursor: shouldHighlight ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          className="absolute text-xs px-2.5 py-1 rounded pointer-events-none z-10 -translate-x-1/2 -translate-y-full font-sans"
          style={{
            left: mouse.x,
            top: mouse.y - 8,
            backgroundColor: "hsl(25, 40%, 52%)",
            color: "hsl(40, 33%, 96%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
