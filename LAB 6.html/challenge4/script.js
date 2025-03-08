document.addEventListener("DOMContentLoaded", function () {
    // Select all links inside the <nav> element
    let navLinks = document.querySelectorAll("nav a");

    // Loop through each link and add a click event listener
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            alert(this.textContent); // Show an alert with the text of the clicked link
        });
    });
});