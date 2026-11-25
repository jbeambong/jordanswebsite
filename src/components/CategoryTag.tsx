export type ProjectCategory = "marketing" | "infra" | "software" | "esport" | "events";

export const CATEGORY_META: Record<ProjectCategory, { label: string; bg: string; fg: string }> = {
  events: { label: "Events", bg: "hsl(var(--tag-events-bg))", fg: "hsl(var(--tag-events-fg))" },
  marketing: { label: "Marketing", bg: "hsl(var(--tag-marketing-bg))", fg: "hsl(var(--tag-marketing-fg))" },
  infra: { label: "Infrastructure finance", bg: "hsl(var(--tag-infra-bg))", fg: "hsl(var(--tag-infra-fg))" },
  software: { label: "Software", bg: "hsl(var(--tag-software-bg))", fg: "hsl(var(--tag-software-fg))" },
  esport: { label: "Esport", bg: "hsl(var(--tag-esport-bg))", fg: "hsl(var(--tag-esport-fg))" },
};

export const CategoryTag = ({ category }: { category: ProjectCategory }) => {
  const meta = CATEGORY_META[category];
  return (
    <span
      className="inline-block text-[11px] font-medium leading-none px-2.5 py-1 rounded-full"
      style={{ backgroundColor: meta.bg, color: meta.fg, fontFamily: "var(--font-sans)" }}
    >
      {meta.label}
    </span>
  );
};