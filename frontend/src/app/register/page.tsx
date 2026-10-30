'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/button';
import { Card } from '@/components/card';


const ROLES = [
  { key: 'super-admin', label: 'Super Admin', description: 'Full platform access' },
  { key: 'sales', label: 'Sales Executive', description: 'Track leads and sales' },
  { key: 'accounts', label: 'Accounts Manager', description: 'Financial management' },
  { key: 'broker', label: 'External Broker', description: 'Partner portal access' },
  { key: 'buyer', label: 'Buyer', description: 'View and book plots' },
];

export default function RegisterPage() {
  const { register, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [name, setName] = useState('');
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
      await register(username, password, role, name);
      window.location.href = '/login';
    } catch {
      setError('Registration failed. Username may already exist.');
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
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-white/60 mt-2">Join VentureSync today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Enter full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <User className="w-4 h-4" /> Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Choose a username"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <Lock className="w-4 h-4" /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Enter password"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block">Role</label>
            <div className="grid grid-cols-2 gap-2">
              {ROLES.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRole(r.key as any)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                    role === r.key
                      ? 'bg-gold text-navy-bg border-gold'
                      : 'border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/50">{ROLES.find((r) => r.key === role)?.description}</p>
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
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{' '}
          <Link href="/login" className="text-gold hover:text-gold/400 font-medium">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
