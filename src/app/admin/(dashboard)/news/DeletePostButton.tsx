'use client';

import React from 'react';
import { deletePostAction } from './actions';

export default function DeletePostButton({ id }: { id: string }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(event) => {
        if (!window.confirm('Permanently delete this article?')) event.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="rounded-lg border border-red-200 px-4 py-3 text-sm font-700 text-red-700 hover:bg-red-50"
      >
        Delete article
      </button>
    </form>
  );
}
