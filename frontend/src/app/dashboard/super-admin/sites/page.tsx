'use client';

import { Card } from '@/components/ui';
import { Building, Plus, MapPin, Users } from 'lucide-react';

export default function SitesPage() {
  const sites = [
    { id: 1, name: 'Auraiya Road Site, Jalaun UP', rera: 'UP-RERA-JAL-2023-4412', firm: 'Freedom India Infraventure', plots: 120 },
    { id: 2, name: 'Bangra Road Site, Jalaun UP', rera: 'UP-RERA-JAL-2023-8890', firm: 'Freedom India Infraventure', plots: 120 },
    { id: 3, name: 'Shree Narayan Vihar, Orai', rera: 'UP-RERA-JAL-2024-98421', firm: 'Shree Narayan Developer', plots: 120 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Site Management</h1>
            <p className="text-slate-400">Manage development sites and projects</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
            <Plus className="w-4 h-4" />
            Add Site
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <Card key={site.id} className="p-6 hover:border-blue-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-400" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">
                  Active
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{site.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{site.rera}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{site.firm}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-sm text-slate-400">{site.plots} Plots</span>
                <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  View Details →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}