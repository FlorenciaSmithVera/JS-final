
const proveedores = []

class factura {
    constructor(numerofc, nombre, monto) {
        this.numerofc = numerofc;
        this.nombre = nombre;
        this.monto = monto;
    }
}

buttonlisto.addEventListener("click", () => {
    const facturita = new factura(numerofc.value, nombre.value, parseInt(monto.value));
    proveedores.push(facturita);
    Toastify({
        text: "Cargaste Factura " + facturita.numerofc,
        duration: 1500,
        gravity: "bottom",
        position: "left",
    }).showToast();

    setTimeout(() => {
        numerofc.value = "";
        nombre.value = "";
        monto.value = "";
    }, 500);
})


buttonfin.addEventListener("click", () => {
    const textoconfirm = document.createElement("div")
    textoconfirm.className = "loader"
    confirmacion.append(textoconfirm)
    numerofc.style.display = 'none'
    nombre.style.display = 'none'
    monto.style.display = 'none'
    botones.style.display = 'none'

    setTimeout(() => {
        confirmacion.append(buttonverfc)
        textoconfirm.className = ""
    }, 1000)

})

buttonverfc.addEventListener("click", (e) => {
    cuerpo.append(tablafac)
    tablafac.append(tablatit)
    tablatit.append(columntitulo)
    columntitulo.append(titulosposta)
    columntitulo.append(titnumero)
    columntitulo.append(titprov)
    columntitulo.append(titmonto)
    columntitulo.append(titseleccion)
    tablatit.append(cuerpodetabla)
    buttonverfc.style.display = 'none'
    proveedores.forEach(el => { crearFactura(el) })
    cuerpo.append(ultimosbotones)

})


let pagofinal = []

buttonpagar.addEventListener("click", () => {
    const totalpago = pagofinal.reduce((acc, el) => acc + el.monto, 0)

    const final = document.createElement("div")
    final.className = "divfinal"

    const mensajefinal = document.createElement("h5")
    mensajefinal.className = "mensajefinal"
    mensajefinal.innerText = "El total a pagar es:"

    const totalfinal = document.createElement("h5")
    totalfinal.className = "totalfinal"
    totalfinal.innerText = "$ " + totalpago

    final.append(mensajefinal)
    final.append(totalfinal)
    cuerpo.append(final)
    final.append(finalizarcircuito)
    final.append(verpago)
    tablafac.style.display = 'none'
    buttonpagar.style.display = 'none'
    botonlimpiar.style.display = 'none'


})

botonlimpiar.addEventListener("click", () => {
    pagofinal = []
    const botones = document.querySelectorAll('.seleccionfinfc');
    botones.forEach(boton => {
        boton.innerText = "PAGAR";
        boton.className = "seleccionfc";
        boton.disabled = false;
    });
    Swal.fire({
        position: "center",
        icon: "success",
        title: "La selección se limpió",
        showConfirmButton: false,
        timer: 700
    });
    localStorage.clear()

})

finalizarcircuito.addEventListener("click", () => {
    localStorage.clear()
})


verpago.addEventListener("click", () => {
    let resumenfinal;
    if (localStorage.getItem("pagofinal")) {
        resumenfinal = JSON.parse(localStorage.getItem("pagofinal"))
    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "No se pago nada",
            showConfirmButton: false,
            timer: 700
        })
    }
resumenfinal.forEach(factura => {
  const resumenfacs = document.createElement("div")
  resumenfacs.className = "resumen-facs"

  const resumenver = document.createElement("h4")
  resumenver.innerText = "Factura Pagada:"

  const resumennumerofc = document.createElement("p")
  resumennumerofc.innerText = "Numero: " + factura.numerofc

  const resumenproveedor = document.createElement("p")
  resumenproveedor.innerText = "Proveedor: " + factura.nombre

  const resumenmonto = document.createElement("p")
  resumenmonto.innerText = "Monto: " + factura.monto

  cuerpo.append(resumenfacs)
  resumenfacs.append(resumenver)
  resumenfacs.append(resumennumerofc)
  resumenfacs.append(resumenproveedor)
  resumenfacs.append(resumenmonto)
})

verpago.style.display = 'none'

})


