document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Set dark mode as the default mode on page load
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon'); // Set the moon icon for dark mode

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
