'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import { savePostAction, type PostActionState } from './actions';

interface EditablePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string | null;
  cover_image_url: string | null;
  published: boolean;
}

export default function PostEditor({ post, saved }: { post?: EditablePost; saved?: boolean }) {
  const initialState: PostActionState = {};
  const [state, action, pending] = useActionState(savePostAction, initialState);

  return (
    <form action={action} className="max-w-3xl space-y-6">
      {post && <input type="hidden" name="id" value={post.id} />}
      {saved && (
        <p
          role="status"
          className="rounded-lg bg-green-50 px-4 py-3 text-sm font-600 text-green-800"
        >
          Article saved.
        </p>
      )}
      {state.error && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-600 text-red-800">
          {state.error}
        </p>
      )}

      <label className="block">
        <span className="mb-2 block text-sm font-700 text-foreground">Title</span>
        <input
          name="title"
          required
          maxLength={180}
          defaultValue={post?.title ?? ''}
          placeholder="A clear, descriptive headline"
          className="form-input w-full"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-700 text-foreground">URL slug</span>
        <input
          name="slug"
          maxLength={180}
          defaultValue={post?.slug ?? ''}
          placeholder="Generated from the title if left blank"
          className="form-input w-full"
        />
        <span className="mt-1 block text-xs text-muted-foreground">
          Public URL: /news/{post?.slug || 'your-article-title'}
        </span>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-700 text-foreground">Summary</span>
        <textarea
          name="excerpt"
          maxLength={500}
          rows={3}
          defaultValue={post?.excerpt ?? ''}
          placeholder="A short introduction shown in the news list and search results."
          className="form-input w-full"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-700 text-foreground">Article</span>
        <textarea
          name="body"
          maxLength={50000}
          rows={16}
          defaultValue={post?.body ?? ''}
          placeholder="Write your article here. Separate paragraphs with a blank line."
          className="form-input w-full"
        />
        <span className="mt-1 block text-xs text-muted-foreground">
          Plain text is supported; paragraph breaks are preserved.
        </span>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-700 text-foreground">Cover image URL</span>
        <input
          name="cover_image_url"
          type="text"
          maxLength={2048}
          defaultValue={post?.cover_image_url ?? ''}
          placeholder="/assets/images/your-image.jpg"
          className="form-input w-full"
        />
        <span className="mt-1 block text-xs text-muted-foreground">
          Use a site image path or a full https image URL.
        </span>
      </label>

      <label className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <input
          name="published"
          type="checkbox"
          defaultChecked={post?.published ?? false}
          className="mt-1 h-4 w-4 accent-[var(--accent)]"
        />
        <span>
          <span className="block text-sm font-700 text-foreground">Publish article</span>
          <span className="block text-xs text-muted-foreground">
            Published articles are visible to everyone on the Insights page.
          </span>
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-60">
          {pending ? 'Saving…' : post ? 'Save changes' : 'Create article'}
        </button>
        <Link
          href="/admin/news"
          className="rounded-lg px-4 py-3 text-sm font-700 text-muted-foreground"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
