// motivetheme.js

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    const isDarkMode = themeToggle.checked;
    localStorage.setItem('darkMode', isDarkMode);

    body.classList.toggle('dark-theme', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
    }
});
