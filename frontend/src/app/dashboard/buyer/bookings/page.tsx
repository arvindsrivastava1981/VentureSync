"use client";

import { Card } from "@/components/ui";
import { Calendar, MapPin, DollarSign } from "lucide-react";

export default function BuyerBookingsPage() {
  const bookings = [
    { id: "BK001", plot: "Plot 101", location: "Jalaun, UP", amount: "Rs.2.4M", status: "Confirmed", date: "2024-01-15" },
    { id: "BK002", plot: "Plot 105", location: "Jalaun, UP", amount: "Rs.1.8M", status: "Pending", date: "2024-01-20" },
    { id: "BK003", plot: "Plot 112", location: "Jalaun, UP", amount: "Rs.3.2M", status: "Completed", date: "2024-01-25" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">My Bookings</h1>
          <p className="text-slate-400">View your plot bookings</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{booking.plot}</h3>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${booking.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-400" : booking.status === "Pending" ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"}`}>
                  {booking.status}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{booking.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <DollarSign className="w-4 h-4" />
                  <span>{booking.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{booking.date}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  View Details
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
