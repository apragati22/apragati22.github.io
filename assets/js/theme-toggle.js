document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.innerText = 'Toggle Theme';
    document.body.appendChild(toggleButton);
  
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  