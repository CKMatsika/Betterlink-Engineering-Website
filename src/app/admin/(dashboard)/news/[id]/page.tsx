import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import PostEditor from '../PostEditor';
import DeletePostButton from '../DeletePostButton';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const supabase = await createClient();
  const { data: post, error } = await supabase.from('posts').select('*').eq('id', id).maybeSingle();

  if (error) {
    console.error('[admin/news] Could not load article for editing:', error);
    throw new Error('Could not load this article. Check the Supabase configuration and try again.');
  }
  if (!post) notFound();

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <Link href="/admin/news" className="text-sm font-700 text-accent hover:underline">
          ← All articles
        </Link>
        {post.published && (
          <Link
            href={`/news/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-700 text-accent hover:underline"
          >
            View published article ↗
          </Link>
        )}
      </div>
      <h1 className="mb-2 font-display text-3xl font-800 text-foreground">Edit article</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Update the content or change whether it is visible on the public site.
      </p>
      {query.error === 'delete-failed' && (
        <p
          role="alert"
          className="mb-5 max-w-3xl rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          Could not delete this article. Please try again.
        </p>
      )}
      <PostEditor post={post} saved={query.saved === '1'} />
      <div className="mt-10 max-w-3xl border-t border-border pt-6">
        <h2 className="mb-2 text-sm font-700 text-foreground">Delete article</h2>
        <p className="mb-4 text-xs text-muted-foreground">
          Deleting an article is permanent. It will be removed from the public site.
        </p>
        <DeletePostButton id={post.id} />
      </div>
    </div>
  );
}
