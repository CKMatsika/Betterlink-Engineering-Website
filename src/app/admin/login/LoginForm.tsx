'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isSupabaseConfigured) {
      setError(
        'The admin backend is not configured yet. Add your Supabase keys to enable sign in.'
      );
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError('Incorrect email or password. Please try again.');
        setLoading(false);
        return;
      }

      const from = searchParams.get('redirectedFrom') || '/admin';
      router.replace(from);
      router.refresh();
    } catch {
      setError('Sign in failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Admin sign in">
      <div className="mb-5">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@betterlinkengineering.co.zw"
          className="form-input"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="form-input"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-lg border px-4 py-3 text-sm font-600"
          style={{ borderColor: '#FCA5A5', backgroundColor: '#FEF2F2', color: '#B91C1C' }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <>
            <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign In
            <Icon name="ArrowRightIcon" size={16} />
          </>
        )}
      </button>
    </form>
  );
}
