"use client";

import { useState } from 'react';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Grid } from '@/components/grid';
import { ArrowRight, Users, Building, Layout, Wallet, Shield } from 'lucide-react';

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<'super-admin' | 'sales' | 'accounts' | 'broker' | 'buyer' | null>(null);

  const roles = [
    { key: 'super-admin', icon: Users, title: 'Super Admin', description: 'Full dashboard access, comprehensive oversight', color: 'gold' },
    { key: 'sales', icon: ArrowRight, title: 'Sales Executive', description: 'Track leads & sales performance', color: 'emerald' },
    { key: 'accounts', icon: Building, title: 'Accounts Manager', description: 'Financial overview and management', color: 'sky' },
    { key: 'broker', icon: Shield, title: 'External Broker', description: 'Partner portal for broker operations', color: 'rose' },
    { key: 'buyer', icon: Layout, title: 'Buyer Portal', description: 'View and book property plots', color: 'teal' },
  ] as const;

  if (selectedRole) {
    return <NavigateToRole role={selectedRole} />;
  }

  return (
    <div className="min-h-screen navy-bg text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">VentureSync</h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            A comprehensive real estate land developer platform managing the entire lifecycle of property development.
          </p>
          <Grid columns={2} className="gap-4 mt-8">
            {roles.map((role) => (
              <Button
                key={role.key}
                onClick={() => setSelectedRole(role.key)}
                className={`group relative rounded-lg border border-white/20 hover:bg-white/10 transition-colors ${role.color}-bg`}
              >
                <div className="p-6 flex flex-col items-center gap-3">
                  <role.icon className={`w-8 h-8 ${role.color}-bg/20 rounded-md flex items-center justify-center`} />
                  <h3 className="font-medium">{role.title}</h3>
                  <p className="text-white/60 line-clamp-2">{role.description}</p>
                </div>
                <ArrowRight className={`w-4 h-4 ml-auto text-${role.color}-500 group-hover:text-${role.color}-300 transition-colors`} />
              </Button>
            ))}
          </Grid>
        </Card>
      </div>
    </div>
  );
}

function NavigateToRole({ role }: { role: string }) {
  const rolePaths = {
    'super-admin': '/super-admin',
    'sales': '/sales',
    'accounts': '/accounts',
    'broker': '/broker',
    'buyer': '/buyer',
  };

  return (
    <div className="min-h-screen navy-bg flex items-center justify-center">
      <Card className="p-8 md:p-12 max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Accessing {role.replace('-', ' ')} Dashboard</h2>
        <p className="text-white/60 mb-8">Redirecting...</p>
        <p className="text-white/60" id="role-info"></p>
      </Card>
    </div>
  );
}