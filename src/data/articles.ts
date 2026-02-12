export interface Article {
  title: string;
  slug: string;
  date: string;
  content: string;
  published: boolean;
}

export const articles: Article[] = [
  {
    title: "On Building Things",
    slug: "on-building-things",
    date: "2025-01",
    content: `There's something deeply satisfying about building things from scratch. Not because it's efficient — it rarely is — but because the act of creation forces you to understand every layer of the problem.

When you use someone else's solution, you get the answer but miss the lesson. When you build your own, you get both.

The best builders I know share this trait: they've built bad versions of everything. Bad databases, bad compilers, bad websites. Each one taught them something no tutorial could.

So if you're wondering whether to use the library or write it yourself — for learning, always write it yourself. For shipping, use the library. Know which mode you're in.`,
    published: true,
  },
];
