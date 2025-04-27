//for header
window.addEventListener('load', () => {
    document.querySelector('.header h1').style.opacity = '1';
    document.querySelector('.header p').style.opacity = '1';
  });




// Scroll-based animation
const members = document.querySelectorAll('.member');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  members.forEach(member => {
    const top = member.getBoundingClientRect().top;
    if (top < triggerBottom) {
      member.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

