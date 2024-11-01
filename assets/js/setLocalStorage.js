document.getElementById("UserData").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const idInput = document.getElementById("idNumber").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const confirmPasswordInput =
    document.getElementById("confirm-password").value;

  // Email validation pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // ID validation pattern (13 digits)
  const idPattern = /^\d{13}$/;

  // Validate ID
  if (!idPattern.test(idInput)) {
    alert("ID Number must be exactly 13 digits.");
    return;
  }

  // Validate email
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password and confirm password match
  if (passwordInput !== confirmPasswordInput) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Gather form data
  const formData = {
    idNumber: idInput,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: emailInput,
    dobDay: document.getElementById("dobDay").value,
    dobMonth: document.getElementById("dobMonth").value,
    dobYear: document.getElementById("dobYear").value,
    gender: document.getElementById("gender").value,
    password: passwordInput,
  };

  // Store form data in localStorage
  localStorage.setItem("UserData", JSON.stringify(formData));
  window.location.href = "/pages/newLogin.html";

  // Notify user
  alert("Sign-up Completed!");
});
