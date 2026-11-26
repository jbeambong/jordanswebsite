import { useState } from "react";
import { Link } from "react-router-dom";
import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { PageShell } from "@/components/PageShell";
import { CATEGORY_META, CategoryTag, type ProjectCategory } from "@/components/CategoryTag";
import { ProjectPlatformBadge } from "@/components/ProjectPlatformBadge";

const Portfolio = () => {
  const { lang } = useLang();
  const tr = t[lang];
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? tr.projects_list
      : tr.projects_list.filter((item) => item.category === activeCategory);

  return (
    <PageShell title={tr.projects}>
      <div className="flex flex-wrap gap-2 mb-8" style={{ fontFamily: "var(--font-sans)" }}>
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            activeCategory === "all"
              ? "bg-foreground text-background"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          {tr.allCategories}
        </button>
        {(Object.keys(CATEGORY_META) as ProjectCategory[]).map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {CATEGORY_META[cat].label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {filteredProjects.map((item) => (
          <Link
            key={item.slug}
            to={`/portfolio/${item.slug}`}
            className="group block text-left no-underline text-foreground hover:text-foreground rounded-2xl p-2 bg-card transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-soft-hover)]"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-muted">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={992}
                height={672}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <ProjectPlatformBadge slug={item.slug} />
            </div>
            <div className="px-1.5 pt-3 pb-1.5 space-y-2">
              <div className="text-sm font-semibold leading-snug">{item.title}</div>
              <CategoryTag category={item.category} />
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
};

export default Portfolio;