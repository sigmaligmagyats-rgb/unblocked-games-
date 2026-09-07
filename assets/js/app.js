document.addEventListener("DOMContentLoaded", () => {
    const directorySearch = document.getElementById("directorySearch");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const viewHeading = document.getElementById("viewHeading");
    const searchWrapper = document.getElementById("headerSearchWrapper");

    // 1. Interactive Multi-Panel Grid Search Filter
    if (directorySearch) {
        directorySearch.addEventListener("keyup", () => {
            const queryValue = directorySearch.value.toLowerCase();
            // Searches cards globally inside whichever panel is currently active
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

    // 2. Dynamic View Swapper Router
    navigationLinks.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Clear prior navbar selections
            navigationLinks.forEach(link => link.classList.remove("active"));
            button.classList.add("active");
            
            // Get chosen tab keyword context
            const tabContext = button.getAttribute("data-tab");
            
            // Update upper view text heading
            viewHeading.textContent = tabContext.charAt(0).toUpperCase() + tabContext.slice(1);
            
            // Hide all panels, then reveal the single active panel target
            document.querySelectorAll(".view-panel").forEach(panel => panel.classList.remove("active"));
            const targetPanel = document.getElementById(`panel-${tabContext}`);
            if (targetPanel) targetPanel.classList.add("active");

            // Hide the search bar on Home or Settings panels where it isn't needed
            if (tabContext === "home" || tabContext === "settings") {
                searchWrapper.style.visibility = "hidden";
            } else {
                searchWrapper.style.visibility = "visible";
            }
        });
    });
});

