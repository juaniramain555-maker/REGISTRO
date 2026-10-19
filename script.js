const entradaNombre = document.getElementById("nombre");
const entradaCorreo = document.getElementById("email");
const entradaEdad = document.getElementById("edad");
const entradaContraseña = document.getElementById("password");
const entradaConfirmarContraseña = document.getElementById("confirmarPassword");
const formularioRegistro = document.getElementById("formulario-registro");
const botonCerrarSesion = document.getElementById("boton-cerrar-sesion");
const paginaBienvenida = window.location.pathname.endsWith("bienvenida.html");
const camposTocados = new Set();
const camposRegistro = [
  {
    elemento: entradaNombre,
    mensaje: document.getElementById("error-nombre"),
    etiqueta: "Nombre"
  },
  {
    elemento: entradaEdad,
    mensaje: document.getElementById("error-edad"),
    etiqueta: "Edad"
  },
  {
    elemento: entradaCorreo,
    mensaje: document.getElementById("error-email"),
    etiqueta: "Correo electrónico"
  },
  {
    elemento: entradaContraseña,
    mensaje: document.getElementById("error-password"),
    etiqueta: "Contraseña"
  },
  {
    elemento: entradaConfirmarContraseña,
    mensaje: document.getElementById("error-confirmar-password"),
    etiqueta: "Confirmación de contraseña"
  }
];

const ocultarResumenErrores = () => {
  const mensajeError = document.getElementById("mensaje-error");
  const listaErrores = document.getElementById("lista-errores");

  if (!mensajeError || !listaErrores) {
    return;
  }

  mensajeError.hidden = true;
  listaErrores.replaceChildren();
};

const mostrarErroresRegistro = (errores) => {
  const mensajeError = document.getElementById("mensaje-error");
  const listaErrores = document.getElementById("lista-errores");

  if (!mensajeError || !listaErrores) {
    return;
  }

  listaErrores.replaceChildren();
  errores.forEach((mensaje) => {
    const elementoError = document.createElement("li");
    elementoError.textContent = mensaje;
    listaErrores.append(elementoError);
  });
  mensajeError.hidden = errores.length === 0;

  if (errores.length > 0) {
    mensajeError.focus();
  }
};

const mostrarErrorRegistro = (mensaje) => {
  mostrarErroresRegistro([mensaje]);
};

const obtenerErrorCampo = (campo) => {
  const valor = campo.value.trim();

  if (campo.id === "nombre" && valor.length < 3) {
    return valor.length === 0
      ? "Ingresa tu nombre completo."
      : "El nombre debe tener al menos 3 caracteres.";
  }

  if (campo.id === "edad") {
    if (campo.validity.badInput) {
      return "Ingresa una edad entera entre 0 y 120 años.";
    }

    if (valor.length === 0) {
      return "Ingresa tu edad.";
    }

    const edad = Number(valor);

    if (
      !Number.isInteger(edad) ||
      edad < 0 ||
      edad > 120
    ) {
      return "Ingresa una edad entera entre 0 y 120 años.";
    }

    if (edad < 18) {
      return "Debes tener 18 años o más para registrarte.";
    }
  }

  if (campo.id === "email") {
    if (valor.length === 0) {
      return "Ingresa tu correo electrónico.";
    }

    if (campo.validity.typeMismatch) {
      return "Ingresa un correo electrónico válido.";
    }
  }

  if (campo.id === "password") {
    if (campo.value.length === 0) {
      return "Ingresa una contraseña.";
    }

    if (campo.value.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres.";
    }
  }

  if (campo.id === "confirmarPassword") {
    if (campo.value.length === 0) {
      return "Confirma tu contraseña.";
    }

    if (campo.value !== entradaContraseña.value) {
      return "Las contraseñas no coinciden.";
    }
  }

  return "";
};

const actualizarErrorCampo = (campoRegistro, mensaje) => {
  campoRegistro.mensaje.textContent = mensaje;
  campoRegistro.mensaje.hidden = mensaje.length === 0;
  campoRegistro.elemento.setAttribute(
    "aria-invalid",
    mensaje.length > 0 ? "true" : "false"
  );
};

const obtenerErrorCorreoDuplicado = (correo, usuarios) => {
  const correoNormalizado = correo.trim().toLowerCase();
  const correoExiste = usuarios.some(
    (usuario) => usuario.email.toLowerCase() === correoNormalizado
  );

  return correoExiste ? "Este correo electrónico ya está en uso." : "";
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
  const edad = Number(entradaEdad.value.trim());
  const contraseña = entradaContraseña.value;
  const errores = [];

  camposRegistro.forEach((campoRegistro) => {
    camposTocados.add(campoRegistro.elemento.id);
    const mensaje = obtenerErrorCampo(campoRegistro.elemento);
    actualizarErrorCampo(campoRegistro, mensaje);

    if (mensaje) {
      errores.push(`${campoRegistro.etiqueta}: ${mensaje}`);
    }
  });

  const resultadoUsuarios = obtenerUsuarios();

  if (resultadoUsuarios.error) {
    errores.push(resultadoUsuarios.error);
  }

  if (!resultadoUsuarios.error && !obtenerErrorCampo(entradaCorreo)) {
    const errorCorreoDuplicado = obtenerErrorCorreoDuplicado(
      correo,
      resultadoUsuarios.usuarios
    );

    if (errorCorreoDuplicado) {
      actualizarErrorCampo(
        camposRegistro.find(
          (campoRegistro) => campoRegistro.elemento === entradaCorreo
        ),
        errorCorreoDuplicado
      );
      errores.push(`Correo electrónico: ${errorCorreoDuplicado}`);
    }
  }

  if (errores.length > 0) {
    mostrarErroresRegistro(errores);
    return;
  }

  const usuarios = resultadoUsuarios.usuarios;

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

  camposRegistro.forEach((campoRegistro) => {
    const campo = campoRegistro.elemento;

    campo.addEventListener("input", () => {
      ocultarResumenErrores();

      if (campo === entradaEdad) {
        camposTocados.add(campo.id);
      }

      if (camposTocados.has(campo.id)) {
        actualizarErrorCampo(campoRegistro, obtenerErrorCampo(campo));
      }

      if (
        campo === entradaContraseña &&
        camposTocados.has(entradaConfirmarContraseña.id)
      ) {
        actualizarErrorCampo(
          camposRegistro.find(
            (registro) => registro.elemento === entradaConfirmarContraseña
          ),
          obtenerErrorCampo(entradaConfirmarContraseña)
        );
      }
    });

    campo.addEventListener("blur", () => {
      camposTocados.add(campo.id);
      actualizarErrorCampo(campoRegistro, obtenerErrorCampo(campo));

      if (campo !== entradaCorreo || obtenerErrorCampo(entradaCorreo)) {
        return;
      }

      const resultadoUsuarios = obtenerUsuarios();

      if (resultadoUsuarios.error) {
        actualizarErrorCampo(campoRegistro, resultadoUsuarios.error);
        return;
      }

      actualizarErrorCampo(
        campoRegistro,
        obtenerErrorCorreoDuplicado(campo.value, resultadoUsuarios.usuarios)
      );
    });
  });
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