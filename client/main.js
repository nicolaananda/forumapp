const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const nameUser = document.getElementById("name");
const dataUser = document.getElementById("data");

loginBtn.addEventListener("click", async () => {
  const userEmail = email.value;
  const userPassword = password.value;
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
  localStorage.setItem("user", JSON.stringify(data));

  nameUser.textContent = data.data.name;
  dataUser.innerHTML = `Email: ${data.data.email}<br>ID: ${data.data.id}<br>Name: ${data.data.name}`;
});
