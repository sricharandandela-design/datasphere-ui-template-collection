// ==========================================
// ANALYTICS DASHBOARD
// ==========================================


// SIDEBAR NAVIGATION

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


// DATE BUTTON

const dateButton = document.querySelector(".date-btn");

dateButton.addEventListener("click", function () {

    alert("Date range: Last 30 Days");

});


// REVENUE CHART

const revenueCanvas = document.getElementById("revenueChart");

const revenueChart = new Chart(revenueCanvas, {

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

        datasets: [

            {
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

                fill: true,

                borderColor: "#2563eb",

                backgroundColor: "rgba(37, 99, 235, 0.10)",

                pointRadius: 4,

                pointBackgroundColor: "#2563eb"

            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {

            y: {
                beginAtZero: true,

                ticks: {
                    callback: function (value) {
                        return "$" + value / 1000 + "k";
                    }
                }

            }

        }

    }

});


// SALES CHART

const salesCanvas = document.getElementById("salesChart");

const salesChart = new Chart(salesCanvas, {

    type: "bar",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets: [

            {
                label: "Orders",

                data: [
                    620,
                    780,
                    720,
                    910,
                    1080,
                    1240
                ],

                borderRadius: 7,

                backgroundColor: "#60a5fa"

            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});


// TRAFFIC SOURCE CHART

const trafficCanvas = document.getElementById("trafficChart");

const trafficChart = new Chart(trafficCanvas, {

    type: "doughnut",

    data: {

        labels: [
            "Organic Search",
            "Social Media",
            "Direct",
            "Referral"
        ],

        datasets: [

            {
                data: [
                    42,
                    25,
                    20,
                    13
                ],

                borderWidth: 0,

                backgroundColor: [
                    "#2563eb",
                    "#60a5fa",
                    "#93c5fd",
                    "#bfdbfe"
                ]

            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "70%",

        plugins: {

            legend: {
                position: "bottom"
            }

        }

    }

});


// YEAR FILTER

const revenueFilter = document.getElementById("revenueFilter");

revenueFilter.addEventListener("change", function () {

    const selectedYear = revenueFilter.value;

    console.log("Selected year:", selectedYear);

});


// VIEW ALL TRANSACTIONS

const viewAllButton = document.getElementById("viewAllBtn");

viewAllButton.addEventListener("click", function () {

    alert("Showing all transactions...");

});


// DASHBOARD LOADED

console.log("Analytics Dashboard loaded successfully.");