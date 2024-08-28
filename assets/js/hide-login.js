document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("userLoggedIn"); // Check if user is logged in

  // Hide login button if user is logged in
  if (isLoggedIn) {
    document.querySelector('.nav-links li a[href="login.html"]').style.display =
      "none";
    document.querySelector(".sub-menu-wrap").style.display = "block"; // Show user menu
  } else {
    document.querySelector('.nav-links li a[href="login.html"]').style.display =
      "block";
    document.querySelector(".sub-menu-wrap").style.display = "none"; // Hide user menu
  }
});
