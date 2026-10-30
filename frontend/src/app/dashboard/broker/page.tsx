import { Card } from '@/components/ui';
import { Users, Building, DollarSign, Shield, Calendar, FileText } from 'lucide-react';

export const metadata = {
  title: 'Broker Dashboard - VentureSync',
};

const statCards = [
  { title: 'Active Partners', value: '24', change: '+5', icon: Users, color: 'text-emerald-400' },
  { title: 'Total Bookings', value: '128', change: '+12', icon: Building, color: 'text-sky-400' },
  { title: 'Total Revenue', value: '$2.3M', change: '+18%', icon: DollarSign, color: 'text-gold-400' },
  { title: 'Success Rate', value: '95%', change: '+2%', icon: Shield, color: 'text-teal-400' },
];

const recentBookings = [
  { id: 'BR001', plot: 'Plot 101', location: 'Austin, TX', client: 'John Doe', amount: '$2.4M', status: 'Confirmed' },
  { id: 'BR002', plot: 'Plot 105', location: 'Dallas, TX', client: 'Jane Smith', amount: '$1.8M', status: 'Pending' },
  { id: 'BR003', plot: 'Plot 112', location: 'Houston, TX', client: 'Robert Johnson', amount: '$3.2M', status: 'Confirmed' },
  { id: 'BR004', plot: 'Plot 118', location: 'San Antonio, TX', client: 'Emily Davis', amount: '$1.5M', status: 'Pending' },
];

export default function ExternalBrokerDashboard() {
  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">External Broker Portal</h1>
            <p className="text-white/60">Partner portal for broker operations</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title} className="p-4 text-center">
              <div className="w-12 h-12 rounded-md mx-auto mb-4 flex items-center justify-center" style={{ color: 'var(--tw-text-color)' }}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 mt-1 text-xs">{stat.title}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Recent Bookings</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr className="text-white/60">
                    <th className="text-left p-3 font-medium">Plot</th>
                    <th className="text-center p-3 font-medium">Location</th>
                    <th className="text-right p-3 font-medium">Client</th>
                    <th className="text-right p-3 font-medium">Amount</th>
                    <th className="text-center p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3">{booking.plot}</td>
                      <td className="p-3">{booking.location}</td>
                      <td className="text-right p-3">{booking.client}</td>
                      <td className="text-right p-3">{booking.amount}</td>
                      <td className="text-center p-3">
                        <span className={`text-xs uppercase font-medium ${booking.status === 'Confirmed' ? 'text-emerald-400' : 'text-sky-400'}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Broker Tools</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Partner Portal</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Booking Management</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Reporting</span>
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-sm text-white/90">Compliance</span>
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

