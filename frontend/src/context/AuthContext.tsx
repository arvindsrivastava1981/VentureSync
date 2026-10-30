'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { api, getAccessToken, setAccessToken, clearAccessToken, type AuthUser } from '@/lib/api';

type AuthContextType = {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string, role: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (name: string) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      api
        .getProfile()
        .then((u) => setUser(u))
        .catch(() => clearAccessToken())
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, password: string) => {
    const data = await api.login(username, password);
    setAccessToken(data.access_token);
    setUser(data.user);
  };

  const register = async (username: string, password: string, role: string, name: string) => {
    await api.register(username, password, role, name);
  };

  const logout = () => {
    clearAccessToken();
    setUser(null);
    window.location.href = '/login';
  };

  const updateProfile = async (name: string) => {
    const updated = await api.updateProfile(name);
    setUser(updated);
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    await api.changePassword(currentPassword, newPassword);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token: getAccessToken(),
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}