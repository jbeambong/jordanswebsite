import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  title: string;
  content: string;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("articles")
      .select("title, content, created_at")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setArticle(data);
        else setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <main className="max-w-[600px] mx-auto px-6 py-20">
        <p className="text-muted-foreground">Article not found.</p>
        <Link to="/" className="text-sm underline mt-4 inline-block">← Back home</Link>
      </main>
    );
  }

  if (!article) {
    return <p className="p-6 text-sm text-muted-foreground">Loading...</p>;
  }

  return (
    <main className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
      <Link to="/" className="text-sm text-muted-foreground underline mb-8 inline-block">← Back</Link>
      <h1 className="text-2xl md:text-3xl mb-2">{article.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">
        {new Date(article.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <div className="prose-custom whitespace-pre-wrap leading-relaxed">
        {article.content}
      </div>
    </main>
  );
};

export default BlogPost;
