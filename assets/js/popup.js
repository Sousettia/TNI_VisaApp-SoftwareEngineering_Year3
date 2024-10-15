// AfterConfirmPop-up
let popup = document.getElementById("popup");
let SecondPopup = document.getElementById("SecondPopup");
function openPopup() {
  popup.classList.add("open-popup");
}

function goDownload() {
  window.location.href = "/pages/download.html";
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function handleSchengen() {
  closePopup()
  SecondPopup.classList.add("open-SecondPopup");
}

function handleCloseSchengen() {
  SecondPopup.classList.remove("open-SecondPopup");
}