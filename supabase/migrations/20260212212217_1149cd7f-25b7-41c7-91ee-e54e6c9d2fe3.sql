
-- Articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Helper: check if current user is the site owner
-- We store the owner email as a constant; update it to your email after first signup
CREATE OR REPLACE FUNCTION public.is_site_owner()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT email FROM auth.users WHERE id = auth.uid()
  ) IS NOT NULL AND auth.uid() = (
    SELECT id FROM auth.users ORDER BY created_at ASC LIMIT 1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Public can read published articles
CREATE POLICY "Anyone can read published articles"
  ON public.articles FOR SELECT
  USING (published = true OR public.is_site_owner());

-- Only owner can insert
CREATE POLICY "Owner can insert articles"
  ON public.articles FOR INSERT
  WITH CHECK (public.is_site_owner());

-- Only owner can update
CREATE POLICY "Owner can update articles"
  ON public.articles FOR UPDATE
  USING (public.is_site_owner());

-- Only owner can delete
CREATE POLICY "Owner can delete articles"
  ON public.articles FOR DELETE
  USING (public.is_site_owner());

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
