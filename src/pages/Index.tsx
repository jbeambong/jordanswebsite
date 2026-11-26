import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import jordanPhoto from "@/assets/jordan-photo.png";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  const { lang, toggleLang } = useLang();
  const tr = t[lang];

  const menuItems = [
    { to: "/experience", label: tr.experienceAndEducation },
    { to: "/portfolio", label: tr.projects },
    { to: "/writing", label: tr.writing },
    { to: "/recommendations", label: tr.recommendations },
    { to: "/music", label: tr.music },
  ];

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

      {/* Sections Menu */}
      <nav aria-label="Sections" className="mb-10">
        <ul className="divide-y divide-border">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-center justify-between py-4 text-xl text-foreground hover:text-foreground no-underline transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="my-10" />

      {/* Footer */}
      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Bea Mbong</p>
      </footer>
    </main>
  );
};

export default Index;
