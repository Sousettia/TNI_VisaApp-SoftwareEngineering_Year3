let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}

function goDownload() {
  window.location.href = "/pages/download.html";
}

function closePopup() {
  popup.classList.remove("open-popup");
}
