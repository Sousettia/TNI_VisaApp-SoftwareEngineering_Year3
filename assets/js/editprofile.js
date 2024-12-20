document.addEventListener("DOMContentLoaded", function () {
  // Retrieve existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem("UserData")) || {};

  // Populate form fields with existing data
  if (existingData.firstname)
    document.getElementById("firstname").value = existingData.firstname;
  if (existingData.lastname)
    document.getElementById("lastname").value = existingData.lastname;
  if (existingData.email)
    document.getElementById("email").value = existingData.email;

  // Populate Date of Birth fields with precise selection
  if (existingData.dobDay)
    document.getElementById("dobDay").value = existingData.dobDay;
  if (existingData.dobMonth)
    document.getElementById("dobMonth").value = existingData.dobMonth;
  if (existingData.dobYear)
    document.getElementById("dobYear").value = existingData.dobYear;

  // Populate gender field
  if (existingData.gender)
    document.getElementById("gender").value = existingData.gender;

  // Add event listener for form submission
  document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const dobDay = document.getElementById("dobDay").value;
    const dobMonth = document.getElementById("dobMonth").value;
    const dobYear = document.getElementById("dobYear").value;
    const gender = document.getElementById("gender").value;

    // Update existing data with new values only if fields are inputted
    if (firstname) existingData.firstname = firstname;
    if (lastname) existingData.lastname = lastname;
    if (email) existingData.email = email;
    if (dobDay) existingData.dobDay = dobDay;
    if (dobMonth) existingData.dobMonth = dobMonth;
    if (dobYear) existingData.dobYear = dobYear;
    if (gender) existingData.gender = gender;

    // Save updated data back to localStorage
    localStorage.setItem("UserData", JSON.stringify(existingData));

    // Notify user
    alert("Profile updated successfully!");

    // Reload the page to show updated data
    window.location.reload();
  });

  // Handle delete account button if necessary
  const deleteAccountBtn = document.getElementById("deleteAccountBtn");
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener("click", function () {
      // Clear localStorage
      localStorage.removeItem("UserData");

      // Notify user
      alert("Account deleted successfully!");
    });
  }
});
