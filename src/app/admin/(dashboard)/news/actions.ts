'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isAdminUser } from '@/lib/supabase/admin-auth';
import { createClient } from '@/lib/supabase/server';

export interface PostActionState {
  error?: string;
}

function field(formData: FormData, name: string, maxLength: number): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

async function getAuthorizedClient() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !isAdminUser(data.user)) {
    return null;
  }

  return supabase;
}

export async function savePostAction(
  _previousState: PostActionState,
  formData: FormData
): Promise<PostActionState> {
  const supabase = await getAuthorizedClient();
  if (!supabase) return { error: 'Your admin session has expired. Please sign in again.' };

  const id = field(formData, 'id', 64);
  const title = field(formData, 'title', 180);
  const slug = slugify(field(formData, 'slug', 180) || title);
  const excerpt = field(formData, 'excerpt', 500);
  const body = field(formData, 'body', 50000);
  const coverImageUrl = field(formData, 'cover_image_url', 2048);
  const published = formData.get('published') === 'on';

  if (!title) return { error: 'Enter an article title.' };
  if (!slug) return { error: 'Enter a title that can be used to create a URL.' };
  if (coverImageUrl && !coverImageUrl.startsWith('/') && !/^https?:\/\//i.test(coverImageUrl)) {
    return { error: 'The cover image must be a site path or an http(s) URL.' };
  }

  let publishedAt: string | null = null;
  if (published) {
    publishedAt = new Date().toISOString();
    if (id) {
      const { data: existing, error } = await supabase
        .from('posts')
        .select('published_at')
        .eq('id', id)
        .maybeSingle();

      if (error) return { error: 'Could not load the existing article. Please try again.' };
      publishedAt = existing?.published_at ?? publishedAt;
    }
  }

  const values = {
    title,
    slug,
    excerpt: excerpt || null,
    body: body || null,
    cover_image_url: coverImageUrl || null,
    published,
    published_at: publishedAt,
  };

  const result = id
    ? await supabase.from('posts').update(values).eq('id', id).select('id').maybeSingle()
    : await supabase.from('posts').insert(values).select('id').single();

  if (result.error) {
    if (result.error.code === '23505') {
      return { error: 'That article URL is already in use. Choose a different slug.' };
    }
    console.error('[admin/news] Could not save article:', result.error);
    return { error: 'Could not save the article. Please try again.' };
  }
  if (!result.data) return { error: 'The article was not found. Refresh and try again.' };

  revalidatePath('/admin');
  revalidatePath('/admin/news');
  revalidatePath('/news');
  revalidatePath(`/news/${slug}`);
  revalidatePath('/');
  redirect(`/admin/news/${result.data.id}?saved=1`);
}

export async function deletePostAction(formData: FormData): Promise<void> {
  const supabase = await getAuthorizedClient();
  if (!supabase) redirect('/admin/login');

  const id = field(formData, 'id', 64);
  if (!id) redirect('/admin/news?error=missing-id');

  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) {
    console.error('[admin/news] Could not delete article:', error);
    redirect(`/admin/news/${encodeURIComponent(id)}?error=delete-failed`);
  }

  revalidatePath('/admin');
  revalidatePath('/admin/news');
  revalidatePath('/news');
  revalidatePath('/');
  redirect('/admin/news?deleted=1');
}
