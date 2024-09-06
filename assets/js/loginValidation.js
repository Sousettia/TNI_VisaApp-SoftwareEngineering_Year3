document.addEventListener("DOMContentLoaded", function () {
  // Handle login form submission
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    // Only attach if the login form exists on the page
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const username = document.querySelector(
        ".login-form input[type='text']"
      ).value;
      const password = document.querySelector(
        ".login-form input[type='password']"
      ).value;

      // Simple validation checks
      if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in both fields.");
        return;
      }

      // Check localStorage for stored user credentials
      const storedData = JSON.parse(localStorage.getItem("visaForm"));

      if (storedData) {
        if (username === storedData.email && password === storedData.password) {
          alert("Login successful!");
          localStorage.setItem("userLoggedIn", "true");
          localStorage.setItem("userName", storedData.name + " " + storedData.surname);
          // Redirect to another page or perform other actions
          window.location.href = "/pages/getvisa.html";
        } else {
          alert("Invalid username or password.");
        }
      } else {
        alert("No user data found.");
      }
    });
  }
});
