import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, Sun, Moon, User, LogOut } from 'lucide-react';

export const metadata = {
  title: 'VentureSync',
  description: 'Real Estate Land Developer Platform',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="navy-bg text-white min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xl font-bold gold">VentureSync</Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/super-admin" className="hover:text-emerald-400">Super Admin</Link>
              <Link href="/sales" className="hover:text-emerald-400">Sales</Link>
              <Link href="/accounts" className="hover:text-emerald-400">Accounts</Link>
              <Link href="/broker" className="hover:text-emerald-400">Broker</Link>
              <Link href="/buyer" className="hover:text-emerald-400">Buyer</Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:block">Welcome, Super Admin</span>
              <User className="w-6 h-6" />
              <div>
                <MenuIcon className="w-5 h-5 hover:text-white cursor-pointer" onClick={() => {}} />
                <XIcon className="w-5 h-5 hidden" />
              </div>
            </div>
          </div>
        </nav>

        <div className="md:ml-64 ml-0 pt-16">
          {children}
        </div>

        <footer className="fixed bottom-0 left-0 right-0 bg-navy/80 text-white/80 small py-4 text-center">
          <p>VentureSync Enterprise 2024</p>
        </footer>
      </body>
    </html>
  );
}