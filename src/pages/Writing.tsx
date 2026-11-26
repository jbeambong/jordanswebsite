import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { PageShell } from "@/components/PageShell";

const Writing = () => {
  const { lang } = useLang();
  const tr = t[lang];

  const publishedArticles = articles
    .filter((a) => a.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell title={tr.writing}>
      {publishedArticles.length > 0 ? (
        <ul className="space-y-4">
          {publishedArticles.map((a) => (
            <li key={a.slug} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <Link to={`/blog/${a.slug}`} className="font-normal">
                {a.title}
              </Link>
              <span className="text-muted-foreground text-sm shrink-0">{a.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">{tr.nothingPublished}</p>
      )}
    </PageShell>
  );
};

export default Writing;