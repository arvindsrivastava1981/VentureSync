'use client';

import { Card } from '@/components/ui';
import { Map, Plus, Search, Filter } from 'lucide-react';

export default function PlotsPage() {
  const plots = [
    { id: 1, number: 101, area: 850, facing: 'East', status: 'Available', rate: 1250 },
    { id: 2, number: 102, area: 950, facing: 'North', status: 'Available', rate: 1250 },
    { id: 3, number: 103, area: 800, facing: 'West', status: 'Booked', rate: 1250 },
    { id: 4, number: 104, area: 900, facing: 'East', status: 'Available', rate: 1250 },
    { id: 5, number: 105, area: 875, facing: 'North', status: 'Sold', rate: 1250 },
  ];

  const statusColors: Record<string, string> = {
    Available: 'bg-emerald-500/10 text-emerald-400',
    Booked: 'bg-blue-500/10 text-blue-400',
    Sold: 'bg-rose-500/10 text-rose-400',
    Hold: 'bg-amber-500/10 text-amber-400',
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Plot Management</h1>
            <p className="text-slate-400">View and manage property plots</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
            <Plus className="w-4 h-4" />
            Add Plot
          </button>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search plots..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-800/50">
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="text-left p-4 font-medium">Plot #</th>
                  <th className="text-left p-4 font-medium">Area (sqft)</th>
                  <th className="text-left p-4 font-medium">Facing</th>
                  <th className="text-left p-4 font-medium">Rate/sqft</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {plots.map((plot) => (
                  <tr key={plot.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-white font-medium">Plot {plot.number}</td>
                    <td className="p-4 text-slate-300">{plot.area.toLocaleString()}</td>
                    <td className="p-4 text-slate-300">{plot.facing}</td>
                    <td className="p-4 text-slate-300">₹{plot.rate}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[plot.status]}`}>
                        {plot.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        View →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}