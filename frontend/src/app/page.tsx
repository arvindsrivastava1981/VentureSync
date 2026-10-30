'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function HomePage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (isAuthenticated && user) {
      const role = (user.role || 'buyer') as string;
      const normalizedRole = role === 'admin' ? 'super-admin' : role;
      const rolePaths: Record<string, string> = {
        'super-admin': '/dashboard/super-admin',
        sales: '/dashboard/sales',
        accounts: '/dashboard/accounts',
        broker: '/dashboard/broker',
        buyer: '/dashboard/buyer',
      };
      router.replace(rolePaths[normalizedRole] || '/dashboard/buyer');
    } else if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen navy-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  return null;
}