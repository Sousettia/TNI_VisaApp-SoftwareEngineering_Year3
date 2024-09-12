document.addEventListener("DOMContentLoaded", function () {
  const daySelect = document.getElementById("dobDay");
  const monthSelect = document.getElementById("dobMonth");
  const yearSelect = document.getElementById("dobYear");

  // Helper function to populate a select element
  function populateSelect(selectElement, start, end, displayValues = null) {
    for (let i = start; i <= end; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = displayValues ? displayValues[i - start] : i;
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
});