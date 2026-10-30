const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});
app.use(express.json());

const JWT_SECRET = "venturesync-secret-key";
const users = new Map();

const adminHash = bcryptjs.hashSync("Test@123", 10);
users.set("admin", { id: 1, username: "admin", password_hash: adminHash, role: "admin", name: "Super Admin" });

const seedUsers = [
  { id: 2, username: "jsales", password_hash: bcryptjs.hashSync("Test@123", 10), role: "sales", name: "John Sales" },
  { id: 3, username: "jaccounts", password_hash: bcryptjs.hashSync("Test@123", 10), role: "accounts", name: "Jane Accounts" },
  { id: 4, username: "bbroker", password_hash: bcryptjs.hashSync("Test@123", 10), role: "broker", name: "Bob Broker" },
  { id: 5, username: "abuyer", password_hash: bcryptjs.hashSync("Test@123", 10), role: "buyer", name: "Alice Buyer" },
];
seedUsers.forEach(u => users.set(u.username, u));

let nextId = 6;

const sites = [
  { id: 1, name: "Auraiya Road Site, Jalaun UP", rera_id: "UP-RERA-JAL-2023-4412", firm: "Freedom India Infraventure", plots: 120, status: "Active" },
  { id: 2, name: "Bangra Road Site, Jalaun UP", rera_id: "UP-RERA-JAL-2023-8890", firm: "Freedom India Infraventure", plots: 120, status: "Active" },
  { id: 3, name: "Shree Narayan Vihar, Orai", rera_id: "UP-RERA-JAL-2024-98421", firm: "Shree Narayan Developer", plots: 120, status: "Active" },
];

const plots = [
  { id: 1, number: 101, site_id: 1, area: 850, facing: "East", status: "Available", rate: 1250 },
  { id: 2, number: 102, site_id: 1, area: 950, facing: "North", status: "Available", rate: 1250 },
  { id: 3, number: 103, site_id: 1, area: 800, facing: "West", status: "Booked", rate: 1250 },
  { id: 4, number: 104, site_id: 1, area: 900, facing: "East", status: "Available", rate: 1250 },
  { id: 5, number: 105, site_id: 1, area: 875, facing: "North", status: "Sold", rate: 1250 },
  { id: 6, number: 106, site_id: 2, area: 880, facing: "North", status: "Available", rate: 1250 },
  { id: 7, number: 107, site_id: 2, area: 820, facing: "West", status: "Available", rate: 1250 },
  { id: 8, number: 108, site_id: 3, area: 830, facing: "West", status: "Available", rate: 1250 },
];

const leads = [
  { id: "L001", name: "Rahul Sharma", mobile: "9876543210", plot: "Plot 101", value: "₹2.4M", status: "New", source: "Website" },
  { id: "L002", name: "Priya Singh", mobile: "8765432109", plot: "Plot 105", value: "₹1.8M", status: "Contacted", source: "Referral" },
  { id: "L003", name: "Vikram Patel", mobile: "7654321098", plot: "Plot 112", value: "₹3.2M", status: "Qualified", source: "Walk-in" },
  { id: "L004", name: "Anita Roy", mobile: "6543210987", plot: "Plot 118", value: "₹1.5M", status: "Proposal", source: "Event" },
];

const transactions = [
  { id: "TX001", client: "Riverside Heights", amount: "₹2.4M", mode: "Bank Wire", status: "Cleared", date: "2024-01-15" },
  { id: "TX002", client: "Oakwood Residences", amount: "₹850K", mode: "UPI", status: "Pending", date: "2024-01-20" },
  { id: "TX003", client: "Green Valley Estates", amount: "₹1.2M", mode: "Cheque", status: "Cleared", date: "2024-01-25" },
  { id: "TX004", client: "Sunset Towers", amount: "₹650K", mode: "Cash", status: "Bounced", date: "2024-01-10" },
];

const payments = [
  { id: "P001", client: "Riverside Heights", amount: "₹2.4M", method: "Bank Wire", status: "Received", date: "2024-01-15" },
  { id: "P002", client: "Oakwood Residences", amount: "₹850K", method: "UPI", status: "Pending", date: "2024-01-20" },
  { id: "P003", client: "Green Valley Estates", amount: "₹1.2M", method: "Cheque", status: "Received", date: "2024-01-25" },
];

const bookings = [
  { id: "BR001", plot: "Plot 101", location: "Jalaun, UP", client: "John Doe", amount: "₹2.4M", status: "Confirmed" },
  { id: "BR002", plot: "Plot 105", location: "Jalaun, UP", client: "Jane Smith", amount: "₹1.8M", status: "Pending" },
  { id: "BR003", plot: "Plot 112", location: "Jalaun, UP", client: "Robert Johnson", amount: "₹3.2M", status: "Confirmed" },
  { id: "BK001", plot: "Plot 101", location: "Jalaun, UP", amount: "₹2.4M", status: "Confirmed", date: "2024-01-15" },
  { id: "BK002", plot: "Plot 105", location: "Jalaun, UP", amount: "₹1.8M", status: "Pending", date: "2024-01-20" },
  { id: "BK003", plot: "Plot 112", location: "Jalaun, UP", amount: "₹3.2M", status: "Completed", date: "2024-01-25" },
];

function getToken(user) {
  return jwt.sign({ sub: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
}

function authMiddleware(req, res, next) {
  const auth = req.headersauthorization;
  if (!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ message: "Unauthorized" });
  const token = auth.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { id: payload.sub, username: payload.username, role: payload.role };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.post("/auth/register", async (req, res) => {
  const { username, password, role, name } = req.body;
  if (users.has(username)) return res.status(409).json({ message: "Username already exists" });
  const password_hash = await bcryptjs.hash(password, 10);
  const user = { id: nextId++, username, password_hash, role: role || "buyer", name: name || username };
  users.set(username, user);
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.get(username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const match = await bcryptjs.compare(password, user.password_hash);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });
  res.json({ access_token: getToken(user), user: { id: user.id, username: user.username, role: user.role, name: user.name } });
});

app.get("/auth/me", authMiddleware, (req, res) => {
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.put("/auth/profile", authMiddleware, async (req, res) => {
  const { name } = req.body;
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = name;
  res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
});

app.put("/auth/change-password", authMiddleware, async (req, res) => {
  const { current_password, new_password } = req.body;
  const user = [...users.values()].find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  const match = await bcryptjs.compare(current_password, user.password_hash);
  if (!match) return res.status(401).json({ message: "Current password is incorrect" });
  user.password_hash = await bcryptjs.hash(new_password, 10);
  res.json({ message: "Password changed successfully" });
});

app.get("/api/users", authMiddleware, (req, res) => {
  res.json([...users.values()].map(u => ({ id: u.id, username: u.username, role: u.role, name: u.name, status: "Active" })));
});

app.get("/api/sites", authMiddleware, (req, res) => res.json(sites));
app.get("/api/plots", authMiddleware, (req, res) => {
  const siteId = req.query.site_id;
  if (siteId) return res.json(plots.filter(p => p.site_id === parseInt(siteId)));
  res.json(plots);
});
app.get("/api/leads", authMiddleware, (req, res) => res.json(leads));
app.get("/api/transactions", authMiddleware, (req, res) => res.json(transactions));
app.get("/api/payments", authMiddleware, (req, res) => res.json(payments));
app.get("/api/bookings", authMiddleware, (req, res) => res.json(bookings));

app.get("/api/dashboard/super-admin", authMiddleware, (req, res) => {
  res.json({
    totalProperties: 1250, activeUsers: users.size, totalRevenue: "₹4.6M", collectionRate: "89%",
    totalSites: sites.length, totalPlots: 120, availablePlots: 78, soldPlots: 12,
    recentTransactions: transactions.slice(0, 4),
  });
});

app.get("/api/dashboard/sales", authMiddleware, (req, res) => {
  res.json({
    activeLeads: leads.length, pipelineValue: "₹9.4M", dealsClosed: 20, conversionRate: "34%",
    leads: leads,
    performance: [
      { month: "Jan", deals: 12, revenue: "₹15.2M" },
      { month: "Feb", deals: 15, revenue: "₹18.5M" },
      { month: "Mar", deals: 10, revenue: "₹12.8M" },
      { month: "Apr", deals: 18, revenue: "₹22.1M" },
      { month: "May", deals: 14, revenue: "₹17.3M" },
      { month: "Jun", deals: 20, revenue: "₹25.6M" },
    ],
  });
});

app.get("/api/dashboard/accounts", authMiddleware, (req, res) => {
  res.json({
    totalRevenue: "₹4.6M", netProfit: "₹1.7M", outstanding: "₹850K", profitMargin: "37%",
    transactions: transactions,
    milestoneStages: [
      { stage: "Token Deposit", percentage: 0, status: "pending", amount: "₹0" },
      { stage: "Agreement 20%", percentage: 20, status: "pending", amount: "₹480K" },
      { stage: "Construction 60%", percentage: 60, status: "pending", amount: "₹2.9M" },
      { stage: "Final Registry", percentage: 20, status: "pending", amount: "₹960K" },
    ],
  });
});

app.get("/api/dashboard/broker", authMiddleware, (req, res) => {
  res.json({
    activePartners: 24, totalBookings: 128, totalRevenue: "₹2.3M", successRate: "95%",
    recentBookings: bookings.filter(b => b.id.startsWith("BR")),
  });
});

app.get("/api/dashboard/buyer", authMiddleware, (req, res) => {
  const buyerBookings = bookings.filter(b => b.id.startsWith("BK"));
  res.json({
    totalBookings: buyerBookings.length,
    confirmed: buyerBookings.filter(b => b.status === "Confirmed").length,
    pending: buyerBookings.filter(b => b.status === "Pending").length,
    completed: buyerBookings.filter(b => b.status === "Completed").length,
    bookings: buyerBookings,
  });
});

app.get("/", (req, res) => res.json({ status: "ok", service: "VentureSync Auth API" }));

const PORT = 3001;
app.listen(PORT, () => console.log("Auth server running on port " + PORT));
