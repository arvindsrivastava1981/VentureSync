import { Card, Grid, Button } from '@/components/ui';
import { Building, MapPin, Calendar, Shield, CheckCircle, Clock, Layout, Folder } from 'lucide-react';

export const metadata = {
  title: 'VentureSync - Buyer Portal',
  description: 'Buyer Portal for property bookings',
};

export default function BuyerPortal() {
  const bookings = [
    { id: 'BK001', plot: 'Plot 101', location: 'Austin, TX', amount: '$2.4M', status: 'Confirmed', booked: '2024-01-15' },
    { id: 'BK002', plot: 'Plot 105', location: 'Dallas, TX', amount: '$1.8M', status: 'Pending', booked: '2024-01-20' },
    { id: 'BK003', plot: 'Plot 112', location: 'Houston, TX', amount: '$3.2M', status: 'Completed', booked: '2024-01-25' },
    { id: 'BK004', plot: 'Plot 118', location: 'San Antonio, TX', amount: '$1.5M', status: 'Pending', booked: '2024-01-10' },
  ];

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Buyer Portal</h1>
          <p className="text-white/60">Manage your plot bookings and payments</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <h3 className="text-sm font-medium text-white/60">Total Bookings</h3>
            <p className="text-2xl font-bold">{bookings.length}</p>
          </Card>
          <Card>
            <h3 className="text-sm font-medium text-white/60">Confirmed</h3>
            <p className="text-2xl font-bold">
              {bookings.filter((b) => b.status === 'Confirmed').length}
            </p>
          </Card>
          <Card>
            <h3 className="text-sm font-medium text-white/60">Pending</h3>
            <p className="text-2xl font-bold">
              {bookings.filter((b) => b.status === 'Pending').length}
            </p>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="pb-4 text-left">Plot</th>
                  <th className="pb-4 text-left">Location</th>
                  <th className="pb-4 text-left">Amount</th>
                  <th className="pb-4 text-left">Status</th>
                  <th className="pb-4 text-left">Booked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-4">{booking.plot}</td>
                    <td className="py-4">{booking.location}</td>
                    <td className="py-4">{booking.amount}</td>
                    <td className="py-4">{booking.status}</td>
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