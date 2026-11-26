import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { PageShell } from "@/components/PageShell";

const Recommendations = () => {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <PageShell title={tr.recommendations}>
      <p className="mb-4">{tr.recommendationsDesc}</p>
      <a
        href="https://studioweka.notion.site/ee8c10a4358c4e14ae5eff9fd906a92c?v=7951b75375d14913b620145fb9241294"
        target="_blank"
        rel="noopener noreferrer"
      >
        {tr.recommendationsLink} →
      </a>
    </PageShell>
  );
};

export default Recommendations;