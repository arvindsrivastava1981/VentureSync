import { Card, Grid, Button } from '@/components/ui';
import { Building, Users, Link, Shield, Map, Clock, ShieldCheck, ShieldX, DollarSign, Calendar, FileText } from 'lucide-react';

export const metadata = {
  title: 'VentureSync - External Broker',
  description: 'External Broker Portal',
};

export default function ExternalBroker() {
  const partnerStats = [
    { title: 'Active Partners', value: '24', icon: Users, color: 'emerald' },
    { title: 'Total Bookings', value: '128', icon: Building, color: 'sky' },
    { title: 'Total Revenue', value: '₹2.3M', icon: DollarSign, color: 'gold' },
    { title: 'Success Rate', value: '95%', icon: ShieldCheck, color: 'teal' },
  ];

  const recentBookings = [
    { id: 'BR001', plot: 'Plot 101', location: 'Austin, TX', client: 'John Doe', amount: '₹2.4M', status: 'Confirmed' },
    { id: 'BR002', plot: 'Plot 105', location: 'Dallas, TX', client: 'Jane Smith', amount: '₹1.8M', status: 'Pending' },
    { id: 'BR003', plot: 'Plot 112', location: 'Houston, TX', client: 'Robert Johnson', amount: '₹3.2M', status: 'Confirmed' },
    { id: 'BR004', plot: 'Plot 118', location: 'San Antonio, TX', client: 'Emily Davis', amount: '₹1.5M', status: 'Pending' },
  ];

  const brokerTools = [
    { title: 'Partner Portal', href: '#', icon: Shield, color: 'emerald', description: 'Manage partner accounts and settings' },
    { title: 'Booking Management', href: '#', icon: Calendar, color: 'sky', description: 'View and process booking requests' },
    { title: 'Reporting', href: '#', icon: FileText, color: 'gold', description: 'Generate financial and sales reports' },
    { title: 'Compliance', href: '#', icon: ShieldX, color: 'rose', description: 'Ensure RERA and regulatory compliance' },
  ];

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold navy-bg inline-block px-4 py-2 rounded-lg">External Broker Portal</h1>
        </header>

        {/* Partner Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {partnerStats.map((stat) => (
            <Card key={stat.title} className="p-4 text-center">
              <div className="w-12 h-12 rounded-md mx-auto mb-4 flex items-center justify-center" style={{ color: stat.color }}>
                <stat.icon />
              </div>
              <p className="text-2xl font-bold {stat.color}-bg">{stat.value}</p>
              <p className="text-white/60 mt-1 small">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Recent Bookings */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="text-white/60">
                  <th className="text-left p-3 font-medium">Plot</th>
                  <th className="text-center p-3 font-medium">Location</th>
                  <th className="text-right p-3 font-medium">Client</th>
                  <th className="text-center p-3 font-medium">Amount</th>
                  <th className="text-center p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3">{booking.plot}</td>
                    <td className="p-3">{booking.location}</td>
                    <td className="p-3">{booking.client}</td>
                    <td className="text-right p-3">${booking.amount}</td>
                    <td className="text-center p-3"><span className="text-white/40 uppercase text-xs">{booking.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Broker Tools */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {brokerTools.map((tool) => (
            <Card key={tool.title} className="p-6 hover:bg-navy/90 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <tool.icon className={`w-6 h-6 ${tool.color}-bg/20 rounded-md flex items-center justify-center`} />
                <div>
                  <h3 className="font-medium">{tool.title}</h3>
                  <p className="text-white/60 text-sm">{tool.description}</p>
                </div>
              </div>
              <Link href={tool.href} className="mt-2 inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium gold bg-white/10 hover:bg-white/20 transition-colors">
                Manage
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}