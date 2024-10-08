// Function to load the navbar
function loadNavbar() {
  fetch("newnavbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // Attach event listeners or any additional JS for the navbar here
      const userPic = document.querySelector(".profile-dropdown");
      const subMenu = document.querySelector(".profile-dropdown-list");
      const btn = document.querySelector(".profile-dropdown-btn");
      const loginButton = document.querySelector(".login-button");
      const menuToggle = document.querySelector(".menu-toggle");
      const navbar = document.querySelector(".navbar");

      if (userPic) {
        userPic.addEventListener("click", () => {
          console.log("Menu toggled");
          subMenu.classList.toggle("open-menu");
        });

        if (menuToggle && navbar) {
          menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("open");
          });
        }

        const isLoggedIn = localStorage.getItem("userLoggedIn"); // Check if user is logged in
        if (isLoggedIn) {
          userPic.style.display = "block";
          loginButton.style.display = "none";
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
          window.location.href = "newLogin.html"; // Redirect to the login page
        });
      }

      // Load user details for the navbar
      loadUserDetails();
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

// Function to load user details
function loadUserDetails() {
  const storedData = localStorage.getItem("UserData");
  if (storedData) {
    const formData = JSON.parse(storedData);

    const elements = [
      {
        id: "nav_nameDisplay",
        value: `${formData.firstname} ${formData.lastname}`,
      },
      {
        id: "user_nameDisplay",
        value: `${formData.firstname}`,
      },
      {
        id: "p_nameDisplay",
        value: `${formData.firstname} ${formData.lastname}`,
      },
      { id: "p_id", value: `ID : ${formData.idNumber}` },
      {
        id: "p_birth",
        value: `Birth Date : ${formData.dobDay}/${formData.dobMonth}/${formData.dobYear}`,
      },
      { id: "p_gender", value: `Gender : ${formData.gender}` },
      { id: "p_emailDisplay", value: `Email : ${formData.email}` },
    ];

    elements.forEach((element) => {
      const el = document.getElementById(element.id);
      if (el) {
        el.textContent = element.value;
      }
    });
  } else {
    console.error("No data found in localStorage with key 'UserData'");
  }
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
});
