import { metadata } from '@/app/layout';
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