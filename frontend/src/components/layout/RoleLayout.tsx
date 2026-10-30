'use client';

import { ReactNode, useState, useEffect } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function RoleLayout({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen navy-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen navy-bg text-white">
      <TopNav />

      <div className="md:flex md:h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <main className="md:ml-64 pt-16 pb-8 min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}