import { useParams } from "react-router-dom";
import { articles } from "@/data/articles";
import { PageShell } from "@/components/PageShell";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

const BlogPost = () => {
  const { slug } = useParams();
  const { lang } = useLang();
  const tr = t[lang];
  const article = articles.find((a) => a.slug === slug && a.published);

  if (!article) {
    return (
      <PageShell backTo="/writing" backLabel={tr.backToWriting}>
        <p className="text-muted-foreground">Article not found.</p>
      </PageShell>
    );
  }

  return (
    <PageShell backTo="/writing" backLabel={tr.backToWriting}>
      <h1 className="text-2xl md:text-3xl mb-2">{article.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">{article.date}</p>
      {article.externalUrl && (
        <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline mb-6 inline-block">
          Read original on LinkedIn ↗
        </a>
      )}
      <div className="whitespace-pre-wrap leading-relaxed">{article.content}</div>
    </PageShell>
  );
};

export default BlogPost;
