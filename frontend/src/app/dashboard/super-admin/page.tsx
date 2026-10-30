import { Card } from '@/components/ui';
import { Building, Users, DollarSign, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Super Admin Dashboard - VentureSync',
};

const statCards = [
  { title: 'Total Properties', value: '1,250', change: '+12%', icon: Building, color: 'text-emerald-400' },
  { title: 'Active Users', value: '480', change: '+24%', icon: Users, color: 'text-sky-400' },
  { title: 'Total Revenue', value: '$4.6M', change: '+37%', icon: DollarSign, color: 'text-gold-400' },
  { title: 'Collection Rate', value: '89%', change: '+5%', icon: PieChart, color: 'text-teal-400' },
];

const recentActivity = [
  { id: 'TX123', client: 'Riverside Heights', amount: '$2.4M', status: 'Paid', date: '2024-01-15' },
  { id: 'TX456', client: 'Oakwood Residences', amount: '$850K', status: 'Pending', date: '2024-01-20' },
  { id: 'TX789', client: 'Green Valley Estates', amount: '$1.2M', status: 'Paid', date: '2024-01-25' },
  { id: 'TX101', client: 'Sunset Towers', amount: '$650K', status: 'Overdue', date: '2024-01-10' },
];

export default function SuperAdminDashboard() {
  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Super Admin Dashboard</h1>
            <p className="text-white/60">Full platform oversight and management</p>
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
            <h2 className="text-lg font-bold text-white mb-4">System Overview</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/60 text-xs">Total Sites</p>
                <p className="text-white font-medium">3</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/60 text-xs">Total Plots</p>
                <p className="text-white font-medium">120</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/60 text-xs">Available</p>
                <p className="text-emerald-400 font-medium">78</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white/60 text-xs">Sold</p>
                <p className="text-rose-400 font-medium">12</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a href="/dashboard/super-admin/users" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Manage Users</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="/dashboard/super-admin/sites" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Manage Sites</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="/dashboard/super-admin/plots" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Manage Plots</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-lg font-bold text-white mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="text-left p-3 font-medium">Transaction</th>
                  <th className="text-center p-3 font-medium">Client</th>
                  <th className="text-right p-3 font-medium">Amount</th>
                  <th className="text-center p-3 font-medium">Status</th>
                  <th className="text-right p-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3">{tx.id}</td>
                    <td className="text-center p-3">{tx.client}</td>
                    <td className="text-right p-3">{tx.amount}</td>
                    <td className="text-center p-3">
                      <span className={`text-xs uppercase font-medium ${tx.status === 'Paid' ? 'text-emerald-400' : tx.status === 'Pending' ? 'text-sky-400' : 'text-rose-400'}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="text-right p-3">{tx.date}</td>
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
