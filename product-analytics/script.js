// Date button
document.getElementById("dateBtn").addEventListener("click", function () {
    alert("Date range selector opened!");
});

// Chart filter
document.getElementById("chartFilter").addEventListener("change", function () {
    alert("Showing product engagement for: " + this.value);
});

// View all products
document.getElementById("viewBtn").addEventListener("click", function () {
    alert("Showing all products.");
});

// Sidebar navigation
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

console.log("Product Analytics Dashboard loaded successfully.");