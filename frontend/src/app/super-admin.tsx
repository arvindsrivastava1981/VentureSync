import { Card, Grid, Button } from '@/components/ui';
import { Home, Users, Building, FileText, Shield, Map, Clock, PieChart, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'VentureSync - Super Admin',
  description: 'Super Admin Dashboard',
};

export default function SuperAdminDashboard() {
  const metrics = [
    { title: 'Total Properties', value: '1,250', change: '+12%', icon: Building, color: 'emerald' },
    { title: 'Active Leads', value: '480', change: '+24%', icon: Users, color: 'sky' },
    { title: 'Total Revenue', value: '₹4.6M', change: '+37%', icon: DollarSign, color: 'gold' },
    { title: 'Collection Rate', value: '89%', change: '+5%', icon: PieChart, color: 'teal' },
  ];

  const transactions = [
    { id: 'TX123', client: 'Riverside Heights', amount: '₹2.4M', status: 'Paid', date: '2024-01-15' },
    { id: 'TX456', client: 'Oakwood Residences', amount: '₹850K', status: 'Pending', date: '2024-01-20' },
    { id: 'TX789', client: 'Green Valley Estates', amount: '₹1.2M', status: 'Paid', date: '2024-01-25' },
    { id: 'TX101', client: 'Sunset Towers', amount: '₹650K', status: 'Overdue', date: '2024-01-10' },
  ];

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold navy-bg inline-block px-4 py-2 rounded-lg">Super Admin Dashboard</h1>
        </header>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card key={metric.title} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm text-white/60 font-medium">{metric.title}</h3>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ color: metric.color }}>
                  <metric.icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-white/40 mt-2 line-clamp-2">{/* Description would go here */}</p>
            </Card>
          ))}
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
            {/* Chart would go here */}
          </Card>

          {/* Collection Rate */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Collection Rate</h3>
            <div className="relative h-64">
              {/* Collection rate chart would go here */}
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="text-left p-3 font-medium">Venture</th>
                  <th className="text-center p-3 font-medium">Amount</th>
                  <th className="text-center p-3 font-medium">Status</th>
                  <th className="text-right p-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3">{tx.client}</td>
                    <td className="text-center p-3">{tx.amount}</td>
                    <td className="text-center p-3"><span className="text-white/40 uppercase text-xs">{tx.status}</span></td>
                    <td className="text-right p-3">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}