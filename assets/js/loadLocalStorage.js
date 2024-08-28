document
  .getElementById("loadDataButton")
  .addEventListener("click", function () {
    const storedData = JSON.parse(localStorage.getItem("visaForm"));

    if (storedData) {
      document.getElementById("displayData").innerHTML = `
            <p><strong>ID Number / Passport:</strong> ${storedData.idNumber}</p>
            <p><strong>Name:</strong> ${storedData.name}</p>
            <p><strong>Surname:</strong> ${storedData.surname}</p>
            <p><strong>Email:</strong> ${storedData.email}</p>
            <p><strong>Date of Birth:</strong> ${storedData.dobDay}-${storedData.dobMonth}-${storedData.dobYear}</p>
            <p><strong>Gender:</strong> ${storedData.gender}</p>
          `;
    } else {
      document.getElementById("displayData").innerHTML =
        "No stored application found.";
    }
  });
