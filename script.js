console.log("hola mundo");

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");
const passwordInput = document.getElementById("password");
const confirmarPasswordInput = document.getElementById("confirmarPassword");

const registrarUsuario = (event) => {

  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const edad = Number(edadInput.value);
  const password = passwordInput.value;
  const confirmarPassword = confirmarPasswordInput.value;

  const mensajeError = document.getElementById("mensaje-error");

  mensajeError.textContent = "";

  const edadAceptada = 18;

  // Validar que las contraseñas coincidan
 
  if (password.length < 8) {
    mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres";
    return;
}

if (password !== confirmarPassword) {
    mensajeError.textContent = "Las contraseñas no coinciden";
    return;
}
 

  // Validar la edad
  if (edad < edadAceptada) {
    mensajeError.textContent =
      "Debes ser mayor de 18 años para registrarte";
    return;
  }

  // Obtener los usuarios guardados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Comprobar si el email ya existe
  const emailExiste = usuarios.some(function (usuario) {
    return usuario.email === email;
  });

  if (emailExiste) {
    mensajeError.textContent = "Este email ya está en uso";
    return;
  }

  // Crear el nuevo usuario
  const nuevoUsuario = {
    nombre: nombre,
    email: email,
    edad: edad
  };

  // Agregar el usuario al array
  usuarios.push(nuevoUsuario);

  // Guardar todos los usuarios
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Guardar el email de la sesión actual
  localStorage.setItem("emailUsuario", email);

  // Ir a la página de bienvenida
  window.location.href = "bienvenida.html";
};


// Comprobar si ya hay una sesión iniciada
const validarRegistro = () => {

  const userRegistrado = localStorage.getItem("emailUsuario");

  if (userRegistrado) {
    window.location.href = "bienvenida.html";
  }
};


if (!window.location.pathname.endsWith("bienvenida.html")) {
  validarRegistro();
}


// Cerrar sesión sin borrar los usuarios registrados
const logout = () => {

  localStorage.removeItem("emailUsuario");

  window.location.href = "index.html";
};