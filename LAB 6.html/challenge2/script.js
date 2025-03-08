document.addEventListener("DOMContentLoaded", function () {
    // Select all paragraphs inside the div with id "main"
    let paragraphs = document.querySelectorAll("#main p");

    // Loop through each paragraph to find the one with specific text
    paragraphs.forEach(function (p) {
        if (p.textContent.includes("Llamas and Chickens!")) {
            p.style.color = "red"; // Change text color to red
        }
    });
});