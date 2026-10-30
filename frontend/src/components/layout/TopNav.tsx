'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { MenuIcon, User, LogOut } from 'lucide-react';

export default function TopNav() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-white" aria-label="Open menu">
            <MenuIcon className="w-6 h-6" />
          </button>
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            Venture<span className="text-blue-500">Sync</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-slate-400">Welcome back,</span>
            <span className="text-sm font-medium text-white capitalize">{user?.name || 'User'}</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/25">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <button
            onClick={logout}
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
          <button
            onClick={logout}
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}