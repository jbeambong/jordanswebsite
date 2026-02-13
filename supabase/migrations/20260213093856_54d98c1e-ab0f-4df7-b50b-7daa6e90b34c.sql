
-- Drop RLS policies
DROP POLICY IF EXISTS "Anyone can read published articles" ON public.articles;
DROP POLICY IF EXISTS "Owner can delete articles" ON public.articles;
DROP POLICY IF EXISTS "Owner can insert articles" ON public.articles;
DROP POLICY IF EXISTS "Owner can update articles" ON public.articles;

-- Drop table
DROP TABLE IF EXISTS public.articles;

-- Drop functions
DROP FUNCTION IF EXISTS public.is_site_owner();
DROP FUNCTION IF EXISTS public.update_updated_at_column();
