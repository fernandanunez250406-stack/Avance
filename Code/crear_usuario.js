document.getElementById("guardar").addEventListener("click", () => {
    const nuevo = {
        nombre: document.getElementById("nombre").value,
        f_nacimiento: document.getElementById("f_nacimiento").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        usuario: document.getElementById("usuario").value,
        contraseña: document.getElementById("contrasena").value
    };

    if (!nuevo.nombre || !nuevo.usuario || !nuevo.contraseña) {
        alert("Campos obligatorios vacíos");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    window.location.href = "admin.html";
});

document.getElementById("cancelar").addEventListener("click", () => {
    window.location.href = "admin.html";
});