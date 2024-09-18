document.addEventListener("DOMContentLoaded", () => {
  populateNationalities();
  setupEventListeners();
});

function setupEventListeners() {
  const saveButton = document.getElementById("saveButton");
  const useProfileButton = document.getElementById("useProfileButton");

  saveButton.addEventListener("click", saveFormData);
  useProfileButton.addEventListener("click", showProfilePopup);
}

// Save form data to localStorage
function saveFormData() {
  const formData = getFormData();

  if (validateFormData(formData)) {
    localStorage.setItem("visaFormData", JSON.stringify(formData));
    alert("Form data saved successfully!");
  } else {
    alert("Please fill in all required fields.");
  }
}

// Retrieve form data
function getFormData() {
  return {
    idNumber: document.getElementById("idNumber").value,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    dobDay: document.getElementById("dobDay").value,
    dobMonth: document.getElementById("dobMonth").value,
    dobYear: document.getElementById("dobYear").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    nationality: document.getElementById("select_nationalities").value,
    address: document.getElementById("address").value,
    timestamp: new Date().getTime()  // Add current time as timestamp
  };
}
// Start the timer and save the start time to localStorage
function startTimer() {
  const currentTime = new Date().getTime();
  localStorage.setItem("startTime", currentTime);
}

// Validate form data
function validateFormData(data) {
  return Object.values(data).every((value) => value !== "");
}

// Populate nationalities dropdown
function populateNationalities() {
  const nationalitiesSelect = document.getElementById("select_nationalities");

  nationalities.forEach((nationality) => {
    const option = document.createElement("option");
    option.value = nationality;
    option.textContent = nationality;
    nationalitiesSelect.appendChild(option);
  });
}

// Show profile popup modal with saved data
function showProfilePopup() {
  const modal = document.getElementById("profileModal");
  const savedProfile = JSON.parse(localStorage.getItem("visaFormData"));

  if (savedProfile) {
    displayProfileData(savedProfile);
  } else {
    document.getElementById("profileContent").innerHTML =
      "<p>No saved profile found.</p>";
  }

  modal.style.display = "block";

  // Close modal on button or outside click
  setupModalCloseEvents(modal);
}

// Display profile data in the modal
function displayProfileData(profile) {
  const {
    idNumber,
    firstname,
    lastname,
    dobDay,
    dobMonth,
    dobYear,
    gender,
    email,
    phone,
    nationality,
    address,
  } = profile;

  document.getElementById("profileContent").innerHTML = `
    <p><strong>ID Number:</strong> ${idNumber}</p>
    <p><strong>Name:</strong> ${firstname} ${lastname}</p>
    <p><strong>Date of Birth:</strong> ${dobDay}-${dobMonth}-${dobYear}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Nationality:</strong> ${nationality}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;
}

// Set up modal close events
function setupModalCloseEvents(modal) {
  const closeBtn = document.getElementsByClassName("close")[0];
  const cancelBtn = document.getElementById("cancelProfile");
  const confirmBtn = document.getElementById("confirmProfile");

  closeBtn.onclick = () => closeModal(modal);
  cancelBtn.onclick = () => closeModal(modal);

  // Close the modal when clicking outside the modal content
  window.onclick = (event) => {
    if (event.target === modal) closeModal(modal);
  };

  // Handle confirm button (use the profile data to autofill the form)
  confirmBtn.onclick = () => {
    const savedProfile = JSON.parse(localStorage.getItem("visaFormData"));
    if (savedProfile) fillFormWithProfileData(savedProfile);
    closeModal(modal);
  };
}

// Fill the form with profile data
function fillFormWithProfileData(profile) {
  const {
    idNumber,
    firstname,
    lastname,
    dobDay,
    dobMonth,
    dobYear,
    gender,
    email,
    phone,
    nationality,
    address,
  } = profile;

  document.getElementById("idNumber").value = idNumber;
  document.getElementById("firstname").value = firstname;
  document.getElementById("lastname").value = lastname;
  document.getElementById("dobDay").value = dobDay;
  document.getElementById("dobMonth").value = dobMonth;
  document.getElementById("dobYear").value = dobYear;
  document.getElementById("gender").value = gender;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  document.getElementById("select_nationalities").value = nationality;
  document.getElementById("address").value = address;
}

// Close modal
function closeModal(modal) {
  modal.style.display = "none";
}
