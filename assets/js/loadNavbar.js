// Function to toggle the submenu
function toggleMenu() {
  console.log("Menu toggled");
  const subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}

// Function to load the navbar
function loadNavbar() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // Attach event listeners or any additional JS for the navbar here
      const userPic = document.querySelector(".user-pic");
      const subMenu = document.getElementById("subMenu");
      const loginButton = document.querySelector(".login-button");
      

      if (userPic) {
        userPic.addEventListener("click", () => {
          console.log("Menu toggled");
          subMenu.classList.toggle("open-menu");
        });

        const isLoggedIn = localStorage.getItem("userLoggedIn"); // Check if user is logged in
        const storedName = localStorage.getItem("userName");
        const displayElement = document.getElementById("nameDisplay");

        if (isLoggedIn) {
          userPic.style.display = "block";
          loginButton.style.display = "none";
          displayElement.textContent = storedName;
        } else {
          userPic.style.display = "none";
          loginButton.style.display = "block";
        }
      }
      // Handle logout functionality
      const logoutButton = document.querySelector(".logout-button");
      if (logoutButton) {
        // Only attach if the logout button exists on the page
        logoutButton.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default anchor behavior
          localStorage.removeItem("userLoggedIn");
          localStorage.removeItem("userName");
          window.location.href = "login.html"; // Redirect to the login page
        });
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
});
