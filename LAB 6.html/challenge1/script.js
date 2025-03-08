document.addEventListener("DOMContentLoaded", function () {
    // Select all paragraphs inside the div with id "main"
    let paragraphs = document.querySelectorAll("#main p");

    // Loop through each paragraph and apply styles
    paragraphs.forEach(function (p) {
        p.style.fontSize = "24px";
        p.style.color = "red";
    });
});