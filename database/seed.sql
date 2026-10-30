-- Neon DB Seed for VentureSync Enterprise
-- -------------------------------------------------------
-- Insert firms, sites, a handful of sample plots (101‑110 per site),
-- a default super‑admin user, and milestone template.
-- To fully populate plots #101‑#120 run the extra generate_plots.sql
-- -------------------------------------------------------

-- 1. Firms
INSERT INTO firms (name, gstin) VALUES
('Freedom India Infraventure Limited', '27ABCDE1234F1Z5'),
('Shree Narayan Developer', '32XYZW9876T2P8Q')
ON CONFLICT (gstin) DO NOTHING;

-- 2. Sites
-- Freedom India sites
INSERT INTO sites (firm_id, name, rera_id, khasra_numbers, usps) VALUES
(1, 'Auraiya Road Site, Jalaun UP', 'UP-RERA-JAL-2023-4412', ARRAY['412/2','415'],
 ARRAY['30ftRoad','40ftRoad','centralPark','temple','elecPole','apexRoad','naliSewer']),
(1, 'Bangra Road Site, Jalaun UP', 'UP-RERA-JAL-2023-8890', ARRAY['104/1'],
 ARRAY['30ftRoad','40ftRoad','centralPark','temple','elecPole','apexRoad','naliSewer']),
-- Shree Narayan site
(2, 'Shree Narayan Vihar, Orai Jalaun State Highway', 'UP-RERA-JAL-2024-98421', ARRAY['108','109 Min'],
 ARRAY['30ftRoad','40ftRoad','centralPark','temple','elecPole','apexRoad','naliSewer'])
ON CONFLICT DO NOTHING;

-- 3. Sample plots (101‑110 for each site)
-- We use concrete values so the seed is deterministic.
-- Site 1 (id=1)
INSERT INTO plots (site_id, plot_number, area_sqft, facing, status, base_rate_per_sqft, edc_per_sqft, plc_percent) VALUES
(1, 101, 850, 'East', 'Available', 1250, 75, 10),
(1, 102, 950, 'North', 'Available', 1250, 75, 0),
(1, 103, 800, 'West', 'Booked', 1250, 75, 10),
(1, 104, 900, 'East', 'Available', 1250, 75, 10),
(1, 105, 875, 'North', 'Sold', 1250, 75, 0),
(1, 106, 920, 'West', 'Available', 1250, 75, 10),
(1, 107, 830, 'East', 'Available', 1250, 75, 10),
(1, 108, 940, 'North', 'Booked', 1250, 75, 0),
(1, 109, 860, 'West', 'Available', 1250, 75, 10),
(1, 110, 910, 'East', 'Available', 1250, 75, 10);

-- Site 2 (id=2)
INSERT INTO plots (site_id, plot_number, area_sqft, facing, status, base_rate_per_sqft, edc_per_sqft, plc_percent) VALUES
(2, 101, 880, 'North', 'Available', 1250, 75, 0),
(2, 102, 820, 'West', 'Available', 1250, 75, 10),
(2, 103, 900, 'East', 'Booked', 1250, 75, 10),
(2, 104, 850, 'North', 'Available', 1250, 75, 0),
(2, 105, 890, 'West', 'Sold', 1250, 75, 10),
(2, 106, 810, 'East', 'Available', 1250, 75, 0),
(2, 107, 970, 'North', 'Available', 1250, 75, 10),
(2, 108, 860, 'West', 'Booked', 1250, 75, 0),
(2, 109, 835, 'East', 'Available', 1250, 75, 10),
(2, 110, 905, 'North', 'Available', 1250, 75, 0);

-- Site 3 (id=3)
INSERT INTO plots (site_id, plot_number, area_sqft, facing, status, base_rate_per_sqft, edc_per_sqft, plc_percent) VALUES
(3, 101, 830, 'West', 'Available', 1250, 75, 10),
(3, 102, 940, 'East', 'Available', 1250, 75, 0),
(3, 103, 870, 'North', 'Booked', 1250, 75, 10),
(3, 104, 880, 'West', 'Available', 1250, 75, 10),
(3, 105, 910, 'East', 'Sold', 1250, 75, 0),
(3, 106, 850, 'North', 'Available', 1250, 75, 10),
(3, 107, 960, 'West', 'Available', 1250, 75, 10),
(3, 108, 820, 'East', 'Available', 1250, 75, 0),
(3, 109, 895, 'North', 'Booked', 1250, 75, 10),
(3, 110, 900, 'West', 'Available', 1250, 75, 10);

-- 4. Default super‑admin user (password: Test@123, hash placeholder)
INSERT INTO users (username, password_hash, role, name) VALUES
('admin', '$2a$14$N6qoQ6GzJ4u7YJ4s9uqZyuGQfR9q0b8ojV9q0J6H3Y4J5eM9q7N8C', 'admin', 'Super Admin')
ON CONFLICT (username) DO NOTHING;

-- 5. Sample leads (optional – comment out if not needed)
-- INSERT INTO leads (name, mobile, preferred_plot_size, sold, amount_inr, protection_expires_at) VALUES
-- ('Rahul Sharma', '9876543210', 1500, FALSE, NULL, NULL),
-- ('Priya Singh', '8765432109', 1200, FALSE, NULL, NULL)
-- ON CONFLICT DO NOTHING;

-- 6. Milestone template (one row; later rows will be linked to specific plots)
INSERT INTO milestones (plot_id, stage, percentage, amount_inr, status) VALUES
(1, 'Token Deposit', 0, 0, 'pending'),
(1, 'Agreement 20%', 20, 0, 'pending'),
(1, 'Construction Installments 60%', 60, 0, 'pending'),
(1, 'Final Registry & Possession 20%', 20, 0, 'pending')
ON CONFLICT DO NOTHING;

-- -------------------------------------------------------
-- End of seed.sql
-- To add the remaining plots (111‑120) for each site, run:
--   psql "..." -f database/generate_plots.sql
-- -------------------------------------------------------