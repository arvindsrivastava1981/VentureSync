# VentureSync
VentureSync - Real Estate Land Developer Platform

## Project Overview
VentureSync is a comprehensive real estate land developer platform that manages the entire lifecycle of property development, from buyer interactions to administrative oversight. The platform provides role-based dashboards for different user types within the real estate ecosystem.

## Technology Stack
- **Frontend**: HTML5, Tailwind CSS (via CDN), Lucide Icons, Chart.js
- **Charts**: venture_sync_charts.js for financial and data visualizations
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Theme**: Light mode with dark navy background scheme

## User Roles & Pages

### 1. Index / Welcome Page (`index.html`)
- Main entry point for the platform
- Role selection screen with 5 user role options
- Grid-based layout with role-specific buttons
- Each role button shows icon, title, and brief description of access level

**Role Buttons:**
- **Super Admin** (`super_admin.html`): Full dashboard access, comprehensive oversight
- **Sales Executive** (`sales_executive.html`): Track leads & sales performance
- **Accounts Manager** (`accounts_manager.html`): Financial overview and management
- **External Broker** (`external_broker.html`): Partner portal for broker operations
- **Buyer Portal** (`buyer_portal.html`): View and book property plots

### 2. Super Admin Dashboard (`super_admin.html`)
- **Header**: Navigation with user profile and menu toggle
- **Sidebar**: Navigation links to all sections
- **Main Content Areas**:
  - **Overview Summary Cards**: Total properties, active leads, revenue metrics
  - **Financial Overview**: Total revenue ($4.6M), profit margin (37%), payment ledger with transaction history
  - **Charts**: Revenue chart and collection rate chart
  - **Transaction History**: Table showing ventures, clients, amounts, status, and dates
  - **Key Metrics**: Revenue overview and collection rate visualization

### 3. Sales Executive (`sales_executive.html`)
- *Details pending - will be added after full file review*

### 4. Accounts Manager Dashboard (`accounts_manager.html`)
- **Header**: Navigation with "Back to Menu" link and user profile
- **Sidebar**: Dashboard and Financials section links
- **Main Content**:
  - **Financial Summary Cards**:
    - Total Revenue: $4.6M
    - Net Profit: (amount)
    - Profit Margin: 37%
  - **Payment Ledger**: Table with venture name, client name, amount, status, and date
    - Sample entries: Riverside Heights ($2.4M - Paid), Oakwood Residences ($850K - Pending), Green Valley Estates ($1.2M - Paid), Sunset Towers ($650K - Overdue)
  - **Charts**: Revenue overview and collection rate visualization

### 5. External Broker (`external_broker.html`)
- *Details pending - will be added after full file review*

### 6. Buyer Portal (`buyer_portal.html`)
- **Header**: Navigation with "Back to Menu" link and user profile
- **Sidebar**: My Bookings, My Plots, and Logout links
- **Main Content**:
  - **Booking Summary**:
    - Total Bookings: 12
    - Confirmed: 8
    - Pending: 3
    - Completed: 1
  - **My Plot Bookings Table**:
    - Plot Name, Location, Status, Amount, Download action
    - Sample entries: Riverside Heights (Austin, TX - Confirmed, $2.4M), Oakwood Residences (Dallas, TX - Pending, $1.1M)
  - **Charts**: Plot distribution and collection rate visualization

## Navigation Structure
- Consistent header across all pages with role-specific welcome message
- Fixed sidebar navigation on left (hidden on mobile, revealed via menu toggle)
- "Back to Menu" link on all role-specific pages returns to welcome screen
- Role-based access control through URL routing

## Design Features
- **Color Scheme**: Venture color palette (navy, emerald, gold, rose, sky, teal)
- **Typography**: Inter font family throughout
- **Components**: Tailwind CSS classes for buttons, cards, tables, charts
- **Icons**: Lucide icon set for visual consistency
- **Responsive**: Adapts from mobile to large desktop screens
- **Interactive**: Hover effects, transition animations, scale transformations on interactive elements

## Development Notes
- All pages include Tailwind CSS config with custom venture color extensions
- Chart.js integrated for data visualization components
- venture_sync_charts.js handles chart data and configuration
- Lucide icons loaded via CDN for consistent iconography
- Page structure follows consistent header/sidebar/main layout pattern
