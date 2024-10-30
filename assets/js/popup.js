// AfterConfirmPop-up
let popup = document.getElementById("popup");
let SecondPopup = document.getElementById("SecondPopup");
function openPopup() {
  popup.classList.add("open-popup");
}

function goDownload() {
  localStorage.setItem('needsSchengen', 'false');
  window.location.href = "/pages/download.html";
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function handleSchengen() {
    // Store Schengen status as true (doesn't have stable statement)
    localStorage.setItem('needsSchengen', 'true');
    popup.classList.remove("open-popup");
    SecondPopup.classList.add("open-popup");
}

function handleCloseSchengen() {
  SecondPopup.classList.remove("open-popup");
}