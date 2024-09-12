// DROPDOWN || Get the select element -------------------------------------------------------------------------------------
const visaDropdown = document.getElementById("visaDropdown");
const countryDropdown = document.getElementById("countryDropdown");
const destinationDropdown = document.getElementById("destinationDropdown");

// Function to populate the dropdown with nationalities
function populateDropdown() {

  visaTypes.forEach((visaType) => {
    let option = document.createElement("option");
    option.value = visaType;
    option.textContent = visaType;
    visaDropdown.appendChild(option);
  });

  countries.forEach((country) => {
    let option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countryDropdown.appendChild(option);
  });

  countries.forEach((destination) => {
    let option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    destinationDropdown.appendChild(option);
  });
}

// Call the function to populate the dropdown
populateDropdown();


window.onload = populateDropdown;

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  console.log("Menu toggled");
  subMenu.classList.toggle("open-menu");
}
