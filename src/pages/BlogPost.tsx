import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug && a.published);

  if (!article) {
    return (
      <main className="max-w-[600px] mx-auto px-6 py-20">
        <p className="text-muted-foreground">Article not found.</p>
        <Link to="/" className="text-sm underline mt-4 inline-block">← Back home</Link>
      </main>
    );
  }

  return (
    <main className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
      <Link to="/" className="text-sm text-muted-foreground underline mb-8 inline-block">← Back</Link>
      <h1 className="text-2xl md:text-3xl mb-2">{article.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">{article.date}</p>
      <div className="whitespace-pre-wrap leading-relaxed">{article.content}</div>
    </main>
  );
};

export default BlogPost;
