'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { User, Edit2 } from 'lucide-react';
import { Button } from '@/components/button';
import { Card } from '@/components/card';


export default function ProfilePage() {
  const { user, updateProfile, isAuthenticated } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthenticated || !user) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      await updateProfile(name);
      setMessage('Profile updated successfully');
    } catch {
      setMessage('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen navy-bg p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">My Account</h1>
            <p className="text-white/60">Manage your profile and settings</p>
          </div>
        </div>

        <Card className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <User className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-white/60 text-sm">{user.username} <span className="text-xs text-white/40">• {user.role}</span></p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
                <Edit2 className="w-4 h-4" /> Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg text-sm font-medium ${message.includes('successfully') ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'}`}>
                {message}
              </div>
            )}

            <Button
              type="submit"
              className="w-auto bg-gold text-navy-bg font-medium hover:bg-gold/90 transition-colors"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Account Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Username</span>
                <span className="text-white">{user.username}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Role</span>
                <span className={`text-white capitalize`}>{user.role}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Member ID</span>
                <span className="text-white">#{user.id}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Security</h3>
            <p className="text-white/60 text-sm mb-4">Change your password to keep your account secure.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
