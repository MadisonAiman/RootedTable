document.addEventListener("DOMContentLoaded", function () {
    // Back to Top Button Functionality
    const backToTopButton = document.getElementById("backToTop");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
  
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Internal Link Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Lazy Load Images
    const lazyLoadImages = document.querySelectorAll('.lazy');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: "0px 0px 50px 0px",
      threshold: 0.1
    });
  
    lazyLoadImages.forEach(image => observer.observe(image));
  });
  