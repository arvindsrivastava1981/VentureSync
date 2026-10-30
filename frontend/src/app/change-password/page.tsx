'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Lock, Shield } from 'lucide-react';
import { Button } from '@/components/button';
import { Card } from '@/components/card';


export default function ChangePasswordPage() {
  const { changePassword, isAuthenticated } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthenticated) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await changePassword(currentPassword, newPassword);
      setMessage('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setMessage('Current password is incorrect or change failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen navy-bg flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gold flex items-center justify-center">
            <Shield className="w-6 h-6 text-navy-bg" />
          </div>
          <h1 className="text-2xl font-bold text-white">Change Password</h1>
          <p className="text-white/60">Update your account password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <Lock className="w-4 h-4" /> Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Enter current password"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <Lock className="w-4 h-4" /> New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Enter new password"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 block flex items-center gap-2">
              <Lock className="w-4 h-4" /> Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full pl-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="Confirm new password"
            />
          </div>

          {message && (
            <div className={`p-3 rounded-lg text-sm font-medium ${message.includes('successfully') ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'}`}>
              {message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-3 bg-gold text-navy-bg font-medium hover:bg-gold/90 transition-colors"
            disabled={loading}
          >
            {loading ? 'Changing...' : 'Change Password'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
