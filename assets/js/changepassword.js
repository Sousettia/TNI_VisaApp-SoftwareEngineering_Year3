// Validate password and confirm password match
function validatePasswords() {
  const passwordInput = document.getElementById("password").value;
  const confirmPasswordInput =
    document.getElementById("confirm-password").value;

  if (!passwordInput || !confirmPasswordInput) {
    alert("Both password fields are required. Please try again.");
    return false;
  }

  if (passwordInput !== confirmPasswordInput) {
    alert("Passwords do not match. Please try again.");
    return false;
  }

  return true;
}

let otp_val; // Declare otp_val in a broader scope for access during validation

function sendOTP() {
  const storedData = JSON.parse(localStorage.getItem("UserData"));
  const email = storedData.email;
  const otpverify = document.getElementsByClassName("otpverify")[0];

  // Generating random number as OTP
  otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `
      <h1>HEADER 1</h1> <br>
      <h2>Your OTP is </h2>${otp_val}
  `;

  Email.send({
    SecureToken: "8214d610-8342-4ce7-99c0-f9685f9bea86", //Password 5C3BF0B6986A0A9EFE2BB7E253D60FB38C73
    To: email,
    From: "an.jirapat_st@tni.ac.th",
    Subject: "YARANAIKA",
    Body: emailbody,
  })
    .then(
      // if success it returns "OK"
      (message) => {
        if (message === "OK") {
          alert("OTP sent to your email " + email);

          // now making otp input visible
          otpverify.style.display = "block";
          const otp_inp = document.getElementById("otp_inp");
          const otp_btn = document.getElementById("otp-btn");

          otp_btn.addEventListener("click", () => {
            // now check whether sent email is valid
            if (otp_inp.value == otp_val) {
              alert("Email address verified...");
              localStorage.setItem("otpVerified", "true");
            } else {
              alert("Invalid OTP");
            }
          });
        } else {
          alert("Error sending email: " + message);
        }
      }
    )
    .catch((error) => {
      console.error("Failed to send OTP email:", error);
      alert("Failed to send OTP. Please try again.");
    });
}

document
  .querySelector(".login-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const otpVerified = localStorage.getItem("otpVerified") === "true";
    if (!otpVerified) {
      alert("Please verify your OTP first.");
      return;
    }

    if (validatePasswords()) {
      const storedData = JSON.parse(localStorage.getItem("UserData")) || {};
      const passwordInput = document.getElementById("password").value;
      if (passwordInput) storedData.password = passwordInput;
      localStorage.setItem("UserData", JSON.stringify(storedData));
      alert("Password changed successfully!");
      localStorage.removeItem("otpVerified");
      window.location.href = "login.html";
    }
  });
