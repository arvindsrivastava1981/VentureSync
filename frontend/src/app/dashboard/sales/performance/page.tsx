"use client";

import { Card } from "@/components/ui";
import { TrendingUp, BarChart3, Target, Award } from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Sales Performance</h1>
          <p className="text-slate-400">Track your sales metrics and targets</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Deals Closed", value: "20", icon: Award, color: "text-emerald-400" },
            { title: "Revenue", value: "₹9.4M", icon: TrendingUp, color: "text-blue-400" },
            { title: "Conversion Rate", value: "34%", icon: Target, color: "text-amber-400" },
            { title: "Avg Deal Size", value: "₹470K", icon: BarChart3, color: "text-purple-400" },
          ].map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-6">
          <h2 className="text-lg font-bold text-white mb-4">Monthly Performance</h2>
          <div className="h-64 flex items-center justify-center text-slate-500">
            Performance chart will be displayed here
          </div>
        </Card>
      </div>
    </div>
  );
}
