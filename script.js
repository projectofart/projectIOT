// Dữ liệu mẫu để hiển thị tạm thời
const sampleData = {
    temperature: [22, 23, 21, 24, 26, 25, 27],
    humidity: [60, 62, 58, 65, 64, 61, 66],
    timestamps: [
        '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'
    ]
};

// Khởi tạo Line Chart
const lineChartCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: {
        labels: sampleData.timestamps,
        datasets: [
            { label: 'Temperature (°C)', data: sampleData.temperature, borderColor: 'rgb(255, 99, 132)', fill: false },
            { label: 'Humidity (%)', data: sampleData.humidity, borderColor: 'rgb(54, 162, 235)', fill: false }
        ]
    },
    options: {
        scales: {
            x: { title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Value' } }
        }
    }
});

// Khởi tạo Pie Chart
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: {
        labels: ['Temperature', 'Humidity'],
        datasets: [{
            data: [sampleData.temperature[sampleData.temperature.length - 1], sampleData.humidity[sampleData.humidity.length - 1]],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)']
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
    }
});
function refreshData() {
    // Thực hiện chức năng tải lại dữ liệu từ Node-RED hoặc nguồn khác
    alert("Data refreshed!");
    // Bạn có thể viết thêm mã để lấy dữ liệu mới từ server
}
