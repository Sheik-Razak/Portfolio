// theme.js
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in localStorage
    try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            body.classList.add(savedTheme);
        } else {
            body.classList.add("dark-theme"); // Default theme
        }
    } catch (error) {
        console.error("LocalStorage is not available:", error);
    }

    // Toggle theme on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isLightTheme = body.classList.toggle("light-theme");
            body.classList.toggle("dark-theme", !isLightTheme);
            localStorage.setItem("theme", isLightTheme ? "light-theme" : "dark-theme");

            // Update accessibility attribute
            themeToggleBtn.setAttribute("aria-pressed", isLightTheme);
        });
    } else {
        console.error("Theme toggle button not found!");
    }
});


