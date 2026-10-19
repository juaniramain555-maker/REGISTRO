const entradaNombre = document.getElementById("nombre");
const entradaCorreo = document.getElementById("email");
const entradaEdad = document.getElementById("edad");
const entradaContraseña = document.getElementById("password");
const entradaConfirmarContraseña = document.getElementById("confirmarPassword");
const formularioRegistro = document.getElementById("formulario-registro");
const botonCerrarSesion = document.getElementById("boton-cerrar-sesion");
const paginaBienvenida = window.location.pathname.endsWith("bienvenida.html");

const mostrarErrorRegistro = (mensaje) => {
  const mensajeError = document.getElementById("mensaje-error");

  if (!mensajeError) {
    return;
  }

  mensajeError.textContent = mensaje;
  mensajeError.focus();
};

const obtenerUsuarios = () => {
  let datosUsuarios;

  try {
    datosUsuarios = localStorage.getItem("usuarios");
  } catch (error) {
    console.error("No se pudieron leer los usuarios del almacenamiento local.", error);
    return {
      error:
        "No se pudo acceder al almacenamiento de este navegador. Revisa la configuración de privacidad e inténtalo de nuevo."
    };
  }

  if (datosUsuarios === null) {
    return { usuarios: [] };
  }

  let usuarios;

  try {
    usuarios = JSON.parse(datosUsuarios);
  } catch (error) {
    console.error("Los datos de usuarios guardados no contienen JSON válido.", error);
    return {
      error:
        "Los datos de usuarios guardados están dañados. No se sobrescribieron; revisa el almacenamiento local antes de volver a intentarlo."
    };
  }

  const estructuraValida =
    Array.isArray(usuarios) &&
    usuarios.every(
      (usuario) =>
        usuario !== null &&
        typeof usuario === "object" &&
        typeof usuario.email === "string"
    );

  if (!estructuraValida) {
    console.error("Los datos de usuarios guardados tienen un formato inesperado.");
    return {
      error:
        "Los datos de usuarios guardados tienen un formato inesperado. No se sobrescribieron; revisa el almacenamiento local antes de volver a intentarlo."
    };
  }

  return { usuarios };
};

const mostrarBienvenidaSinSesion = (mensaje) => {
  document.getElementById("insignia-bienvenida").hidden = true;
  document.getElementById("etiqueta-bienvenida").textContent =
    "SESIÓN NO DISPONIBLE";
  document.getElementById("titulo-bienvenida").textContent =
    "No hay una sesión activa";
  document.getElementById("texto-bienvenida").textContent =
    "Completa el registro para ver la bienvenida. El perfil se guarda solo en este navegador.";
  document.getElementById("estado-bienvenida").textContent = mensaje;
  document.getElementById("estado-bienvenida").hidden = !mensaje;
  document.getElementById("boton-cerrar-sesion").hidden = true;
  document.getElementById("enlace-registro").hidden = false;
};

const registrarUsuario = (evento) => {
  evento.preventDefault();

  const nombre = entradaNombre.value.trim();
  const correo = entradaCorreo.value.trim().toLowerCase();
  const edadIngresada = entradaEdad.value.trim();
  const edad = Number(edadIngresada);
  const contraseña = entradaContraseña.value;
  const confirmarContraseña = entradaConfirmarContraseña.value;
  const mensajeError = document.getElementById("mensaje-error");

  mensajeError.textContent = "";

  if (nombre.length < 3) {
    mostrarErrorRegistro("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  if (
    edadIngresada === "" ||
    !Number.isInteger(edad) ||
    edad < 0 ||
    edad > 120
  ) {
    mostrarErrorRegistro("Ingresa una edad válida entre 0 y 120 años.");
    return;
  }

  if (edad < 18) {
    mostrarErrorRegistro("Debes tener 18 años o más para registrarte.");
    return;
  }

  if (contraseña.length < 8) {
    mostrarErrorRegistro("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  if (contraseña !== confirmarContraseña) {
    mostrarErrorRegistro("Las contraseñas no coinciden.");
    return;
  }

  const resultadoUsuarios = obtenerUsuarios();

  if (resultadoUsuarios.error) {
    mostrarErrorRegistro(resultadoUsuarios.error);
    return;
  }

  const usuarios = resultadoUsuarios.usuarios;
  const correoExiste = usuarios.some(
    (usuario) => usuario.email.toLowerCase() === correo
  );

  if (correoExiste) {
    mostrarErrorRegistro("Este correo electrónico ya está en uso.");
    return;
  }

  const usuarioNuevo = { nombre, email: correo, edad };
  const usuariosActualizados = [...usuarios, usuarioNuevo];
  let usuariosGuardados = false;

  try {
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    usuariosGuardados = true;
    localStorage.setItem("emailUsuario", correo);
  } catch (error) {
    console.error(
      "No se pudo guardar el registro en el almacenamiento local.",
      error
    );

    if (usuariosGuardados) {
      try {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      } catch (errorReversion) {
        console.error(
          "No se pudo revertir el perfil parcialmente guardado.",
          errorReversion
        );
        mostrarErrorRegistro(
          "No se pudo iniciar la sesión y tampoco revertir el perfil guardado. Comprueba la lista de perfiles en el almacenamiento local antes de volver a intentarlo."
        );
        return;
      }
    }

    mostrarErrorRegistro(
      "No se pudo completar el guardado en este navegador. No se conservó ningún cambio; revisa la configuración de almacenamiento e inténtalo de nuevo."
    );
    return;
  }

  window.location.href = "bienvenida.html";
};

if (formularioRegistro) {
  formularioRegistro.addEventListener("submit", registrarUsuario);
}

const validarRegistro = () => {
  let correoSesion;

  try {
    correoSesion = localStorage.getItem("emailUsuario");
  } catch (error) {
    console.error(
      "No se pudo comprobar la sesión en el almacenamiento local.",
      error
    );

    if (paginaBienvenida) {
      mostrarBienvenidaSinSesion(
        "No se pudo comprobar la sesión porque el almacenamiento del navegador no está disponible."
      );
      return;
    }

    mostrarErrorRegistro(
      "No se pudo comprobar la sesión en este navegador. Revisa la configuración de privacidad."
    );
    return;
  }

  if (!correoSesion) {
    if (paginaBienvenida) {
      mostrarBienvenidaSinSesion(
        "Necesitas una sesión activa para acceder a esta página."
      );
    }
    return;
  }

  const resultadoUsuarios = obtenerUsuarios();

  if (resultadoUsuarios.error) {
    if (paginaBienvenida) {
      mostrarBienvenidaSinSesion(resultadoUsuarios.error);
      return;
    }

    mostrarErrorRegistro(resultadoUsuarios.error);
    return;
  }

  const sesionValida = resultadoUsuarios.usuarios.some(
    (usuario) => usuario.email.toLowerCase() === correoSesion.toLowerCase()
  );

  if (!sesionValida) {
    if (paginaBienvenida) {
      mostrarBienvenidaSinSesion(
        "No se encontró un perfil asociado a esta sesión en el almacenamiento local."
      );
    }
    return;
  }

  if (!paginaBienvenida) {
    window.location.href = "bienvenida.html";
  }
};

validarRegistro();

const cerrarSesion = () => {
  try {
    localStorage.removeItem("emailUsuario");
  } catch (error) {
    console.error(
      "No se pudo cerrar la sesión en el almacenamiento local.",
      error
    );
    const estadoBienvenida = document.getElementById("estado-bienvenida");
    estadoBienvenida.textContent =
      "No se pudo cerrar la sesión porque el almacenamiento del navegador no está disponible.";
    estadoBienvenida.hidden = false;
    return;
  }

  window.location.href = "index.html";
};

if (botonCerrarSesion) {
  botonCerrarSesion.addEventListener("click", cerrarSesion);
}