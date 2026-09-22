"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto mt-12 max-w-sm rounded-xl border border-border bg-bg-panel p-6 text-center">
        <p className="text-zinc-200">Check your email to confirm your account, then sign in.</p>
        <Link href="/login" className="mt-4 inline-block text-brand hover:underline">
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 max-w-sm rounded-xl border border-border bg-bg-panel p-6">
      <h1 className="mb-6 text-xl font-bold text-white">Create an account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-white outline-none focus:border-brand"
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-white outline-none focus:border-brand"
        />
        {error && <p className="text-sm text-hard">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand py-2 text-sm font-medium text-black hover:bg-brand-dark disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign up"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="text-brand hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
