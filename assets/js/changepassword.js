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

  // Generating random 4-digit number as OTP
  otp_val = Math.floor(1000 + Math.random() * 9000);

  let emailbody = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
    <h1 style="color: #4CAF50; text-align: center;">Your OTP Verification Code</h1>
    <p style="font-size: 16px; color: #333; text-align: center;">Hello,</p>
    <p style="font-size: 16px; color: #333; text-align: center;">
      Thank you for using our service. Please use the following One-Time Password (OTP) to complete your process:
    </p>
    <div style="text-align: center; margin: 20px auto;">
      <span style="display: inline-block; font-size: 22px; font-weight: bold; color: #333; border: 1px dashed #ccc; padding: 10px 20px; border-radius: 5px; background-color: #fff;">
        ${otp_val}
      </span>
    </div>
    <p style="font-size: 16px; color: #333; text-align: center;">
      Please note: This OTP is valid for the next 10 minutes.
    </p>
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin-top: 30px;">
    <p style="font-size: 12px; color: #999; text-align: center;">
      If you did not request this OTP, please ignore this email.
    </p>
  </div>
`;

  Email.send({
    SecureToken: "8214d610-8342-4ce7-99c0-f9685f9bea86",
    To: email,
    From: "an.jirapat_st@tni.ac.th",
    Subject: "Your OTP Verification Code",
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
              alert("Email address verified!");
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
      window.location.href = "newLogin.html";
    }
  });
