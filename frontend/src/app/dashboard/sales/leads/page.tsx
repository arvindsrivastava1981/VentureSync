'use client';

import { Card } from '@/components/ui';
import { Users, Plus, Search, Phone, Mail } from 'lucide-react';

export default function LeadsPage() {
  const leads = [
    { id: 'L001', name: 'Rahul Sharma', mobile: '9876543210', plot: 'Plot 101', value: '₹2.4M', status: 'New', source: 'Website' },
    { id: 'L002', name: 'Priya Singh', mobile: '8765432109', plot: 'Plot 105', value: '₹1.8M', status: 'Contacted', source: 'Referral' },
    { id: 'L003', name: 'Vikram Patel', mobile: '7654321098', plot: 'Plot 112', value: '₹3.2M', status: 'Qualified', source: 'Walk-in' },
    { id: 'L004', name: 'Anita Roy', mobile: '6543210987', plot: 'Plot 118', value: '₹1.5M', status: 'Proposal', source: 'Event' },
  ];

  const statusColors: Record<string, string> = {
    New: 'bg-sky-500/10 text-sky-400',
    Contacted: 'bg-amber-500/10 text-amber-400',
    Qualified: 'bg-blue-500/10 text-blue-400',
    Proposal: 'bg-purple-500/10 text-purple-400',
    Closed: 'bg-emerald-500/10 text-emerald-400',
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Lead Management</h1>
            <p className="text-slate-400">Track and manage sales leads</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
            <Plus className="w-4 h-4" />
            Add Lead
          </button>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-800/50">
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="text-left p-4 font-medium">Lead Name</th>
                  <th className="text-left p-4 font-medium">Contact</th>
                  <th className="text-left p-4 font-medium">Plot</th>
                  <th className="text-left p-4 font-medium">Value</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-white font-medium">{lead.name}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Phone className="w-3 h-3" />
                        {lead.mobile}
                      </div>
                    </td>
                    <td className="p-4 text-slate-300">{lead.plot}</td>
                    <td className="p-4 text-slate-300">{lead.value}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 text-sm">{lead.source}</td>
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