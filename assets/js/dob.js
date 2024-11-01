document.addEventListener("DOMContentLoaded", function () {
  const daySelect = document.getElementById("dobDay");
  const monthSelect = document.getElementById("dobMonth");
  const yearSelect = document.getElementById("dobYear");

  // Clear any existing options first
  daySelect.innerHTML = '<option value="">DD</option>';
  monthSelect.innerHTML = '<option value="">MM</option>';
  yearSelect.innerHTML = '<option value="">YYYY</option>';

  // Helper function to populate a select element
  function populateSelect(selectElement, start, end, displayValues = null) {
    for (let i = start; i <= end; i++) {
      const option = document.createElement("option");
      option.value = i < 10 ? `0${i}` : `${i}`; // Ensure two-digit format for days and months
      option.textContent = displayValues ? displayValues[i - start] : (i < 10 ? `0${i}` : `${i}`);
      selectElement.appendChild(option);
    }
  }

  // Populate day (1-31)
  populateSelect(daySelect, 1, 31);

  // Populate month (1-12)
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  populateSelect(monthSelect, 1, 12, months);

  // Populate year (current year to 100 years back)
  const currentYear = new Date().getFullYear();
  populateSelect(yearSelect, currentYear - 100, currentYear);

  // Retrieve existing data and set selected values
  const existingData = JSON.parse(localStorage.getItem("UserData")) || {};
  
  if (existingData.dobDay) 
    daySelect.value = existingData.dobDay;
  if (existingData.dobMonth) 
    monthSelect.value = existingData.dobMonth;
  if (existingData.dobYear) 
    yearSelect.value = existingData.dobYear;
});