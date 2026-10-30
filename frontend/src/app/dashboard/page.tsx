'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardRedirect() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    const role = (user.role || 'buyer') as string;
    const rolePaths: Record<string, string> = {
      'super-admin': '/dashboard/super-admin',
      sales: '/dashboard/sales',
      accounts: '/dashboard/accounts',
      broker: '/dashboard/broker',
      buyer: '/dashboard/buyer',
    };
    router.replace(rolePaths[role] || '/dashboard/buyer');
  }, [user, router]);

  return null;
}