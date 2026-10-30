import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';
import RoleLayout from '@/components/layout/RoleLayout';

export const metadata: Metadata = {
  title: 'VentureSync',
  description: 'Real Estate Land Developer Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="navy-bg text-white min-h-screen">
        <AuthProvider>
          <RoleLayout>{children}</RoleLayout>
        </AuthProvider>
      </body>
    </html>
  );
}