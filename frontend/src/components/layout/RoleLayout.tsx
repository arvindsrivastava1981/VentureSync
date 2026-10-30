'use client';

import { ReactNode, useState, useEffect } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';

const PUBLIC_ROUTES = ['/login', '/register'];

export default function RoleLayout({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isPublicRoute) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated, isPublicRoute, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen navy-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!isAuthenticated && !isPublicRoute) {
    return null;
  }

  // Public routes (login/register) render children without layout shell
  if (isPublicRoute) {
    return <>{children}</>;
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