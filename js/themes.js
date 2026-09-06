// GLOBAL GRADIENT ENGINE FOR SELENITE hell yeah 
(function() {
    // 1. Inject the custom global stylesheet into the current page header
    if (!document.getElementById('custom-gradient-theme')) {
        const link = document.createElement('link');
        link.id = 'custom-gradient-theme';
        link.rel = 'stylesheet';
        link.href = '/custom-theme.css'; // Points to the file created in Step 1
        document.head.appendChild(link);
    }

    // 2. Continuous movement coordinate engine
    function animateGlobalGradient() {
        const randomX = Math.floor(Math.random() * 80) + 10; // Avoid harsh screen edges
        const randomY = Math.floor(Math.random() * 80) + 10; 
        
        document.documentElement.style.setProperty('--gradient-x', randomX + '%');
        document.documentElement.style.setProperty('--gradient-y', randomY + '%');
    }

    // Initialize engine loop immediately
    window.addEventListener('DOMContentLoaded', () => {
        animateGlobalGradient();
        setInterval(animateGlobalGradient, 12000); // Transitions colors every 12 seconds
    });
})();
