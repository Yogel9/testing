const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

document.querySelectorAll('.test-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('start-button')) {
            window.location.href = 'https://websim.ai/p/dxmslmlud_6c3xkyjifm';
        }
    });
});

document.querySelectorAll('.doc-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});