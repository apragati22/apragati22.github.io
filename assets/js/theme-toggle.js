document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

// Retrieve the saved theme from localStorage, or default to light
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme or default to light
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon'); // Set the moon icon for dark mode
} else {
    document.body.classList.remove('dark-theme'); // Ensure light mode is the default
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Set the sun icon for light mode
}

    // // Set dark mode as the default mode on page load
    // document.body.classList.add('dark-theme');
    // themeIcon.classList.replace('fa-sun', 'fa-moon'); // Set the moon icon for dark mode

    // Listen for the button click to toggle between dark and light modes
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });
});
