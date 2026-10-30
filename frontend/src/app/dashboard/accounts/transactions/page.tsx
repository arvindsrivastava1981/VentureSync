"use client";

import { Card } from "@/components/ui";
import { DollarSign, Search, Filter, Download } from "lucide-react";

export default function TransactionsPage() {
  const transactions = [
    { id: "TX001", client: "Riverside Heights", amount: "₹2.4M", mode: "Bank Wire", status: "Cleared", date: "2024-01-15" },
    { id: "TX002", client: "Oakwood Residences", amount: "₹850K", mode: "UPI", status: "Pending", date: "2024-01-20" },
    { id: "TX003", client: "Green Valley Estates", amount: "₹1.2M", mode: "Cheque", status: "Cleared", date: "2024-01-25" },
    { id: "TX004", client: "Sunset Towers", amount: "₹650K", mode: "Cash", status: "Bounced", date: "2024-01-10" },
  ];

  const statusColors: Record<string, string> = {
    Cleared: "bg-emerald-500/10 text-emerald-400",
    Pending: "bg-amber-500/10 text-amber-400",
    Bounced: "bg-rose-500/10 text-rose-400",
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Transactions</h1>
            <p className="text-slate-400">View and manage all transactions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input type="text" placeholder="Search transactions..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-800/50">
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="text-left p-4 font-medium">ID</th>
                  <th className="text-left p-4 font-medium">Client</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Mode</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-white font-medium">{tx.id}</td>
                    <td className="p-4 text-slate-300">{tx.client}</td>
                    <td className="p-4 text-slate-300">{tx.amount}</td>
                    <td className="p-4 text-slate-400 text-sm">{tx.mode}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[tx.status]}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 text-sm">{tx.date}</td>
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
