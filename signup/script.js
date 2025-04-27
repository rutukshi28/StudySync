  // Sign Up Form Handling
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    // Simple email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // Explanation: At least 8 characters, 1 letter, and 1 number


    if (!username || !email || !password) {
      alert("Please fill in all fields.");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    }  else if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include both letters and numbers.");
      } else {
      alert("Sign Up successful!");
      window.location.href = "../index.html"; // Redirect to your desired page
    }
  });

  // Login Form Handling
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username && password) {
      alert("Login successful! ✅");
      window.location.href = "../index.html";
      // Simulate form submission or send to server
    } else {
      alert("Please enter your username and password.");
    }
  });