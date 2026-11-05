-- Restrict content and media writes to users explicitly marked as admins.
-- Set app_metadata.role = "admin" for trusted accounts in Supabase Auth.
create or replace function public.is_admin()
returns boolean
language sql
stable
set search_path = ''
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;
grant execute on function public.is_admin() to authenticated;

drop policy if exists projects_admin_all on public.projects;
create policy projects_admin_all on public.projects
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists services_admin_all on public.services;
create policy services_admin_all on public.services
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists gallery_admin_all on public.gallery_items;
create policy gallery_admin_all on public.gallery_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists stats_admin_all on public.stats;
create policy stats_admin_all on public.stats
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists posts_admin_all on public.posts;
create policy posts_admin_all on public.posts
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists site_settings_admin_all on public.site_settings;
create policy site_settings_admin_all on public.site_settings
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists media_admin_insert on storage.objects;
create policy media_admin_insert on storage.objects
  for insert to authenticated with check (bucket_id = 'media' and public.is_admin());

drop policy if exists media_admin_update on storage.objects;
create policy media_admin_update on storage.objects
  for update to authenticated
  using (bucket_id = 'media' and public.is_admin())
  with check (bucket_id = 'media' and public.is_admin());

drop policy if exists media_admin_delete on storage.objects;
create policy media_admin_delete on storage.objects
  for delete to authenticated using (bucket_id = 'media' and public.is_admin());
