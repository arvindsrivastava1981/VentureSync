import { Card, Grid, Button } from '@/components/ui';
import { Calendar, BarChart3, TrendingUp, Users, MapPin, Shield, Clock } from 'lucide-react';

export const metadata = {
  title: 'VentureSync - Sales Executive',
  description: 'Sales Executive Dashboard',
};

export default function SalesExecutive() {
  const leads = [
    { id: 'L001', name: 'Rahul Sharma', plot: 'Plot 101', value: '$2.4M', status: 'New', source: 'Website' },
    { id: 'L002', name: 'Priya Singh', plot: 'Plot 105', value: '$1.8M', status: 'Contacted', source: 'Referral' },
    { id: 'L003', name: 'Vikram Patel', plot: 'Plot 112', value: '$3.2M', status: 'Qualified', source: 'Walk-in' },
    { id: 'L004', name: 'Anita Roy', plot: 'Plot 118', value: '$1.5M', status: 'Proposal', source: 'Event' },
  ];

  const performance = [
    { month: 'Jan', deals: 12, revenue: '$15.2M' },
    { month: 'Feb', deals: 15, revenue: '$18.5M' },
    { month: 'Mar', deals: 10, revenue: '$12.8M' },
    { month: 'Apr', deals: 18, revenue: '$22.1M' },
    { month: 'May', deals: 14, revenue: '$17.3M' },
    { month: 'Jun', deals: 20, revenue: '$25.6M' },
  ];

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold navy-bg inline-block px-4 py-2 rounded-lg">Sales Executive Dashboard</h1>
        </header>

        {/* Performance Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Deals Performance */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Deals Performance</h3>
            <div className="relative h-64">
              {/* Performance chart would go here */}
            </div>
          </Card>

          {/* Revenue Performance */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Revenue Performance</h3>
            <div className="relative h-64">
              {/* Revenue chart would go here */}
            </div>
          </Card>
        </div>

        {/* Leads Table */}
        <div>
          <h2 className="text-xl font-bold mb-4">Active Leads</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="text-left p-3 font-medium">Lead Name</th>
                  <th className="text-center p-3 font-medium">Plot</th>
                  <th className="text-right p-3 font-medium">Value</th>
                  <th className="text-center p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Source</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3">{lead.name}</td>
                    <td className="text-center p-3">{lead.plot}</td>
                    <td className="text-right p-3">${lead.value}</td>
                    <td className="text-center p-3"><span className="text-white/40 uppercase text-xs">{lead.status}</span></td>
                    <td className="p-3">{lead.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Protection Timers */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Protection timer cards would go here */}
          <Card>
            <h3 className="text-xl font-bold mb-2">Lead Protection</h3>
            <p className="text-white/40">Timers active for pending leads</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-2">Upcoming Milestones</h3>
            <p className="text-white/40">20% agreement due</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-2">Pipeline Value</h3>
            <p className="text-white/40">$9.4M total</p>
          </Card>
        </div>
      </div>
    </div>
  );
}