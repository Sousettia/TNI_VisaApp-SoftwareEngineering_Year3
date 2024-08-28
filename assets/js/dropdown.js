// Populate Dropdowns with options from external data files
function populateDropdown() {
  const countryDropdownContent = document.querySelector(
    "#countryDropdown + .dropdown-content"
  );
  const visaDropdownContent = document.querySelector(
    "#VisaDropdown + .dropdown-content"
  );
  const destinationDropdownContent = document.querySelector(
    "#destinationDropdown + .dropdown-content"
  );

  countries.forEach((country) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = country;
    a.onclick = () => selectOption("countryDropdown", country);
    countryDropdownContent.appendChild(a);

    const destA = a.cloneNode(true);
    destA.onclick = () => selectOption("destinationDropdown", country);
    destinationDropdownContent.appendChild(destA);
  });

  visaTypes.forEach((type) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = type;
    a.onclick = () => selectOption("VisaDropdown", type);
    visaDropdownContent.appendChild(a);
  });
}

function selectOption(buttonId, option) {
  document.getElementById(
    buttonId
  ).innerHTML = `${option} <i class="fa-solid fa-caret-down"></i>`;
  closeDropdowns();
}

function closeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => (dropdown.style.display = "none"));
}

document.querySelectorAll(".dropbtn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdownContent = button.nextElementSibling;
    const isVisible = dropdownContent.style.display === "block";
    closeDropdowns();
    dropdownContent.style.display = isVisible ? "none" : "block";
  });
});

window.onload = populateDropdown;

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  console.log("Menu toggled");
  subMenu.classList.toggle("open-menu");
}
