// Function to load the navbar
function loadNavbar() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // Attach event listeners or any additional JS for the navbar here
      let subMenu = document.getElementById("subMenu");
      document.querySelector(".user-pic").addEventListener("click", toggleMenu);
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

// Function to toggle the submenu
function toggleMenu() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
}); 
