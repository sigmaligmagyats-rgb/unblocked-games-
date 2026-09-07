document.addEventListener("DOMContentLoaded", () => {
    const directorySearch = document.getElementById("directorySearch");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const viewHeading = document.getElementById("viewHeading");
    const searchWrapper = document.getElementById("headerSearchWrapper");
    const mainHeader = document.getElementById("mainHeader");

    // Theater Mode UI Elements
    const gameCards = document.querySelectorAll(".item-card");
    const theaterPanel = document.getElementById("panel-theater");
    const theaterFrame = document.getElementById("gameTheaterFrame");
    const closeTheaterBtn = document.getElementById("closeTheaterBtn");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    // 1. Live Instant Catalog Filtering
    if (directorySearch) {
        directorySearch.addEventListener("keyup", () => {
            const queryValue = directorySearch.value.toLowerCase();
            const activePanel = document.querySelector(".view-panel.active");
            if (!activePanel) return;
            
            const projectCards = activePanel.getElementsByClassName("item-card");

            for (let i = 0; i < projectCards.length; i++) {
                const headlineText = projectCards[i].querySelector(".item-title").textContent.toLowerCase();
                if (headlineText.includes(queryValue)) {
                    projectCards[i].style.display = "flex";
                } else {
                    projectCards[i].style.display = "none";
                }
            }
        });
    }

    // 2. Navigation State Panel Routers
    navigationLinks.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Wipe running games out of frame memory if clicking sidebar links
            killTheaterInstance();
            
            navigationLinks.forEach(link => link.classList.remove("active"));
            button.classList.add("active");
            
            const tabContext = button.getAttribute("data-tab");
            viewHeading.textContent = tabContext.charAt(0).toUpperCase() + tabContext.slice(1);
            
            document.querySelectorAll(".view-panel").forEach(panel => panel.classList.remove("active"));
            const targetPanel = document.getElementById(`panel-${tabContext}`);
            if (targetPanel) targetPanel.classList.add("active");

            // Hide the search bar container layout when visiting Home
            if (tabContext === "home") {
                searchWrapper.style.visibility = "hidden";
            } else {
                searchWrapper.style.visibility = "visible";
                mainHeader.style.display = "flex";
            }
        });
    });

    // 3. Game Theater Loading Engine
    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const gameSourceURL = card.getAttribute("data-src");
            if (!gameSourceURL) return;

            // Hide regular panel head systems
            mainHeader.style.display = "none";

            // Turn off normal category boxes and activate the iframe stage
            document.querySelectorAll(".view-panel").forEach(panel => panel.classList.remove("active"));
            theaterPanel.classList.add("active");

            // Push game URL into the player source target
            theaterFrame.src = gameSourceURL;
        });
    });

    // 4. Reset & Unload Frame Application Context
    function killTheaterInstance() {
        theaterFrame.src = ""; // Stops game sound/processes loops completely
        mainHeader.style.display = "flex";
    }

    if (closeTheaterBtn) {
        closeTheaterBtn.addEventListener("click", () => {
            killTheaterInstance();
            
            // Route user back to whichever active navigation category tab they had open
            const currentActiveNav = document.querySelector(".nav-link.active").getAttribute("data-tab");
            document.getElementById(`panel-${currentActiveNav}`).classList.add("active");
        });
    }

    // 5. Native Screen Scaling Hook
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", () => {
            if (theaterFrame.requestFullscreen) {
                theaterFrame.requestFullscreen();
            } else if (theaterFrame.webkitRequestFullscreen) { /* Safari support fallback */
                theaterFrame.webkitRequestFullscreen();
            } else if (theaterFrame.msRequestFullscreen) { /* IE/Edge legacy support */
                theaterFrame.msRequestFullscreen();
            }
        });
    }
});

