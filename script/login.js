function logar() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (user == "admin" && password == "1234") {
    location.href = "home.html";


   
  } else {
    error.textContent = "Usuário ou senha incorretos!";

  }
}
