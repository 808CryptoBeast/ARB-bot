// Trading logic and interactive features
function buy() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement buy functionality
    console.log(`Buying ${quantity} units at $${price} each`);
}

function sell() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement sell functionality
    console.log(`Selling ${quantity} units at $${price} each`);
}// Trading logic and interactive features
let historicalPrices = [];
let movingAverages = [];
let balance = 7500.0;

function updateMovingAverages(newPrice) {
    historicalPrices.push(newPrice);
    const period = 5;
    if (historicalPrices.length >= period) {
        const sum = historicalPrices.slice(-period).reduce((acc, val) => acc + val, 0);
        const average = sum / period;
        movingAverages.push(average);

        // Update Moving Averages Chart
        movingAveragesChart.data.labels.push(`Day ${movingAverages.length}`);
        movingAveragesChart.data.datasets[0].data.push(average);
        movingAveragesChart.update();
    }
}

function buy() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement buy functionality
    console.log(`Buying ${quantity} units at $${price} each`);
}

function sell() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement sell functionality
    console.log(`Selling ${quantity} units at $${price} each`);
}

// Initial setup of Moving Averages Chart
const ctx = document.getElementById('movingAveragesChart').getContext('2d');
const movingAveragesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Moving Averages',
            data: [],
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
});// Trading logic and interactive features
let historicalPrices = [];
let movingAverages = [];
let balance = 7500.0;

function updateMovingAverages(newPrice) {
    historicalPrices.push(newPrice);
    const period = 5;
    if (historicalPrices.length >= period) {
        const sum = historicalPrices.slice(-period).reduce((acc, val) => acc + val, 0);
        const average = sum / period;
        movingAverages.push(average);

        // Update Moving Averages Chart
        movingAveragesChart.data.labels.push(`Day ${movingAverages.length}`);
        movingAveragesChart.data.datasets[0].data.push(average);
        movingAveragesChart.update();
    }
}

function buy() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement buy functionality
    console.log(`Buying ${quantity} units at $${price} each`);
}

function sell() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    // Implement sell functionality
    console.log(`Selling ${quantity} units at $${price} each`);
}

// Initial setup of Moving Averages Chart
const ctx = document.getElementById('movingAveragesChart').getContext('2d');
const movingAveragesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Moving Averages',
            data: [],
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
});// Display Historical Prices
const pricesList = document.getElementById('pricesList');
historicalPrices.forEach((price, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Day ${index + 1}: $${price}`;
    pricesList.appendChild(listItem);
});