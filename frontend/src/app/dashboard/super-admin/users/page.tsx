'use client';

import { Card } from '@/components/ui';
import { Users, Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function UsersPage() {
  const users = [
    { id: 1, name: 'Super Admin', username: 'admin', role: 'admin', status: 'Active' },
    { id: 2, name: 'John Sales', username: 'jsales', role: 'sales', status: 'Active' },
    { id: 3, name: 'Jane Accounts', username: 'jaccounts', role: 'accounts', status: 'Active' },
    { id: 4, name: 'Bob Broker', username: 'bbroker', role: 'broker', status: 'Inactive' },
    { id: 5, name: 'Alice Buyer', username: 'abuyer', role: 'buyer', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">User Management</h1>
            <p className="text-slate-400">Manage platform users and roles</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700/50">
              <thead className="bg-slate-800/50">
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Username</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-white font-medium">{user.name}</td>
                    <td className="p-4 text-slate-300">{user.username}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 capitalize">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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