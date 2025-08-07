function verificarClave() {
  const clave = document.getElementById("clave").value;

  if (clave === "secreto123") {
    document.getElementById("contenido").style.display = "block";
  } else {
    alert("❌ Contraseña incorrecta");
  }
}
