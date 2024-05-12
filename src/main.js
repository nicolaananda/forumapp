const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const popupMessage = document.getElementById("popupMessage");
const messageContent = document.querySelector(".popup-message");

function showPopup(message) {
  messageContent.textContent = message;
  popupMessage.classList.remove("hidden");
}

function closePopup() {
  popupMessage.classList.add("hidden");
}

loginBtn.addEventListener("click", async () => {
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (!userEmail || !userPassword) {
    showPopup("Please fill in both email and password.");
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });

    const data = await res.json();
    if (res.ok && data.user) {
      localStorage.setItem("user", JSON.stringify(data));
      showPopup("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/threads";
      }, 2000); // Redirect after 2 seconds
    } else {
      throw new Error(data.message || "Login failed for an unknown reason.");
    }
  } catch (error) {
    showPopup(error.message);
  }
});
