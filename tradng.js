// Trading logic and interactive features
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

    if (checkRisk('buy', quantity)) {
        updateBalance('buy', quantity, price);
        console.log(`Buying ${quantity} units at $${price} each`);
    }
}

function sell() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    if (checkRisk('sell', quantity)) {
        updateBalance('sell', quantity, price);
        console.log(`Selling ${quantity} units at $${price} each`);
    }
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
});

// Display Historical Prices
const pricesList = document.getElementById('pricesList');
historicalPrices.forEach((price, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Day ${index + 1}: $${price}`;
    pricesList.appendChild(listItem);
});

// Update balance based on buy and sell actions
function updateBalance(action, quantity, price) {
    if (action === 'buy') {
        balance -= quantity * price;
    } else if (action === 'sell') {
        balance += quantity * price;
    }

    // Display updated balance
    document.getElementById('balance').innerText = `Current Balance: $${balance.toFixed(2)}`;
}

// Implement risk management (example: maximum position size of 1000 units)
const maxPositionSize = 1000;

function checkRisk(action, quantity) {
    if (action === 'buy' && quantity > maxPositionSize) {
        console.log('Exceeds maximum position size. Reduce quantity.');
        return false;
    }
    return true;
}

function buy() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    if (checkRisk('buy', quantity)) {
        updateBalance('buy', quantity, price);
        console.log(`Buying ${quantity} units at $${price} each`);
    }
}

function sell() {
    let quantity = document.getElementById('quantityInput').value;
    let price = document.getElementById('priceInput').value;

    if (checkRisk('sell', quantity)) {
        updateBalance('sell', quantity, price);
        console.log(`Selling ${quantity} units at $${price} each`);
    }
}