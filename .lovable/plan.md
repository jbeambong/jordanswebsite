

# Switch to Paul Graham-style static articles

Remove the database, authentication, and admin panel. Articles will be hardcoded directly in the code as simple data, deployed with each change.

## What changes

**Remove:**
- `/login` page and authentication flow
- `/admin` page and CMS
- All database queries from the homepage and blog post page
- The `articles` database table and RLS policies (via migration)

**Add:**
- A simple `src/data/articles.ts` file containing all articles as a TypeScript array (title, slug, date, content)
- One example article to start with

**Keep:**
- The current clean, minimal design
- The `/blog/:slug` route for reading articles
- The homepage listing of articles

## How it works

1. To write a new article, you add an entry to `src/data/articles.ts`
2. The homepage reads from that array and lists published articles
3. The blog post page finds the article by slug and displays it

## Technical details

**New file: `src/data/articles.ts`**
- Export an array of article objects: `{ title, slug, date, content, published }`
- Content stored as plain text strings (markdown support can be added later)

**Modified files:**
- `src/pages/Index.tsx` - Import articles from the data file instead of fetching from database
- `src/pages/BlogPost.tsx` - Look up article by slug from the data file instead of querying database
- `src/App.tsx` - Remove Login and Admin routes

**Deleted files:**
- `src/pages/Login.tsx`
- `src/pages/Admin.tsx`

**Database migration:**
- Drop the `articles` table, its RLS policies, and the `is_site_owner()` function

