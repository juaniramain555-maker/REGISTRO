console.log("hola mundo");

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");
const passwordInput = document.getElementById("password");
const confirmarPasswordInput = document.getElementById("confirmarPassword");

const registrarUsuario = (event) => {
  event.preventDefault();
  const nombre = nombreInput.value;
  const email = emailInput.value;
  const edad = edadInput.value;
  const password = passwordInput.value;
  const confirmarPassword = confirmarPasswordInput.value;
  console.log("Nombre:", nombre);
  console.log("email:", email);
  console.log("Edad:", edad);
  console.log("Contraseña:", password);
  console.log("Confirmar Contraseña:", confirmarPassword);

  const edadAceptada = 18;

  if (password !== confirmarPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }
  
  if (edad < edadAceptada) {
    alert("Debes ser mayor de 18 años para registrarte");
    return;
  }
  localStorage.setItem("emailUsuario",email);
  window.location.href = "bienvenida.html";
};
 
const validarRegistro = () => {
  const userRegistrado = localStorage.getItem("emailUsuario");
  if (userRegistrado) {
    window.location.href = "bienvenida.html";
  }
}
if (window.location.pathname !== "/bienvenida.html") {

    validarRegistro()

}

const logout = () => {

    localStorage.clear();

    window.location.href="index.html";

}