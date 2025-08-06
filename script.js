document.addEventListener('DOMContentLoaded', function() {

  // --- Scroll-Triggered Fade-In Animation ---
  const sections = document.querySelectorAll('.fade-in-section');

  const options = {
    root: null, // uses the viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

});
