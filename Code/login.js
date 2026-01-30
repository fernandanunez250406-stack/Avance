document.getElementById("btnlogin").addEventListener("click", () => {
    const userInput = document.getElementById("ingresar").value;
    const passInput = document.getElementById("contrasena").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u =>
        u.usuario === userInput && u.contraseña === passInput
    );

    if (existe) {
        window.location.href = "admin.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});