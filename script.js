document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("link");
  const button = document.getElementById("generate-button");
  const qrContainer = document.getElementById("qrcode");

  button.addEventListener("click", () => {
    const url = input.value.trim();
    if (!url) {
      alert("Please enter a link.");
      return;
    }

    qrContainer.innerHTML = ""; 

    new QRCode(qrContainer, {
      text: url,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "#D9D9D9",
      correctLevel: QRCode.CorrectLevel.H,
    });
  });
});
