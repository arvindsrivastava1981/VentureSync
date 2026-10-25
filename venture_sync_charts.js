/* Chart.js Dashboard Visualizations for VentureSync */
document.addEventListener('DOMContentLoaded', function() {
  // Status Chart - Ventures by Status
  const statusCtx = document.getElementById('statusChart').getContext('2d');
  const statusChart = new Chart(statusCtx, {
    type: 'doughnut',
    data: {
      labels: ['Active', 'Pending', 'Closed'],
      datasets: [{
        data: [12, 19, 3],
        backgroundColor: ['#2ECC71', '#F1C40F', '#E74C3C']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Ventures by Status' }
      }
    }
  });

  // Plots Chart - Plot Distribution
  const plotsCtx = document.getElementById('plotsChart').getContext('2d');
  const plotsChart = new Chart(plotsCtx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Plots Sold',
        data: [65, 59, 80, 81],
        backgroundColor: '#3B82F6'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Plot Distribution' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Revenue Chart - Revenue Overview
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  const revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue ($)',
        data: [2000, 1500, 3000, 2500, 4000, 3500],
        borderColor: '#F1C40F',
        backgroundColor: 'rgba(241, 196, 15, 0.2)',
        fill: true,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Revenue Overview' }
      },
      scales: {
        y: {
          title: { display: true, text: 'Revenue ($)' }
        }
      }
    }
  });

  // Collection Rate Chart
  const collectionCtx = document.getElementById('collectionChart').getContext('2d');
  const collectionChart = new Chart(collectionCtx, {
    type: 'pie',
    data: {
      labels: ['Target', 'Actual'],
      datasets: [{
        data: [90, 72],
        backgroundColor: ['#3B82F6', '#F5D88D']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Collection Rate' }
      }
    }
  });
});
</script>