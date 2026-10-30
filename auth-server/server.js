const express = require('express');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});
app.use(express.json());

const JWT_SECRET = 'venturesync-secret-key';
const users = new Map();

// Seed default admin user
const adminHash = bcryptjs.hashSync('Test@123', 10);
users.set('admin', { id: 1, username: 'admin', password_hash: adminHash, role: 'admin', name: 'Super Admin' });

let nextId = 2;

function getToken(user) {
  return jwt.sign({ sub: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
}

app.post('/auth/register', async (req, res) => {
  const { username, password, role, name } = req.body;
  if (users.has(username)) {
    return res.status(409).json({ message: 'Username already exists' });
  }
  const password_hash = await bcryptjs.hash(password, 10);
  const user = { id: nextId++, username, password_hash, role: role || 'buyer', name: name || username };
  users.set(username, user);
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.get(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const match = await bcryptjs.compare(password, user.password_hash);
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({
    access_token: getToken(user),
    user: { id: user.id, username: user.username, role: user.role, name: user.name },
  });
});

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { id: payload.sub, username: payload.username, role: payload.role };
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

app.get('/auth/me', authMiddleware, (req, res) => {
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.put('/auth/profile', authMiddleware, async (req, res) => {
  const { name } = req.body;
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.name = name;
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.put('/auth/change-password', authMiddleware, async (req, res) => {
  const { current_password, new_password } = req.body;
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const match = await bcryptjs.compare(current_password, user.password_hash);
  if (!match) return res.status(401).json({ message: 'Current password is incorrect' });
  user.password_hash = await bcryptjs.hash(new_password, 10);
  res.json({ message: 'Password changed successfully' });
});

app.get('/', (req, res) => res.json({ status: 'ok', service: 'VentureSync Auth API' }));

const PORT = 3001;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));