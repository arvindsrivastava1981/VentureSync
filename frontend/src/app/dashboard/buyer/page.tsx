import { Card } from '@/components/ui';
import { Building, MapPin, Calendar, Shield, CheckCircle, Clock } from 'lucide-react';

export const metadata = {
  title: 'Buyer Portal - VentureSync',
};

const statCards = [
  { title: 'Total Bookings', value: '4', icon: Building, color: 'text-sky-400' },
  { title: 'Confirmed', value: '2', icon: CheckCircle, color: 'text-emerald-400' },
  { title: 'Pending', value: '2', icon: Clock, color: 'text-rose-400' },
  { title: 'Completed', value: '1', icon: Shield, color: 'text-teal-400' },
];

const bookings = [
  { id: 'BK001', plot: 'Plot 101', location: 'Austin, TX', amount: '$2.4M', status: 'Confirmed', booked: '2024-01-15' },
  { id: 'BK002', plot: 'Plot 105', location: 'Dallas, TX', amount: '$1.8M', status: 'Pending', booked: '2024-01-20' },
  { id: 'BK003', plot: 'Plot 112', location: 'Houston, TX', amount: '$3.2M', status: 'Completed', booked: '2024-01-25' },
  { id: 'BK004', plot: 'Plot 118', location: 'San Antonio, TX', amount: '$1.5M', status: 'Pending', booked: '2024-01-10' },
];

export default function BuyerPortal() {
  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Buyer Portal</h1>
            <p className="text-white/60">Manage your plot bookings and payments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title} className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ color: 'var(--tw-text-color)' }}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 mt-1 text-xs">{stat.title}</p>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-lg font-bold text-white mb-4">My Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="pb-4 text-left font-medium">Plot</th>
                  <th className="pb-4 text-left font-medium">Location</th>
                  <th className="pb-4 text-left font-medium">Amount</th>
                  <th className="pb-4 text-left font-medium">Status</th>
                  <th className="pb-4 text-left font-medium">Booked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-4">{booking.plot}</td>
                    <td className="py-4">{booking.location}</td>
                    <td className="py-4">{booking.amount}</td>
                    <td className="py-4">
                      <span className={`text-xs uppercase font-medium ${booking.status === 'Confirmed' ? 'text-emerald-400' : booking.status === 'Pending' ? 'text-sky-400' : 'text-teal-400'}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4">{booking.booked}</td>
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

