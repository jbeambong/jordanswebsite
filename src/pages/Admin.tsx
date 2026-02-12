import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  created_at: string;
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Article | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) navigate("/login");
      }
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) navigate("/login");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchArticles = async () => {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    if (session) fetchArticles();
  }, [session]);

  const resetForm = () => {
    setEditing(null);
    setTitle("");
    setSlug("");
    setContent("");
    setPublished(false);
  };

  const startEdit = (a: Article) => {
    setEditing(a);
    setTitle(a.title);
    setSlug(a.slug);
    setContent(a.content);
    setPublished(a.published);
  };

  const handleSave = async () => {
    setSaving(true);
    if (editing) {
      await supabase
        .from("articles")
        .update({ title, slug, content, published })
        .eq("id", editing.id);
    } else {
      await supabase.from("articles").insert({ title, slug, content, published });
    }
    resetForm();
    await fetchArticles();
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    await supabase.from("articles").delete().eq("id", id);
    await fetchArticles();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!session || loading) return <p className="p-6 text-sm text-muted-foreground">Loading...</p>;

  return (
    <main className="max-w-[700px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl">Admin — Articles</h1>
        <div className="flex gap-3 text-sm">
          <Link to="/" className="underline text-muted-foreground">Site</Link>
          <button onClick={handleLogout} className="underline text-muted-foreground">Logout</button>
        </div>
      </div>

      {/* Editor */}
      <div className="border border-border rounded p-4 mb-8 space-y-3">
        <h2 className="text-lg">{editing ? "Edit article" : "New article"}</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-border bg-background px-3 py-2 text-sm rounded"
        />
        <input
          placeholder="slug-url"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border border-border bg-background px-3 py-2 text-sm rounded"
        />
        <textarea
          placeholder="Content (plain text or markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="w-full border border-border bg-background px-3 py-2 text-sm rounded font-mono"
        />
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Published
        </label>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={saving || !title || !slug}
            className="bg-foreground text-background px-4 py-1.5 text-sm rounded hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving..." : editing ? "Update" : "Create"}
          </button>
          {editing && (
            <button onClick={resetForm} className="text-sm underline text-muted-foreground">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* List */}
      {articles.length === 0 ? (
        <p className="text-sm text-muted-foreground">No articles yet.</p>
      ) : (
        <ul className="space-y-3">
          {articles.map((a) => (
            <li key={a.id} className="flex items-baseline justify-between gap-4">
              <div>
                <span className="font-semibold">{a.title}</span>
                {!a.published && (
                  <span className="ml-2 text-xs text-muted-foreground">(draft)</span>
                )}
              </div>
              <div className="flex gap-2 text-sm shrink-0">
                <button onClick={() => startEdit(a)} className="underline">Edit</button>
                <button onClick={() => handleDelete(a.id)} className="underline text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Admin;
