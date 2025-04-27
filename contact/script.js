const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate sending the message
  successMessage.style.display = 'block';

  // Reset form
  form.reset();

  // Hide message after 4 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 4000);
});