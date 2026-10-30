'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { User, LogOut } from 'lucide-react';

type Role = 'super-admin' | 'sales' | 'accounts' | 'broker' | 'buyer';

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  roles: Role[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutIcon, roles: ['super-admin', 'sales', 'accounts', 'broker', 'buyer'] },
  { label: 'My Account', href: '/profile', icon: User, roles: ['super-admin', 'sales', 'accounts', 'broker', 'buyer'] },
  { label: 'Change Password', href: '/change-password', icon: ShieldIcon, roles: ['super-admin', 'sales', 'accounts', 'broker', 'buyer'] },
  { label: 'Users', href: '/dashboard/super-admin/users', icon: UsersIcon, roles: ['super-admin'] },
  { label: 'Sites', href: '/dashboard/super-admin/sites', icon: BuildingIcon, roles: ['super-admin'] },
  { label: 'Plots', href: '/dashboard/super-admin/plots', icon: MapIcon, roles: ['super-admin', 'sales'] },
  { label: 'Leads', href: '/dashboard/sales/leads', icon: UsersIcon, roles: ['sales'] },
  { label: 'Performance', href: '/dashboard/sales/performance', icon: BarChartIcon, roles: ['sales'] },
  { label: 'Transactions', href: '/dashboard/accounts/transactions', icon: DollarSignIcon, roles: ['accounts'] },
  { label: 'Payments', href: '/dashboard/accounts/payments', icon: FileTextIcon, roles: ['accounts'] },
  { label: 'Bookings', href: '/dashboard/broker/bookings', icon: CalendarIcon, roles: ['broker'] },
  { label: 'My Bookings', href: '/dashboard/buyer/bookings', icon: CalendarIcon, roles: ['buyer'] },
  { label: 'Logout', href: '/login', icon: LogOut, roles: ['super-admin', 'sales', 'accounts', 'broker', 'buyer'] },
];

function LayoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="3" x2="21" y2="3"></line>
      <line x1="7" y1="3" x2="7" y2="21"></line>
      <line x1="14" y1="3" x2="14" y2="21"></line>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="14" y1="3" x2="21" y2="3"></line>
      <line x1="7" y1="21" x2="21" y2="21"></line>
    </svg>
  );
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
      <line x1="8" y1="2" x2="8" y2="18"></line>
      <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="20" x2="12" y2="12"></line>
      <line x1="18" y1="20" x2="18" y2="8"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
}

export default function Sidebar() {
  const { user, logout } = useAuth();
  const role = (user?.role as Role) || 'buyer';

  const items = NAV_ITEMS.filter((item) => item.roles.includes(role));

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-navy/90 border-r border-white/10 transform transition-transform duration-300 -translate-x-full md:translate-x-0">
      <div className="flex h-full flex-col">
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <Link href="/dashboard" className="text-xl font-bold gold">VentureSync</Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {items.map((item) => {
            const isLogout = item.label === 'Logout';
            return (
              <div key={item.href} className="rounded-lg">
                {isLogout ? (
                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <User className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
              <p className="text-xs text-white/60 capitalize">{user?.role || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}