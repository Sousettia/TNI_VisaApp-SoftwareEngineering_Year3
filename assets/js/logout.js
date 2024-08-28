document.querySelector(".logout-button").addEventListener("click", function () {
  localStorage.removeItem("userLoggedIn");
  window.location.href = "login.html"; // Redirect to login page
});
