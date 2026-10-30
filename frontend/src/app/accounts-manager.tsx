import { Card, Grid, Button } from '@/components/ui';
import { TrendingUp, Building, Folder, Shield, Calendar, Zap, DollarSign, Clock, FileText } from 'lucide-react';

export const metadata = {
  title: 'VentureSync - Accounts Manager',
  description: 'Accounts Manager Dashboard',
};

export default function AccountsManager() {
  const financialSummary = [
    { title: 'Total Revenue', value: '$4.6M', icon: DollarSign, color: 'gold' },
    { title: 'Net Profit', value: '$1.7M', icon: TrendingUp, color: 'emerald' },
    { title: 'Profit Margin', value: '37%', icon: FileText, color: 'sky' },
    { title: 'Outstanding', value: '$850K', icon: Clock, color: 'rose' },
  ];

  const paymentLedger = [
    { id: 'PL001', venture: 'Riverside Heights', client: 'ABC Constructions', amount: '$2.4M', status: 'Paid', date: '2024-01-15' },
    { id: 'PL002', venture: 'Oakwood Residences', client: 'XYZ Developers', amount: '$850K', status: 'Pending', date: '2024-01-20' },
    { id: 'PL003', venture: 'Green Valley Estates', client: 'PQR Investments', amount: '$1.2M', status: 'Paid', date: '2024-01-25' },
    { id: 'PL004', venture: 'Sunset Towers', client: 'LMN Builders', amount: '$650K', status: 'Overdue', date: '2024-01-10' },
  ];

  const milestoneStages = [
    { stage: 'Token Deposit', percentage: 0, status: 'pending', amount: '$0' },
    { stage: 'Agreement 20%', percentage: 20, status: 'pending', amount: '$480K' },
    { stage: 'Construction 60%', percentage: 60, status: 'pending', amount: '$2.9M' },
    { stage: 'Final Registry', percentage: 20, status: 'pending', amount: '$960K' },
  ];

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold navy-bg inline-block px-4 py-2 rounded-lg">Accounts Manager Dashboard</h1>
        </header>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialSummary.map((summary) => (
            <Card key={summary.title} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm text-white/60 font-medium">{summary.title}</h3>
                  <p className="text-2xl font-bold {summary.color}-bg">{summary.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ color: summary.color }}>
                  <summary.icon />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Payment Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left: Payment Ledger */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Payment Ledger</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr className="text-white/60">
                    <th className="text-left p-3 font-medium">Venture</th>
                    <th className="text-center p-3 font-medium">Client</th>
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
                      <td className="text-center p-3"><span className="text-white/40 uppercase text-xs">{payment.status}</span></td>
                      <td className="text-right p-3">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Right: Milestone Tracker */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Milestone Tracker</h3>
            <div className="space-y-4">
              {milestoneStages.map((milestone) => (
                <div key={milestone.stage} className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ color: milestone.status === 'paid' ? 'emerald' : 'rose' }}>
                      {milestone.percentage === 0 ? '0%' : `${milestone.percentage}%`}
                    </div>
                    <span className="text-white/60">{milestone.stage}</span>
                  </div>
                  <span className="text-white/40 text-right">{milestone.amount}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
            <div className="h-64 rounded-lg bg-navy/50 backdrop-blur"></div>
          </Card>

          {/* Collection Rate */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Collection Rate</h3>
            <div className="h-64 rounded-lg bg-navy/50 backdrop-blur"></div>
          </Card>

          {/* Profit Margin */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Profit Margin</h3>
            <div className="h-64 rounded-lg bg-navy/50 backdrop-blur"></div>
          </Card>
        </div>
      </div>
    </div>
  );
}