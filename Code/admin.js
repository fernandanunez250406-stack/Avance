const tabla = document.getElementById("tablaUsuarios");
const btnregistrar = document.getElementById("btnregistrar");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function guardarStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarUsuarios(lista = usuarios) {
    tabla.innerHTML = "";

    if (lista.length === 0) {
        tabla.innerHTML = `<tr><td colspan="3">Sin usuarios</td></tr>`;
        return;
    }

    lista.forEach((u, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${u.usuario}</td>
            <td>${u.nombre}</td>
            <td><button onclick="eliminarUsuario(${index})">🗑️</button></td>
        `;

        tabla.appendChild(fila);
    });
}

function eliminarUsuario(index) {
    if (!confirm("¿Eliminar usuario?")) return;
    usuarios.splice(index, 1);
    guardarStorage();
    mostrarUsuarios();
}

document.getElementById("btnBuscar").addEventListener("click", () => {
    const u = document.getElementById("buscarUsuario").value.toLowerCase();
    const n = document.getElementById("buscarNombre").value.toLowerCase();

    const filtrados = usuarios.filter(x =>
        x.usuario.toLowerCase().includes(u) &&
        x.nombre.toLowerCase().includes(n)
    );

    mostrarUsuarios(filtrados);
});

btnregistrar.addEventListener("click", () => {
    window.location.href = "registro.html";
});

mostrarUsuarios();