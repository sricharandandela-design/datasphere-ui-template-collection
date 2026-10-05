const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", function () {
    refreshBtn.textContent = "✓ Data Updated";

    setTimeout(() => {
        refreshBtn.textContent = "↻ Refresh Data";
    }, 1500);
});

const periodSelect = document.getElementById("periodSelect");

periodSelect.addEventListener("change", function () {
    alert("Showing " + this.value + " revenue data.");
});

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

console.log("Data Visualization Cards loaded successfully.");