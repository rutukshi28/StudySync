// Scroll animation with Intersection Observer
const cards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// Click interaction: toggle "clicked" state
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked');
  });
});