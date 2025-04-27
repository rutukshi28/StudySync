console.log("Welcome to StudySync..!")

function showSlidebar() {
  const sidebar = document.querySelector(".slidebar");
  sidebar.style.display = "flex";
}

function hideSidebar(){
  const sidebar = document.querySelector(".slidebar");
  sidebar.style.display = "none";
}

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Show button when user scrolls down
window.onscroll = function () {
  let btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


//For making Email active
// Select the form and the message div
const form = document.getElementById('newsForm');
const emailInput = document.getElementById('emailInput');
const messageDiv = document.getElementById('message');

// Email validation pattern
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on submit

  const email = emailInput.value.trim();

  // Validate email
  if (!emailPattern.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.className = 'message error';
    return;
  }

  // Simulate successful submission
  messageDiv.textContent = 'Thank you for subscribing!';
  messageDiv.className = 'message success';

  // Clear the input field after submission
  emailInput.value = '';
});