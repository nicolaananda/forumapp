const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const emailValue = email.value;
  const passwordValue = password.value;

  const res = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
});
