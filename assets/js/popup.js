let popup = document.getElementById("popup");
let SecondPopup = document.getElementById("SecondPopup");

function openPopup() {
  popup.classList.add("open-popup");
}

// Redirect to download page for "Yes" (stable statement) and trigger download.
function goDownload() {
  localStorage.setItem("needsSchengen", "false");
  window.location.href = "/pages/download.html?file=VisaExample.pdf";
}

// Close the first popup and open the Schengen popup for "No".
function handleSchengen() {
  localStorage.setItem("needsSchengen", "true");
  popup.classList.remove("open-popup");
  SecondPopup.classList.add("open-popup");
}

// Close Schengen popup and go to download page for Schengen.pdf.
function goDownloadNext() {
  window.location.href = "/pages/download.html?file=Schengen.pdf";
}

// Close the second popup
function handleCloseSchengen() {
  SecondPopup.classList.remove("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
