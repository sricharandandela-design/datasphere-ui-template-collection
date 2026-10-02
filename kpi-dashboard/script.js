// KPI Dashboard JavaScript

// Revenue Chart
const revenueCtx = document.getElementById("revenueChart");

new Chart(revenueCtx, {
    type: "line",

    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
        ],

        datasets: [{
            label: "Revenue",
            data: [
                42000,
                48000,
                45000,
                56000,
                61000,
                58000,
                69000,
                72000,
                79000,
                84250
            ],

            borderWidth: 3,
            tension: 0.4,
            fill: false
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


// KPI Overview Chart
const kpiCtx = document.getElementById("kpiChart");

new Chart(kpiCtx, {
    type: "doughnut",

    data: {
        labels: [
            "Revenue",
            "Users",
            "Orders",
            "Conversion"
        ],

        datasets: [{
            data: [
                84,
                72,
                86,
                68
            ],

            borderWidth: 2
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});


// Date Button
const dateButton = document.querySelector(".date-btn");

dateButton.addEventListener("click", function () {
    alert("Showing KPI performance for the last 30 days.");
});


// Sidebar Navigation
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });

});


// Dashboard Loaded
console.log("KPI Dashboard loaded successfully.");