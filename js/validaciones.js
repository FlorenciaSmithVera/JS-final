const cuerpoprincipal = document.getElementById("cuerpo-principal");

const bloquevalidacion = document.createElement("div")
bloquevalidacion.className = "validacionusuario"

const textovalidacion = document.createElement("p")
textovalidacion.innerText = "Ingresá tu usuario"

const inputvalidacion = document.createElement("input")
inputvalidacion.type = "text"
inputvalidacion.className = "inputusuario"

const botonvalidacion = document.createElement("button")
botonvalidacion.className = "boton-usuario"
botonvalidacion.innerText = "Aceptar"

bloquevalidacion.append(textovalidacion)
bloquevalidacion.append(inputvalidacion)
bloquevalidacion.append(botonvalidacion)
cuerpoprincipal.append(bloquevalidacion)

const containercomenzar = document.createElement("div")
containercomenzar.className = "container-comenzar"

const botoncomenzar = document.createElement("button")
botoncomenzar.className = "boton-comenzar"

const ruteocomenzar = document.createElement("a")
ruteocomenzar.href = "./pages/carga-pago.html"
ruteocomenzar.textContent = "Comenzar"


fetch('./usuarios.json')
    .then(response => response.json())
    .then(usuarios => {
        botonvalidacion.addEventListener("click", () => {
            const usuarioingresado = inputvalidacion.value
            const usuariovalido = usuarios.some(el => el.usuario === usuarioingresado)

            if (usuariovalido) {
                cuerpoprincipal.append(containercomenzar)
                containercomenzar.append(botoncomenzar)
                botoncomenzar.append(ruteocomenzar)
                bloquevalidacion.style.display = 'none'
            } else {
                Swal.fire({
                    text: "Usuario incorrecto!",
                    icon: "error"
                });
                setTimeout(() => {
                   inputvalidacion.value = "" 
                }, 500);
            }
        })

    })
    .catch((error) => {
        Swal.fire({
            text: "Ocurrio un error!",
            icon: "error"
        });
    })


