// Wait until the HTML document is fully loaded and parsed before running this code.
document.addEventListener("DOMContentLoaded", function () {

  // Define a constant for the "Back to Top" button by grabbing it from the document by its ID.
  const backToTopButton = document.getElementById("backToTop");

  // If the "Back to Top" button exists (is not null or undefined):
  if (backToTopButton) {

    // Create a reusable function for smooth scrolling to the top of the page.
    const smoothScrollToTop = function () {
      window.scrollTo({
        top: 0,             // Scroll to the top of the document
        behavior: "smooth", // Smooth scrolling effect
      });
      console.log("Scrolled to top");
    };

    // Attach the `smoothScrollToTop` function to the "Back to Top" button's click event.
    backToTopButton.addEventListener("click", smoothScrollToTop);
  }

  // Create a reusable function for smooth scrolling to the "Contact" section.
  const smoothScrollToContact = function () {

    // Grab the "Contact" section by its ID.
    const contactSection = document.getElementById("contact");

    // If the "Contact" section exists:
    if (contactSection) {

      // Scroll smoothly to the "Contact" section, aligning it at the top of the viewport.
      contactSection.scrollIntoView({
        behavior: "smooth", // Make the scrolling smooth instead of jumping instantly.
        block: "start" // Align the section so its top is at the start of the viewport.
      });
    }
  };

  // Define a constant for the "Join" button by grabbing it from the document by its ID.
  const joinButton = document.getElementById("join");

  // If the "Join" button exists:
  if (joinButton) {

    // Add a "click" event listener to the "Join" button.
    // When the button is clicked, it calls the `smoothScrollToContact` function.
    joinButton.addEventListener("click", smoothScrollToContact);
  }

  // Define a constant for the "Volunteer" button by grabbing it from the document by its ID.
  const volunteerButton = document.getElementById("volunteer");

  // If the "Volunteer" button exists:
  if (volunteerButton) {

    // Add a "click" event listener to the "Volunteer" button.
    // When the button is clicked, it calls the `smoothScrollToContact` function.
    volunteerButton.addEventListener("click", smoothScrollToContact);
  }
});
