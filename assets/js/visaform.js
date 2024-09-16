// formActions.js

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const useProfileButton = document.getElementById("useProfileButton");
  const confirmButton = document.getElementById("confirmButton");

  saveButton.addEventListener("click", saveFormData);
  useProfileButton.addEventListener("click", useProfileData);
  confirmButton.addEventListener("click", confirmFormData);
});

function saveFormData() {
  const formData = {
    idNumber: document.getElementById("idNumber").value,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    dobDay: document.getElementById("dobDay").value,
    dobMonth: document.getElementById("dobMonth").value,
    dobYear: document.getElementById("dobYear").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    nationalities: document.getElementById("nationalities").value,
    address: document.getElementById("address").value,
  };

  localStorage.setItem("visaFormData", JSON.stringify(formData));
  alert("Form data saved!");
}

function useProfileData() {
  // Logic to use profile data
}

// function confirmFormData() {
//   window.location.href = "/pages/download.html";
// }

// DROPDOWN || Get the select element -------------------------------------------------------------------------------------
const selectElement = document.getElementById("nationalities");

// Function to populate the dropdown with nationalities
function populateDropdown() {
  nationalities.forEach((nationality) => {
    let option = document.createElement("option");
    option.value = nationality;
    option.textContent = nationality;
    selectElement.appendChild(option);
  });
}

// Call the function to populate the dropdown
populateDropdown();
