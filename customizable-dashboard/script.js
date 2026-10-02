// Customizable Dashboard JavaScript


// EDIT DASHBOARD BUTTON

const editBtn = document.getElementById("editBtn");
const controlPanel = document.getElementById("controlPanel");

editBtn.addEventListener("click", function () {

    controlPanel.classList.toggle("show");

    if (controlPanel.classList.contains("show")) {
        editBtn.textContent = "✓ Done Editing";
    } else {
        editBtn.textContent = "✏️ Edit Dashboard";
    }

});


// WIDGET CHECKBOXES

const checkboxes = document.querySelectorAll(
    ".controls input[type='checkbox']"
);

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const widgetName = checkbox.dataset.widget;

        const widget = document.querySelector(
            `.widget[data-widget="${widgetName}"]`
        );

        if (checkbox.checked) {
            widget.classList.remove("hidden");
        } else {
            widget.classList.add("hidden");
        }

    });

});


// RESET BUTTON

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {

    checkboxes.forEach(function (checkbox) {

        checkbox.checked = true;

        const widgetName = checkbox.dataset.widget;

        const widget = document.querySelector(
            `.widget[data-widget="${widgetName}"]`
        );

        widget.classList.remove("hidden");

    });

});


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


// WIDGET MENU BUTTONS

const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Widget options are available in the dashboard editor.");

    });

});


// DASHBOARD LOADED

console.log("Customizable Dashboard loaded successfully.");