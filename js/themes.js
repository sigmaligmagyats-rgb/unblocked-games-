// GLOBAL GRADIENT ENGINE FOR SELENITE hell yeah 
(function() {
    // 1. Inject the custom global stylesheet into the current page header= absalute cinama
    if (!document.getElementById('custom-gradient-theme')) {
        const link = document.createElement('link');
        link.id = 'custom-gradient-theme';
        link.rel = 'stylesheet';
        link.href = '/custom-theme.css'; // Points to the file created in Step 1
        document.head.appendChild(link);
    }

    // 2. Continuous movement coordinate engine for peak background
    function animateGlobalGradient() {
        const randomX = Math.floor(Math.random() * 80) + 10; // Avoid harsh screen edges
        const randomY = Math.floor(Math.random() * 80) + 10; 
        
        document.documentElement.style.setProperty('--gradient-x', randomX + '%');
        document.documentElement.style.setProperty('--gradient-y', randomY + '%');
    }

    // Initialize engine loop immediately to keep runing
    window.addEventListener('DOMContentLoaded', () => {
        animateGlobalGradient();
        setInterval(animateGlobalGradient, 12000); // Transitions colors every 12 seconds
    });
})();
// ==========================================
// UNIVERSAL MOVING GRADIENT ENGINE backup
// ==========================================
(function() {
    // 1. Inject the keyframes, custom webkit scrollbars, and core background variables
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @property --gradient-x {
        syntax: "<percentage>";
        inherits: false;
        initial-value: 28%;
      }
      @property --gradient-y {
        syntax: "<percentage>";
        inherits: false;
        initial-value: 38%;
      }

      /* Forces the gradient on every root container element across all screens */
      html, body, #app, #root, .main-container, .wrapper, main, .content, .container-fluid {
        width: 100vw !important;
        min-height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden !important;
        color: #ffffff !important;
        font-family: "Mulish", sans-serif !important;
        
        background: rgb(16, 0, 43) !important;
        background-image: radial-gradient(circle at var(--gradient-x) var(--gradient-y), #5a189a 0%, #10002b 100%) !important;
        background-size: 100vw 100vh !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        
        transition: --gradient-x 12s ease-in-out, --gradient-y 12s ease-in-out !important;
      }

      /* Make game grid modules and navbars glassy transparent so the aura shows beneath */
      .nav, navbar, header, .sidebar, .card, .game-card, .menu-item, .nav-bar, .pinned-games, .all-games {
        background-color: rgba(24, 0, 50, 0.4) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border: 1px solid rgba(123, 44, 191, 0.2) !important;
      }

      /* Custom Glowing Scrollbars for your theme layout */
      *::-webkit-scrollbar {
        height: 10px !important;
        width: 8px !important;
      }
      *::-webkit-scrollbar-thumb {
        border-radius: 5px !important;
        background-color: #7B2CBF !important;
      }
      *::-webkit-scrollbar-track {
        border-radius: 5px !important;
        background-color: #240046 !important;
      }
    `;
    document.head.appendChild(styleElement);

    // 2. Automate the smooth tracking movement coordinates loop
    function moveGlobalGradient() {
        const randomX = Math.floor(Math.random() * 80) + 10; // 10% to 90% boundary range
        const randomY = Math.floor(Math.random() * 80) + 10; 
        
        document.documentElement.style.setProperty('--gradient-x', randomX + '%');
        document.documentElement.style.setProperty('--gradient-y', randomY + '%');
    }

    // Initialize animation immediately and sync loop timers to matching 12-second intervals
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => {
            moveGlobalGradient();
            setInterval(moveGlobalGradient, 12000);
        });
    } else {
        moveGlobalGradient();
        setInterval(moveGlobalGradient, 12000);
    }
})();
