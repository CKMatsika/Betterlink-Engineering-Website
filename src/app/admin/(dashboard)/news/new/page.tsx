import React from 'react';
import Link from 'next/link';
import PostEditor from '../PostEditor';

export default function NewPostPage() {
  return (
    <div>
      <Link
        href="/admin/news"
        className="mb-5 inline-flex text-sm font-700 text-accent hover:underline"
      >
        ← All articles
      </Link>
      <h1 className="mb-2 font-display text-3xl font-800 text-foreground">Write an article</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Save it as a draft or publish it to the public Insights page.
      </p>
      <PostEditor />
    </div>
  );
}
