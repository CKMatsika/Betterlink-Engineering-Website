import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) return { title: 'Article not found | Betterlink Industries' };

  return {
    title: `${post.title} | Betterlink Industries`,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `https://www.betterlinkengineering.co.zw/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      publishedTime: post.published_at ?? undefined,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pb-20 pt-32">
        <article className="mx-auto max-w-4xl px-6 lg:px-10">
          <Link href="/news" className="text-sm font-700 text-accent hover:underline">
            ← All news &amp; insights
          </Link>
          <header className="mb-10 mt-8">
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
            <h1 className="mt-4 font-display text-4xl font-800 leading-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            )}
          </header>
          {post.cover_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover_image_url}
              alt=""
              className="mb-10 max-h-[520px] w-full rounded-2xl object-cover"
            />
          )}
          <div className="whitespace-pre-wrap text-base leading-8 text-foreground/85">
            {post.body}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

async function loadPost(slug: string) {
  if (!isSupabaseConfigured) return null;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('posts')
    .select('title, slug, excerpt, body, cover_image_url, published_at, created_at')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('[news] Could not load article:', error);
    return null;
  }

  return data;
}
