import { useState } from "react";
import { articles } from "@/data/articles";
import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ChevronDown, Globe } from "lucide-react";
import jordanPhoto from "@/assets/jordan-photo.png";
import { CATEGORY_META, CategoryTag, type ProjectCategory } from "@/components/CategoryTag";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectPlatformBadge } from "@/components/ProjectPlatformBadge";

const Index = () => {
  const { lang, toggleLang } = useLang();
  const tr = t[lang];
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");
  const [expOpen, setExpOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);

  const publishedArticles = articles
    .filter((a) => a.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  const filteredProjects =
    activeCategory === "all"
      ? tr.projects_list
      : tr.projects_list.filter((item) => item.category === activeCategory);

  return (
    <main className="max-w-[700px] mx-auto px-6 py-12 md:py-20">
      {/* Language toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle language"
        >
          <Globe className="w-4 h-4" />
          {lang === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* Header */}
      <header className="mb-12 flex items-center gap-5">
        <img
          src={jordanPhoto}
          alt="Jordan Bea Mbong"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shrink-0"
        />
        <div>
          <h1 className="text-2xl md:text-3xl mb-1">Jordan Bea Mbong</h1>
          <p className="text-muted-foreground italic">{tr.subtitle}</p>
          <SocialLinks className="mt-2.5" />
        </div>
      </header>

      {/* About */}
      <section className="mb-10">
        <p className="mb-4">{tr.aboutP1}</p>
        <p className="mb-4">
          {tr.aboutP2Prefix}{" "}
          <a href="mailto:jordan@example.com">{tr.email}</a>, {tr.on}{" "}
          <a href="https://www.linkedin.com/in/jordanbeambong/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          {tr.or}{" "}
          <a href="https://github.com/jbeambong" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </section>

      <hr className="my-10" />

      {/* Experience */}
      <section className="mb-10">
        <button
          type="button"
          onClick={() => setExpOpen((prev) => !prev)}
          aria-expanded={expOpen}
          className="w-full flex items-center justify-between text-left group"
        >
          <h2 className="text-xl">{tr.experience}</h2>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:text-foreground ${
              expOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {expOpen && (
          <div className="relative mt-6">
            <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />
            {tr.exp.map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
          </div>
        )}
      </section>

      <hr className="my-10" />

      {/* Education */}
      <section className="mb-10">
        <button
          type="button"
          onClick={() => setEduOpen((prev) => !prev)}
          aria-expanded={eduOpen}
          className="w-full flex items-center justify-between text-left group"
        >
          <h2 className="text-xl">{tr.education}</h2>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:text-foreground ${
              eduOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {eduOpen && (
          <div className="relative mt-6">
            <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />
            {tr.edu.map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
          </div>
        )}
      </section>

      <hr className="my-10" />

      {/* Portfolio */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">{tr.projects}</h2>
        <div className="flex flex-wrap gap-2 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
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
      </section>

      <hr className="my-10" />

      {/* Recommendations */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">{tr.recommendations}</h2>
        <p className="text-sm mb-3">{tr.recommendationsDesc}</p>
        <a
          href="https://studioweka.notion.site/ee8c10a4358c4e14ae5eff9fd906a92c?v=7951b75375d14913b620145fb9241294"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr.recommendationsLink} →
        </a>
      </section>

      <hr className="my-10" />

      {/* Music */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">{tr.music}</h2>
        <p className="text-sm mb-3">{tr.musicDesc}</p>
        <a
          href="https://open.spotify.com/user/rocketstarn8?si=373e886bf28040b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr.musicLink} →
        </a>
      </section>

      <hr className="my-10" />

      {/* Articles */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">{tr.writing}</h2>
        {publishedArticles.length > 0 ? (
          <ul className="space-y-3">
            {publishedArticles.map((a) => (
              <ArticleItem key={a.slug} title={a.title} date={a.date} link={`/blog/${a.slug}`} />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-sm">{tr.nothingPublished}</p>
        )}
      </section>

      <hr className="my-10" />

      {/* Footer */}
      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Bea Mbong</p>
      </footer>
    </main>
  );
};

/* ── Sub-components ── */

const TimelineItem = ({
  period,
  role,
  company,
  location,
  description,
}: {
  period: string;
  role: string;
  company: string;
  location?: string;
  description?: string;
}) => (
  <div className="flex gap-4 sm:gap-6 mb-8 group">
    <div className="w-[80px] shrink-0 text-right">
      <span className="text-muted-foreground text-sm">{period}</span>
    </div>
    <div className="hidden sm:flex items-start pt-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background ring-1 ring-border shrink-0" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold leading-snug">{role}</div>
      <div className="text-muted-foreground text-sm">
        {company}
        {location && <span> · {location}</span>}
      </div>
      {description && <p className="text-sm mt-1.5 leading-relaxed">{description}</p>}
    </div>
  </div>
);

const ArticleItem = ({ title, date, link }: { title: string; date: string; link: string }) => (
  <li className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
    <Link to={link} className="font-normal">
      {title}
    </Link>
    <span className="text-muted-foreground text-sm shrink-0">{date}</span>
  </li>
);

export default Index;
