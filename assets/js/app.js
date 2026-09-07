document.addEventListener("DOMContentLoaded", () => {
    const directorySearch = document.getElementById("directorySearch");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const viewHeading = document.getElementById("viewHeading");

    // 1. Interactive Index Search Filter
    if (directorySearch) {
        directorySearch.addEventListener("keyup", () => {
            const queryValue = directorySearch.value.toLowerCase();
            const projectCards = document.getElementsByClassName("item-card");

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

    // 2. Tab Navigation Focus Toggler
    navigationLinks.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Clear prior states
            navigationLinks.forEach(link => link.classList.remove("active"));
            
            // Assign active class context
            button.classList.add("active");
            
            // Re-render display panel headings programmatically
            const componentContext = button.getAttribute("data-tab");
            viewHeading.textContent = componentContext.charAt(0).toUpperCase() + componentContext.slice(1);
        });
    });
});
