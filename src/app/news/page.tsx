import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'News & Insights | Betterlink Industries',
  description: 'Company news, project updates and insights from Betterlink Industries.',
  alternates: { canonical: 'https://www.betterlinkengineering.co.zw/news' },
};

export default async function NewsPage() {
  let posts: Awaited<ReturnType<typeof loadPublishedPosts>> = [];
  if (isSupabaseConfigured) posts = await loadPublishedPosts();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pb-20 pt-32">
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="section-label">Betterlink Industries</span>
          <h1 className="mt-4 font-display text-4xl font-800 text-foreground md:text-6xl">
            News &amp; Insights
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Company announcements, project updates and perspectives from across our divisions.
          </p>

          {posts.length ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {post.cover_image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.cover_image_url}
                      alt=""
                      loading="lazy"
                      className="h-52 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <time
                      dateTime={post.published_at ?? post.created_at}
                      className="text-xs font-700 uppercase tracking-wider text-accent"
                    >
                      {new Date(post.published_at ?? post.created_at).toLocaleDateString('en-ZW', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC',
                      })}
                    </time>
                    <h2 className="mt-3 font-display text-xl font-800 text-foreground">
                      <Link href={`/news/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/news/${post.slug}`}
                      className="mt-5 inline-flex text-sm font-700 text-accent hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-border bg-card px-6 py-12 text-center">
              <h2 className="font-display text-xl font-800 text-foreground">Updates coming soon</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Check back for company news, project updates and insights.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

async function loadPublishedPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image_url, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('[news] Could not load published articles:', error);
    return [];
  }

  return data ?? [];
}
