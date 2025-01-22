// Wait until the HTML document is fully loaded and parsed before running this code.
document.addEventListener("DOMContentLoaded", function () {

  // Define a constant for the "Back to Top" button by grabbing it from the document by its ID.
  const backToTopButton = document.getElementById("backToTop");

  // If the "Back to Top" button exists (is not null or undefined):
  if (backToTopButton) {

    // Add an event listener to the window that listens for the "scroll" event.
    // When the user scrolls, the function below runs.
    window.addEventListener("scroll", function () {

      // Check if the user has scrolled more than 200px down the page.
      // `document.body.scrollTop` works for older browsers,
      // while `document.documentElement.scrollTop` works for modern ones.
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        // If the user has scrolled down enough, make the button visible by setting its display to "block".
        backToTopButton.style.display = "block";
      } else {

        // If the user scrolls back up, hide the button by setting its display to "none".
        backToTopButton.style.display = "none";
      }
    });
  }

  // Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
  console.log("Button clicked - scrolling to top");
});


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

