import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

interface PageShellProps {
  title?: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
}

export const PageShell = ({ title, backTo = "/", backLabel, children }: PageShellProps) => {
  const { lang, toggleLang } = useLang();
  const tr = t[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[700px] mx-auto px-6 py-12 md:py-20">
      <div className="flex items-center justify-between mb-12">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel ?? tr.backHome}
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

      {title && <h1 className="text-2xl md:text-3xl mb-10">{title}</h1>}

      {children}

      <hr className="my-12" />

      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Bea Mbong</p>
      </footer>
    </main>
  );
};