-- Neon DB Schema for VentureSync Enterprise
-- -------------------------------------------------------
-- Entities: users, firms, sites, plots, leads, transactions, milestones
-- -------------------------------------------------------

-- Extension for UUID generation (optional)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -------------------------------------------------------
-- Table: users
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin','manager','sales','accounts','broker','buyer')),
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Table: firms
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS firms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    gstin VARCHAR(15) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Table: sites
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS sites (
    id SERIAL PRIMARY KEY,
    firm_id INTEGER REFERENCES firms(id) ON DELETE CASCADE,
    name VARCHAR(300) NOT NULL,
    rera_id VARCHAR(50),
    khasra_numbers TEXT[],   -- array of Khasra numbers
    usps TEXT[],             -- array of development USP tags
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Table: plots
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS plots (
    id SERIAL PRIMARY KEY,
    site_id INTEGER REFERENCES sites(id) ON DELETE CASCADE,
    plot_number INTEGER NOT NULL,       -- e.g., 101 … 120
    area_sqft INTEGER NOT NULL,
    facing VARCHAR(10) NOT NULL CHECK (facing IN ('East','North','West')),
    status VARCHAR(20) NOT NULL DEFAULT 'Available' CHECK (status IN ('Available','Booked','Sold','Hold')),
    base_rate_per_sqft INTEGER NOT NULL DEFAULT 1250,
    plc_percent INTEGER DEFAULT 0,
    edc_per_sqft INTEGER NOT NULL DEFAULT 75,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (site_id, plot_number)
);

-- -------------------------------------------------------
-- Table: leads
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    preferred_plot_size INTEGER,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sold BOOLEAN DEFAULT FALSE,
    amount_inr INTEGER,          -- total agreement cost when sold
    protection_expires_at TIMESTAMP
);

-- -------------------------------------------------------
-- Table: transactions
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    plot_id INTEGER REFERENCES plots(id) ON DELETE SET NULL,
    firm_id INTEGER REFERENCES firms(id) ON DELETE SET NULL,
    client_name VARCHAR(200) NOT NULL,
    payment_mode VARCHAR(20) NOT NULL CHECK (payment_mode IN ('Bank Wire','UPI','Cheque','Cash')),
    clearance_status VARCHAR(20) NOT NULL DEFAULT 'Pending' CHECK (clearance_status IN ('Pending','Cleared','Bounced')),
    amount_inr INTEGER NOT NULL,
    transaction_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Table: milestones
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS milestones (
    id SERIAL PRIMARY KEY,
    plot_id INTEGER REFERENCES plots(id) ON DELETE CASCADE,
    stage VARCHAR(50) NOT NULL,
    percentage INTEGER NOT NULL,   -- 0, 20, 60, 20
    amount_inr INTEGER NOT NULL DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','failed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Indexes for common look‑ups
-- -------------------------------------------------------
CREATE INDEX idx_plots_site_id ON plots(site_id);
CREATE INDEX idx_plots_status ON plots(status);
CREATE INDEX idx_transactions_plot_id ON transactions(plot_id);
CREATE INDEX idx_leads_mobile ON leads(mobile);