import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { CategoryTag } from "@/components/CategoryTag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang, toggleLang } = useLang();
  const tr = t[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = tr.projects_list.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="max-w-[760px] mx-auto px-6 py-20">
        <p className="text-muted-foreground mb-4">{tr.projectNotFound}</p>
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm">
          <ArrowLeft className="w-4 h-4" />
          {tr.backToPortfolio}
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-[760px] mx-auto px-6 py-10 md:py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {tr.backToPortfolio}
        </Link>
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle language"
        >
          <Globe className="w-4 h-4" />
          {lang === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* Case Study Header */}
      <header className="mb-10">
        <div className="mb-4">
          <CategoryTag category={project.category} />
        </div>
        <h1 className="text-3xl md:text-4xl leading-tight mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.summary}</p>

        {"link" in project && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {tr.viewProject}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </header>

      {/* Cover Visual */}
      <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted mb-12 shadow-[var(--shadow-soft)]">
        <img
          src={project.image}
          alt={project.title}
          width={992}
          height={672}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Figures */}
      {project.highlights.length > 0 && (
        <section className="mb-12 rounded-2xl bg-secondary/50 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">{item.value}</div>
                <div
                  className="text-xs text-muted-foreground leading-snug"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Metadata Strip */}
      <section
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 mb-12 border-y border-border"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{tr.caseStudyRole}</div>
          <div className="text-sm font-medium">{project.meta.role}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{tr.caseStudyOrg}</div>
          <div className="text-sm font-medium">{project.meta.organization}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{tr.caseStudyPeriod}</div>
          <div className="text-sm font-medium">{project.meta.period}</div>
        </div>
      </section>

      {/* Narrative Sections */}
      <article className="space-y-12 mb-16">
        <section>
          <h2 className="text-xl md:text-2xl mb-4">{tr.caseStudyChallenge}</h2>
          <p className="text-foreground/90 leading-relaxed">{project.challenge}</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl mb-4">{tr.caseStudyApproach}</h2>
          <p className="text-foreground/90 leading-relaxed">{project.approach}</p>
        </section>

        {"gallery" in project && project.gallery && project.gallery.length > 0 && (
          <section className="px-10">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {project.gallery.map((src, idx) => (
                  <CarouselItem key={src} className="md:basis-1/2">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)]">
                      <img
                        src={src}
                        alt={`${project.title} — ${idx + 2}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        )}

        <section>
          <h2 className="text-xl md:text-2xl mb-4">{tr.caseStudyImpact}</h2>
          <p className="text-foreground/90 leading-relaxed">{project.impact}</p>
        </section>

        {"youtubeId" in project && project.youtubeId && (
          <section>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)]">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </section>
        )}
      </article>

      <hr className="mb-10" />

      {/* Footer back link */}
      <footer className="flex items-center justify-between pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {tr.backToPortfolio}
        </Link>
        <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jordan Bea Mbong</span>
      </footer>
    </main>
  );
};

export default ProjectDetail;