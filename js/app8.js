function listeners() {
    document.addEventListener("DOMContentLoaded", cargarCursosLocalStorage)
    todosCursos.addEventListener("click", meterCurso)
    carro.addEventListener("click", borrarCurso)
    eliminarCarro.addEventListener("click", () => {
        listaProductos.splice(0)
        alterarCarro(listaProductos)
        sincronizarLocalStorage()
    })

    todosCursos.addEventListener("click", gestionarDeseados)
    buscador.addEventListener("input", mostrarResultadosBusqueda)
    document.getElementById("ver-historial").addEventListener("click", mostrarHistorial)
}

listeners()
let listaProductos = []
let listaDeseados = []
let historialCompras = []
const todosCursos = document.querySelector("#lista-cursos")
const eliminarCarro = document.querySelector("#vaciar-carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const carro = document.querySelector("#carrito")
const contenedorDeseados = document.createElement("div")
contenedorDeseados.id = "contenedor-deseados"
document.body.appendChild(contenedorDeseados)
const buscador = document.querySelector("#buscador")


function gestionarDeseados(event) {
    event.preventDefault()
    if (event.target.classList.contains("deseado-btn")) {
        const curso = event.target.parentElement.parentElement
        const cursoId = curso.querySelector("a").getAttribute("data-id")

        if (listaDeseados.some((item) => item.id === cursoId)) {
            listaDeseados = listaDeseados.filter((item) => item.id !== cursoId)
        } else {
            const cursoDatos = {
                imagen: curso.querySelector("img").src,
                titulo: curso.querySelector("h4").textContent,
                id: cursoId,
            };
            listaDeseados.push(cursoDatos)
        }
        mostrarDeseados()
    }
}

function mostrarDeseados() {
    contenedorDeseados.innerHTML = `<h3>Lista de Deseados</h3>`
    listaDeseados.forEach((curso) => {
        const { imagen, titulo } = curso
        const item = document.createElement("div")
        item.innerHTML = `
            <div>
                <img src="${imagen}" width="100">
                <p>${titulo}</p>
            </div>
        `
        contenedorDeseados.appendChild(item)
    })
}

function agregarHistorial(cursoDatos) {
    historialCompras.push(cursoDatos)
    localStorage.setItem("historialCompras", JSON.stringify(historialCompras))
}

function mostrarHistorial() {
    const historialContainer = document.createElement("div")
    historialContainer.innerHTML = `<h3>Historial de Compras</h3>`
    historialCompras.forEach((curso) => {
        const { imagen, titulo } = curso
        const item = document.createElement("div")
        item.innerHTML = `
            <div>
                <img src="${imagen}" width="100">
                <p>${titulo}</p>
            </div>
        `
        historialContainer.appendChild(item)
    })
    document.body.appendChild(historialContainer)
}

function mostrarResultadosBusqueda() {
    const termino = buscador.value.toLowerCase()
    const resultados = Array.from(document.querySelectorAll(".info-card h4"))
        .filter((producto) => producto.textContent.toLowerCase().includes(termino))
        .map((producto) => producto.parentElement.parentElement)

    const menuDesplegable = document.createElement("div")
    menuDesplegable.id = "resultados-busqueda"
    menuDesplegable.innerHTML = `<h4>Resultados de búsqueda:</h4>`

    resultados.forEach((resultado) => {
        const item = resultado.cloneNode(true)
        menuDesplegable.appendChild(item)
    });

    const antiguoMenu = document.querySelector("#resultados-busqueda")
    if (antiguoMenu) {
        antiguoMenu.remove()
    }
    if (termino) {
        document.body.appendChild(menuDesplegable)
    }
}

function meterCurso(elemento) {
    elemento.preventDefault()
    if (elemento.target.classList.contains("agregar-carrito")) {
        const curso = elemento.target.parentElement.parentElement

        const cursoDatos = {
            imagen: curso.querySelector("img").src,
            titulo: curso.querySelector("h4").textContent,
            precio: curso.querySelector(".precio span").textContent,
            id: curso.querySelector("a").getAttribute("data-id"),
            cantidad: 1
        };

        agregarHistorial(cursoDatos)

        const existe = listaProductos.some((curso) => curso.id === cursoDatos.id)
        if (existe) {
            const todosLosCursos = listaProductos.map((curso) => {
                if (curso.id === cursoDatos.id) {
                    curso.cantidad++
                    return curso
                } else return curso
            });
            listaProductos = [...todosLosCursos]
        } else {
            listaProductos = [...listaProductos, cursoDatos]
        }
        alterarCarro(listaProductos)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    historialCompras = JSON.parse(localStorage.getItem("historialCompras")) || []
    mostrarDeseados()
})

const header = document.querySelector("#header .container")
const listaDeseadosBtn = document.createElement("button")
listaDeseadosBtn.textContent = "Lista de deseados"
listaDeseadosBtn.id = "ver-deseados"
header.appendChild(listaDeseadosBtn)

const historialBtn = document.createElement("button")
historialBtn.textContent = "Historial"
historialBtn.id = "ver-historial"
header.appendChild(historialBtn)

document.querySelectorAll(".four.columns").forEach((curso) => {
    const btnDeseado = document.createElement("button")
    btnDeseado.textContent = "Deseado"
    btnDeseado.classList.add("deseado-btn")
    curso.querySelector(".info-card").appendChild(btnDeseado)
});