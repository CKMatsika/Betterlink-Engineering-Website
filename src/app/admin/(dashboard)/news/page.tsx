import React from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export const dynamic = 'force-dynamic';

export default async function AdminNewsPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string; error?: string }>;
}) {
  const params = await searchParams;
  let posts: Awaited<ReturnType<typeof loadPosts>>['posts'] = [];
  let loadError = false;

  if (isSupabaseConfigured) {
    const result = await loadPosts();
    posts = result.posts;
    loadError = result.error;
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label mb-2">Content studio</p>
          <h1 className="font-display text-3xl font-800 text-foreground">News &amp; Insights</h1>
          <p className="mt-2 text-sm font-500 text-muted-foreground">
            Draft announcements and publish company updates to your website.
          </p>
        </div>
        <Link href="/admin/news/new" className="btn-primary">
          Write an article
        </Link>
      </div>

      {params.deleted === '1' && (
        <p role="status" className="mb-5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
          Article deleted.
        </p>
      )}
      {params.error && (
        <p role="alert" className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          The requested action could not be completed. Refresh and try again.
        </p>
      )}
      {!isSupabaseConfigured && (
        <p role="alert" className="mb-5 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Add the Supabase URL and anon key to the deployment environment to manage articles.
        </p>
      )}
      {loadError && (
        <p role="alert" className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          Articles could not be loaded. Check that the Supabase migrations have been applied.
        </p>
      )}

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="hidden grid-cols-[1fr_120px_160px] gap-4 border-b border-border bg-muted px-5 py-3 text-xs font-800 uppercase tracking-wider text-muted-foreground sm:grid">
          <span>Article</span>
          <span>Status</span>
          <span>Last updated</span>
        </div>
        {posts.length ? (
          <ul className="divide-y divide-border">
            {posts.map((post) => (
              <li
                key={post.id}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_120px_160px] sm:items-center sm:gap-4"
              >
                <div className="min-w-0">
                  <Link
                    href={`/admin/news/${post.id}`}
                    className="font-700 text-foreground hover:text-accent"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1 truncate text-xs text-muted-foreground">/news/{post.slug}</p>
                </div>
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-700 ${
                    post.published ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
                  }`}
                >
                  {post.published ? 'Published' : 'Draft'}
                </span>
                <time className="text-xs text-muted-foreground" dateTime={post.updated_at}>
                  {new Date(post.updated_at).toLocaleDateString('en-ZW', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </time>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-6 py-14 text-center">
            <h2 className="font-display text-xl font-800 text-foreground">No articles yet</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Create a draft, add an update or announcement, then publish it when it is ready.
            </p>
            <Link href="/admin/news/new" className="btn-primary mt-5 inline-flex">
              Write your first article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

async function loadPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, published, updated_at')
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('[admin/news] Could not load articles:', error);
    return { posts: [], error: true };
  }

  return { posts: data ?? [], error: false };
}
