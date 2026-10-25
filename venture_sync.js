<script>
  // Role-based view toggling
  const roleViews = {
    'super_admin': 'dashboardView',
    'sales_executive': 'salesView',
    'accounts_manager': 'accountsView',
    'external_broker': 'dashboardView',
    'buyer_portal': 'dashboardView'
  };

  // View containers
  const viewContainers = {
    'dashboardView': document.getElementById('dashboardView'),
    'salesView': document.getElementById('salesView'),
    'accountsView': document.getElementById('accountsView')
  };

  const sidebarNav = document.getElementById('sidebar');

  // Initialize: hide all views except welcome
  Object.values(viewContainers).forEach(container => {
    container.classList.add('hidden');
  });
  document.getElementById('welcomeView').classList.remove('hidden');
  document.getElementById('dashboardView').classList.add('hidden');
  document.getElementById('salesView').classList.add('hidden');
  document.getElementById('accountsView').classList.add('hidden');

  // Role switcher change handler
  document.querySelectorAll('[data-role]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const selectedRole = this.getAttribute('data-role');
      
      // Hide all views
      const views = ['welcomeView', 'dashboardView', 'salesView', 'accountsView'];
      views.forEach(viewId => {
        document.getElementById(viewId).classList.add('hidden');
      });
      
      // Show selected view
      const viewId = roleViews[selectedRole];
      if (viewContainers[viewId]) {
        viewContainers[viewId].classList.remove('hidden');
      }
      
      // Update sidebar navigation based on role
      updateSidebarForRole(selectedRole);
    });
  });

  function updateSidebarForRole(role) {
    // Clear existing nav items
    sidebarNav.innerHTML = '<!-- Will be rendered by JS based on current role -->';
    
    const navItems = {
      'super_admin': `
        <div class="space-y-2">
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-navy text-white font-medium">
            Manage Ventures
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-navy/20 text-venture-navy font-medium">
            User Management
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-navy/20 text-venture-navy font-medium">
            Broker Management
          </a>
        </div>
      `,
      'sales_executive': `
        <div class="space-y-2">
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-emerald text-white font-medium">
            Layout Map
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-emerald/20 text-venture-emerald font-medium">
            Lead Management
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-emerald/20 text-venture-emerald font-medium">
            Site Visits
          </a>
        </div>
      `,
      'accounts_manager': `
        <div class="space-y-2">
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-gold text-white font-medium">
            Payment Ledger
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-gold/20 text-venture-gold font-medium">
            Payment History
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-gold/20 text-venture-gold font-medium">
            Document Generator
          </a>
        </div>
      `,
      'external_broker': `
        <div class="space-y-2">
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-teal text-white font-medium">
            Inventory (Read-Only)
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-teal/20 text-venture-teal font-medium">
            Register New Lead
          </a>
        </div>
      `,
      'buyer_portal': `
        <div class="space-y-2">
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-navy text-white font-medium">
            Your Booked Plots
          </a>
          <a href="#" onclick="return false;" class="block rounded-lg px-4 py-2 bg-venture-navy/20 text-venture-navy font-medium">
            Download Documents
          </a>
        </div>
      `
    };
    
    // Clear existing nav items
    sidebarNav.innerHTML = '<!-- Will be rendered by JS based on current role -->';
    
    if (navItems[role]) {
      sidebarNav.innerHTML = navItems[role];
    }
  }
</script>