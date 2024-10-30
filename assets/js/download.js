// Function to populate the file list dynamically
function populateFileList() {
  // Parse visaFormData from localStorage
  const visaFormData = JSON.parse(localStorage.getItem("visaFormData")) || {};

  // Reference to the file list in the DOM
  const fileList = document.getElementById("file-list");

  if (!fileList) {
    console.error("File list element not found");
    return;
  }

  // Check if visaFormData is an object and contains valid data
  if (Object.keys(visaFormData).length === 0) {
    console.log("No data found in localStorage");
    return;
  }

  // Since visaFormData is a single object, create a single list item
  const li = document.createElement("li");
  li.textContent = `Visa 4`; // You can customize the title here
  li.classList.add("file-item"); // Add a class for styling
  li.onclick = function () {
    fillForm();
  }; // Attach click event to fill the form

  // Add a time span or any other metadata
  const span = document.createElement("span");
  span.classList.add("file-time");
  span.textContent = getElapsedTime(); // Placeholder time, can be replaced with actual time
  li.appendChild(span);

  // Append the list item to the UL
  fileList.appendChild(li);
}

// Function to fill the form when the file is clicked
function fillForm() {
  const visaFormData = JSON.parse(localStorage.getItem("visaFormData")) || {};

  if (Object.keys(visaFormData).length > 0) {
    // Fill the form fields with the data from localStorage
    document.getElementById("name").value =
      visaFormData.firstname + " " + visaFormData.lastname || "";
    document.getElementById("id-number").value = visaFormData.idNumber || "";
    document.getElementById("dobDay").value = visaFormData.dobDay || "";
    document.getElementById("dobMonth").value = visaFormData.dobMonth || "";
    document.getElementById("dobYear").value = visaFormData.dobYear || "";
    document.getElementById("nationality").value =
      visaFormData.nationality || "";
    document.getElementById("email").value = visaFormData.email || "";
    document.getElementById("address").value = visaFormData.address || "";
    document.getElementById("tel").value = visaFormData.phone || "";
  } else {
    console.error("No data found in visaFormData");
  }
}

// Calculate elapsed time since the timestamp
function getElapsedTime() {
  const savedData = localStorage.getItem("visaFormData");

  if (savedData) {
    const formData = JSON.parse(savedData);
    const startTime = formData.timestamp;
    if (startTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const elapsedSeconds = Math.floor(elapsedTime / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      return `${elapsedMinutes} minutes and ${elapsedSeconds % 60} seconds ago`;
    } else {
      return "No timestamp found.";
    }
  } else {
    return "No saved form data found.";
  }
}

function downloadFile() {
  // Check the Schengen status from localStorage
  const needsSchengen = localStorage.getItem("needsSchengen");

  // Define different file paths based on Schengen status
  console.log(needsSchengen);
  const fileUrl = needsSchengen
    ? "/assets/download/Schengen.pdf"
    : "/assets/download/VisaExample.pdf";
  console.log(fileUrl);
  const fileName = needsSchengen ? "Schengen.pdf" : "VisaExample.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}

// Populate the file list when the page loads
document.addEventListener("DOMContentLoaded", () => {
  populateFileList();
});
