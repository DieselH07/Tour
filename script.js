document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const images = document.querySelectorAll("main img");
    const welcomeImage = document.getElementById("welcome-image");
    const introText = document.getElementById("intro-text");
    const popupImages = document.querySelectorAll(".popup-image");

    // Function to hide the introductory text and all room images
    function hideIntroTextAndImages() {
        welcomeImage.style.display = "none";
        introText.style.display = "none";
        images.forEach((img) => {
            img.style.display = "none";
        });
    }

    // Function to hide all popup images
    function hidePopupImages() {
        popupImages.forEach((popup) => {
            popup.style.display = "none";
        });
    }

    // Show the introductory text and welcome image when the page loads
    welcomeImage.style.display = "block";
    introText.style.display = "block";
    
    hidePopupImages();

    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            // Hide the introductory text and all room images when any button is clicked
            hideIntroTextAndImages();
            
            // Hide all popup images when a button is clicked
            hidePopupImages();

            if (button.id === "homeButton") {
                // If the "Home" button is clicked, show the welcome image
                welcomeImage.style.display = "block";
                introText.style.display = "block";
            } else {
                // Show the corresponding room image based on the button's ID
                const sectionId = button.id.replace("show", "");
                const image = document.querySelector(`#${sectionId} img`);
                image.style.display = "block";

                // Show the popup image for the current section
                const popupImage = document.querySelector(`#${sectionId} .popup-image`);
                popupImage.style.display = "block";
            }
        });
    });
});
