import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED_COUNTRIES: Record<string, string> = {
  "120": "Cameroun",
  "384": "Côte d'Ivoire",
  "276": "Allemagne",
  "826": "Royaume-Uni",
  "724": "Espagne",
  "686": "Sénégal",
  "250": "France",
  "056": "Belgique",
  "332": "Haïti",
  "214": "Rép. Dominicaine",
};

const WorldMap = memo(() => {
  const [tooltip, setTooltip] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <ComposableMap
        projectionConfig={{ scale: 160, center: [0, 20] }}
        className="w-full h-auto"
        style={{ maxHeight: 420 }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.id;
              const isVisited = id in VISITED_COUNTRIES;
              const name = VISITED_COUNTRIES[id];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (isVisited && name) setTooltip(name);
                  }}
                  onMouseLeave={() => setTooltip("")}
                  style={{
                    default: {
                      fill: isVisited
                        ? "hsl(20, 50%, 45%)"
                        : "hsl(40, 20%, 88%)",
                      stroke: "hsl(40, 15%, 78%)",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: isVisited
                        ? "hsl(20, 55%, 38%)"
                        : "hsl(40, 18%, 84%)",
                      stroke: "hsl(40, 15%, 78%)",
                      strokeWidth: 0.4,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
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
          className="absolute bg-foreground text-background text-xs px-3 py-1.5 rounded-md pointer-events-none shadow-md z-10 -translate-x-1/2 -translate-y-full"
          style={{ left: mouse.x, top: mouse.y - 10 }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
