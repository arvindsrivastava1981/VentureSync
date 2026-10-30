import { Card } from '@/components/ui';
import { Users, DollarSign, TrendingUp, Clock, Shield, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Sales Dashboard - VentureSync',
};

const statCards = [
  { title: 'Active Leads', value: '480', change: '+24%', icon: Users, color: 'text-sky-400' },
  { title: 'Pipeline Value', value: '$9.4M', change: '+12%', icon: DollarSign, color: 'text-gold-400' },
  { title: 'Deals Closed', value: '20', change: '+6', icon: Shield, color: 'text-emerald-400' },
  { title: 'Conversion Rate', value: '34%', change: '+5%', icon: TrendingUp, color: 'text-teal-400' },
];

const leads = [
  { id: 'L001', name: 'Rahul Sharma', plot: 'Plot 101', value: '$2.4M', status: 'New', source: 'Website' },
  { id: 'L002', name: 'Priya Singh', plot: 'Plot 105', value: '$1.8M', status: 'Contacted', source: 'Referral' },
  { id: 'L003', name: 'Vikram Patel', plot: 'Plot 112', value: '$3.2M', status: 'Qualified', source: 'Walk-in' },
  { id: 'L004', name: 'Anita Roy', plot: 'Plot 118', value: '$1.5M', status: 'Proposal', source: 'Event' },
];

export default function SalesDashboard() {
  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Sales Executive Dashboard</h1>
            <p className="text-white/60">Track leads and sales performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white/60">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{stat.change}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-navy/50 flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Active Leads</h2>
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
                      <td className="text-right p-3">{lead.value}</td>
                      <td className="text-center p-3">
                        <span className={`text-xs uppercase font-medium ${lead.status === 'New' ? 'text-sky-400' : lead.status === 'Contacted' ? 'text-gold-400' : 'text-emerald-400'}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-3">{lead.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a href="/dashboard/sales/leads" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">View All Leads</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="/dashboard/sales/performance" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Sales Performance</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="/dashboard/super-admin/plots" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Available Plots</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
