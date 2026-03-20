import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED_COUNTRIES: Record<string, string> = {
  CMR: "Cameroun",
  CIV: "Côte d'Ivoire",
  DEU: "Allemagne",
  GBR: "Angleterre",
  ESP: "Espagne",
  SEN: "Sénégal",
  FRA: "France",
  BEL: "Belgique",
  HTI: "Haïti",
  GLP: "Guadeloupe",
  DOM: "Rép. Dominicaine",
};

const VISITED_ISO_A3 = new Set(Object.keys(VISITED_COUNTRIES));

const WorldMap = memo(() => {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="relative w-full">
      <ComposableMap
        projectionConfig={{ scale: 160, center: [0, 20] }}
        className="w-full h-auto"
        style={{ maxHeight: 420 }}
      >
        <ZoomableGroup>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const iso = geo.properties.ISO_A3 || geo.id;
                const isVisited = VISITED_ISO_A3.has(iso);
                const name = VISITED_COUNTRIES[iso];

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
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted))",
                        stroke: "hsl(var(--border))",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isVisited
                          ? "hsl(var(--primary) / 0.8)"
                          : "hsl(var(--muted) / 0.8)",
                        stroke: "hsl(var(--border))",
                        strokeWidth: 0.5,
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
        </ZoomableGroup>
      </ComposableMap>

      {tooltip && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-3 py-1.5 rounded-md pointer-events-none shadow-md">
          {tooltip}
        </div>
      )}

      {/* Legend chips */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {Object.values(VISITED_COUNTRIES).map((name) => (
          <span
            key={name}
            className="text-xs bg-primary/15 text-primary px-2.5 py-1 rounded-full"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
