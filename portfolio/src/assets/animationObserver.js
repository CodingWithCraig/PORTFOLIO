// Intersection Observer to activate animations on view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
});

// Observe all elements with the 'animate-on-view' class
document.querySelectorAll('[class*="animate-on-view"]').forEach((el) => {
  observer.observe(el);
});