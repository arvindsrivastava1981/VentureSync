import { Card } from '@/components/ui';
import { DollarSign, TrendingUp, FileText, Clock, Building, Shield } from 'lucide-react';

export const metadata = {
  title: 'Accounts Dashboard - VentureSync',
};

const statCards = [
  { title: 'Total Revenue', value: '₹4.6M', change: '+37%', icon: DollarSign, color: 'text-gold-400' },
  { title: 'Net Profit', value: '₹1.7M', change: '+12%', icon: TrendingUp, color: 'text-emerald-400' },
  { title: 'Outstanding', value: '₹850K', change: '-5%', icon: Clock, color: 'text-rose-400' },
  { title: 'Profit Margin', value: '37%', change: '+5%', icon: FileText, color: 'text-sky-400' },
];

const paymentLedger = [
  { id: 'PL001', venture: 'Riverside Heights', client: 'ABC Constructions', amount: '₹2.4M', status: 'Paid', date: '2024-01-15' },
  { id: 'PL002', venture: 'Oakwood Residences', client: 'XYZ Developers', amount: '₹850K', status: 'Pending', date: '2024-01-20' },
  { id: 'PL003', venture: 'Green Valley Estates', client: 'PQR Investments', amount: '₹1.2M', status: 'Paid', date: '2024-01-25' },
  { id: 'PL004', venture: 'Sunset Towers', client: 'LMN Builders', amount: '₹650K', status: 'Overdue', date: '2024-01-10' },
];

export default function AccountsDashboard() {
  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Accounts Manager Dashboard</h1>
            <p className="text-white/60">Financial overview and management</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white/60">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`text-xs ${stat.change.startsWith('-') ? 'text-rose-400' : 'text-emerald-400'} mt-1`}>
                    {stat.change}
                  </p>
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
            <h2 className="text-lg font-bold text-white mb-4">Payment Ledger</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr className="text-white/60">
                    <th className="text-left p-3 font-medium">Venture</th>
                    <th className="text-left p-3 font-medium">Client</th>
                    <th className="text-right p-3 font-medium">Amount</th>
                    <th className="text-center p-3 font-medium">Status</th>
                    <th className="text-right p-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentLedger.map((payment) => (
                    <tr key={payment.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3">{payment.venture}</td>
                      <td className="p-3">{payment.client}</td>
                      <td className="text-right p-3">{payment.amount}</td>
                      <td className="text-center p-3">
                        <span className={`text-xs uppercase font-medium ${payment.status === 'Paid' ? 'text-emerald-400' : payment.status === 'Pending' ? 'text-sky-400' : 'text-rose-400'}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="text-right p-3">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a href="/dashboard/accounts/transactions" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">View Transactions</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="/dashboard/accounts/payments" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Manage Payments</span>
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
