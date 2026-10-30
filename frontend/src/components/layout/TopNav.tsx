'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { MenuIcon, User, LogOut } from 'lucide-react';

export default function TopNav() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-white" aria-label="Open menu">
            <MenuIcon className="w-6 h-6" />
          </button>
          <Link href="/" className="text-xl font-bold gold">VentureSync</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/dashboard" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="/profile" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            My Account
          </Link>
          <Link href="/change-password" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Change Password
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-white/60">Welcome,</span>
            <span className="text-sm font-medium text-white capitalize">{user?.name || 'User'}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium text-xs">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <button
            onClick={logout}
            className="md:hidden text-white/70 hover:text-white transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}