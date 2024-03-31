#include <iostream><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Trading Information</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>Trading Information</h1>
  
  <div style="width: 80%;">
    <canvas id="movingAveragesChart"></canvas>
  </div>
  <div id="balance"></div>
  
  <script>
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Display Moving Averages Chart
        const ctx = document.getElementById('movingAveragesChart').getContext('2d');
        const movingAveragesChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Add appropriate labels
            datasets: [{
              label: 'Moving Averages',
              data: data.movingAverages,
              borderColor: 'blue',
              backgroundColor: 'lightblue',
              tension: 0.4
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Display Current Balance
        document.getElementById('balance').innerText = `Current Balance: $${data.balance}`;
      })
      .catch(error => console.error('Error fetching data:', error));
  </script>
</body>
</html>

int main() {
  std::cout << "Hello World!\n";
}