const createBtn = document.getElementById("createBtn");
const exportAll = document.getElementById("exportAll");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");


// CREATE REPORT

createBtn.addEventListener("click", function () {
    alert("Create Report window opened.");
});


// EXPORT ALL

exportAll.addEventListener("click", function () {
    alert("All reports are being prepared for export.");
});


// SEARCH + FILTER

function filterReports() {

    const searchValue = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const statusValue = statusFilter.value;

    const rows = document.querySelectorAll("#reportTable tr");

    rows.forEach(row => {

        const text = row.textContent.toLowerCase();
        const rowType = row.dataset.type;
        const rowStatus = row.dataset.status;

        const matchesSearch = text.includes(searchValue);

        const matchesType =
            typeValue === "all" || rowType === typeValue;

        const matchesStatus =
            statusValue === "all" || rowStatus === statusValue;

        if (matchesSearch && matchesType && matchesStatus) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterReports);
typeFilter.addEventListener("change", filterReports);
statusFilter.addEventListener("change", filterReports);


// DOWNLOAD BUTTONS

const downloadButtons =
    document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {

    button.addEventListener("click", function () {
        alert("Report download started.");
    });

});


// EXPORT FORMAT BUTTONS

const formatButtons =
    document.querySelectorAll(".small-btn");

formatButtons.forEach(button => {

    button.addEventListener("click", function () {

        const format = this.dataset.format;

        alert("Exporting report as " + format + "...");
    });

});


// SIDEBAR

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


console.log("Analytics Reports & Export loaded successfully.");