-- ═════════════════════════════════════════════════════════════
-- Betterlink Industries — admin backend schema (Phase 1)
--
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)
-- or via the Supabase CLI (`supabase db push`).
-- ═════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────
-- Helpers
-- ─────────────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ─────────────────────────────────────────────────────────────
-- projects
-- ─────────────────────────────────────────────────────────────
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  division text not null default 'group',
  title text not null,
  slug text not null unique,
  summary text,
  description text,
  cover_image_url text,
  tags text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists projects_division_idx on public.projects (division);
create index if not exists projects_published_idx on public.projects (published);
drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- services
-- ─────────────────────────────────────────────────────────────
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  division text,
  title text not null,
  description text,
  icon text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists services_division_idx on public.services (division);
drop trigger if exists services_set_updated_at on public.services;
create trigger services_set_updated_at
  before update on public.services
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- gallery_items
-- ─────────────────────────────────────────────────────────────
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text,
  category text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists gallery_items_category_idx on public.gallery_items (category);
create index if not exists gallery_items_published_idx on public.gallery_items (published);

-- ─────────────────────────────────────────────────────────────
-- stats
-- ─────────────────────────────────────────────────────────────
create table if not exists public.stats (
  id uuid primary key default gen_random_uuid(),
  scope text,
  label text not null,
  value text not null,
  sub text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists stats_scope_idx on public.stats (scope);
drop trigger if exists stats_set_updated_at on public.stats;
create trigger stats_set_updated_at
  before update on public.stats
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- posts (news / blog)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  body text,
  cover_image_url text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists posts_published_idx on public.posts (published, published_at desc);
drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────
-- site_settings (key → jsonb)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
  before update on public.site_settings
  for each row execute function public.set_updated_at();

-- ═════════════════════════════════════════════════════════════
-- Row Level Security
--   • anonymous (public site): read published content only
--   • authenticated (admin):    full read/write
--   (server-side admin writes also use the service-role key, which bypasses RLS)
-- ═════════════════════════════════════════════════════════════
alter table public.projects      enable row level security;
alter table public.services      enable row level security;
alter table public.gallery_items enable row level security;
alter table public.stats         enable row level security;
alter table public.posts         enable row level security;
alter table public.site_settings enable row level security;

-- projects
drop policy if exists projects_public_read on public.projects;
create policy projects_public_read on public.projects
  for select using (published = true);
drop policy if exists projects_admin_all on public.projects;
create policy projects_admin_all on public.projects
  for all to authenticated using (true) with check (true);

-- services
drop policy if exists services_public_read on public.services;
create policy services_public_read on public.services
  for select using (published = true);
create policy services_admin_all on public.services
  for all to authenticated using (true) with check (true);

-- gallery_items
alter table public.gallery_items enable row level security;
create policy gallery_public_read on public.gallery_items
  for select using (published = true);
create policy gallery_admin_all on public.gallery_items
  for all to authenticated using (true) with check (true);

-- stats
create policy stats_public_read on public.stats
  for select using (true);
create policy stats_admin_all on public.stats
  for all to authenticated using (true) with check (true);

-- posts
create policy posts_public_read on public.posts
  for select using (published = true);
create policy posts_admin_all on public.posts
  for all to authenticated using (true) with check (true);

-- site_settings
create policy site_settings_public_read on public.site_settings
  for select using (true);
create policy site_settings_admin_all on public.site_settings
  for all to authenticated using (true) with check (true);

-- ═════════════════════════════════════════════════════════════
-- Storage: public 'media' bucket for uploaded images
-- ═════════════════════════════════════════════════════════════
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists media_public_read on storage.objects;
create policy media_public_read on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists media_admin_insert on storage.objects;
create policy media_admin_insert on storage.objects
  for insert to authenticated with check (bucket_id = 'media');

drop policy if exists media_admin_update on storage.objects;
create policy media_admin_update on storage.objects
  for update to authenticated using (bucket_id = 'media');

drop policy if exists media_admin_delete on storage.objects;
create policy media_admin_delete on storage.objects
  for delete to authenticated using (bucket_id = 'media');
