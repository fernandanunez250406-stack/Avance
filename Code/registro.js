const tabla = document.getElementById("tablaUsuarios");
const btnregistrar = document.getElementById("btnregistrar");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function mostrarUsuarios(lista = usuarios) {
    tabla.innerHTML = "";

    if (lista.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="4">No hay usuarios registrados</td>
            </tr>
        `;
        return;
    }

    lista.forEach((u, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${u.usuario}</td>
            <td>${u.nombre}</td>
            <td>
                <button class="btn-icon" onclick="eliminarUsuario(${index})">🗑️</button>
            </td>
            <td>
                <button class="btn-icon">✏️</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

function eliminarUsuario(index) {
    if (!confirm("¿Deseas eliminar este usuario?")) return;

    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();
}

document.getElementById("btnBuscar").addEventListener("click", () => {
    const user = document.getElementById("buscarUsuario").value.toLowerCase();
    const nombre = document.getElementById("buscarNombre").value.toLowerCase();

    const filtrados = usuarios.filter(u =>
        u.usuario.toLowerCase().includes(user) &&
        u.nombre.toLowerCase().includes(nombre)
    );

    mostrarUsuarios(filtrados);
});

document.getElementById("btnBorrarFiltro").addEventListener("click", () => {
    document.getElementById("buscarUsuario").value = "";
    document.getElementById("buscarNombre").value = "";
    mostrarUsuarios();
});

btnregistrar.addEventListener("click", () => {
    window.location.href = "registro.html";
});

// Inicial
mostrarUsuarios();
