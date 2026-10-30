export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export type AuthUser = {
  id: number;
  username: string;
  role: string;
  name: string;
};

let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
  accessToken = token;
  if (token) {
    localStorage.setItem('vs_token', token);
  } else {
    localStorage.removeItem('vs_token');
  }
}

export function getAccessToken(): string | null {
  if (accessToken) return accessToken;
  if (typeof window !== 'undefined') {
    accessToken = localStorage.getItem('vs_token');
  }
  return accessToken;
}

export function clearAccessToken() {
  setAccessToken(null);
}

async function request(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    ...(init?.headers as Record<string, string> || {}),
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(input, { ...init, headers });
}

export const api = {
  async login(username: string, password: string) {
    const res = await request(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return res.json();
  },

  async register(username: string, password: string, role: string, name: string) {
    const res = await request(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role, name }),
    });
    if (!res.ok) throw new Error('Registration failed');
    return res.json();
  },

  async getProfile(): Promise<AuthUser> {
    const res = await request(`${API_BASE}/auth/me`);
    if (!res.ok) throw new Error('Failed to fetch profile');
    return res.json();
  },

  async updateProfile(name: string): Promise<AuthUser> {
    const res = await request(`${API_BASE}/auth/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return res.json();
  },

  async changePassword(currentPassword: string, newPassword: string) {
    const res = await request(`${API_BASE}/auth/change-password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
    });
    if (!res.ok) throw new Error('Password change failed');
    return res.json();
  },

  async get<T>(path: string): Promise<T> {
    const res = await request(`${API_BASE}${path}`);
    if (!res.ok) throw new Error(`GET ${path} failed`);
    return res.json();
  },

  async post<T>(path: string, body: unknown): Promise<T> {
    const res = await request(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${path} failed`);
    return res.json();
  },

  async put<T>(path: string, body: unknown): Promise<T> {
    const res = await request(`${API_BASE}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`PUT ${path} failed`);
    return res.json();
  },
};