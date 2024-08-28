document.addEventListener("DOMContentLoaded", function () {
  const daySelect = document.getElementById("dobDay");
  const monthSelect = document.getElementById("dobMonth");
  const yearSelect = document.getElementById("dobYear");

  // Populate day dropdown (1-31)
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Populate month dropdown (1-12)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = months[i - 1];
    monthSelect.appendChild(option);
  }

  // Populate year dropdown (from current year to 100 years back)
  const currentYear = new Date().getFullYear();
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.value = currentYear - i;
    option.textContent = currentYear - i;
    yearSelect.appendChild(option);
  }
});
