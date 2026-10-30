"use client";

import { Card } from "@/components/ui";
import { Calendar, Search, Plus } from "lucide-react";

export default function BrokerBookingsPage() {
  const bookings = [
    { id: "BR001", plot: "Plot 101", location: "Jalaun, UP", client: "John Doe", amount: "Rs.2.4M", status: "Confirmed" },
    { id: "BR002", plot: "Plot 105", location: "Jalaun, UP", client: "Jane Smith", amount: "Rs.1.8M", status: "Pending" },
    { id: "BR003", plot: "Plot 112", location: "Jalaun, UP", client: "Robert Johnson", amount: "Rs.3.2M", status: "Confirmed" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Booking Management</h1>
            <p className="text-slate-400">Manage broker bookings</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>
        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input type="text" placeholder="Search bookings..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-800/50">
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="text-left p-4 font-medium">Booking ID</th>
                  <th className="text-left p-4 font-medium">Plot</th>
                  <th className="text-left p-4 font-medium">Location</th>
                  <th className="text-left p-4 font-medium">Client</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-white font-medium">{b.id}</td>
                    <td className="p-4 text-slate-300">{b.plot}</td>
                    <td className="p-4 text-slate-400 text-sm">{b.location}</td>
                    <td className="p-4 text-slate-300">{b.client}</td>
                    <td className="p-4 text-slate-300">{b.amount}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${b.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                        {b.status}
                      </span>
                    </td>
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
