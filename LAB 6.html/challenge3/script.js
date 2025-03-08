document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.href !== "http://google.com/") { // Ensuring Google link is unaffected
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default navigation
                alert("clicked!");
            });
        }
    });
});