'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/button';
import { Card } from '@/components/card';


export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <><script>{`window.location.href = '/dashboard'`}</script></>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
    } catch {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen navy-bg flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gold flex items-center justify-center">
            <User className="w-6 h-6 text-navy-bg" />
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/60 mt-2">Sign in to your VentureSync account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-sm text-rose-400">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-3 bg-gold text-navy-bg font-medium hover:bg-gold/90 transition-colors"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Don't have an account?{' '}
          <Link href="/register" className="text-gold hover:text-gold/400 font-medium">
            Register
          </Link>
        </p>
      </Card>

      <div className="fixed bottom-4 left-4 right-4 text-center text-white/40 text-xs">
        VentureSync Enterprise &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}
