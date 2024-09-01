const principal = document.getElementById("cuerpo");

const pagodeldia = document.createElement("h4");
pagodeldia.innerText = "Bienvenidx, ingresar las facturas a pagar";
pagodeldia.className = "instrucciones";

principal.append(pagodeldia);


const ingresofac = document.createElement("div");
ingresofac.className = "ingresofac";

principal.append(ingresofac);

const numerofc = document.createElement("input");
numerofc.type = "text";
numerofc.className = "numerofac"
numerofc.placeholder = "Numero de Factura";

const nombre = document.createElement("input");
nombre.type = "text";
nombre.className = "nombreprov"
nombre.placeholder = "Nombre del Proveedor";

const monto = document.createElement("input");
monto.type = "text";
monto.className = "montofac"
monto.placeholder = "Monto TOTAL";

const botones = document.createElement("div");
botones.className = "botones";

const buttonlisto = document.createElement("button")
buttonlisto.type = "submit"
buttonlisto.className = "aceptarfac"
buttonlisto.innerText = "Aceptar"

const buttonfin = document.createElement("button")
buttonfin.type = "submit"
buttonfin.className = "fincarga"
buttonfin.innerText = "Finalizar"

ingresofac.append(numerofc)
ingresofac.append(nombre)
ingresofac.append(monto)
ingresofac.append(botones)

botones.append(buttonlisto)
botones.append(buttonfin)

const confirmacion = document.createElement("div");
confirmacion.className = "ingresofac";

principal.append(confirmacion);

const buttonverfc = document.createElement("button")
buttonverfc.type = "submit"
buttonverfc.className = "verfac"
buttonverfc.innerText = "Ver Facturas"

const tablafac = document.createElement("div")
tablafac.className = "tablageneral"

const tablatit = document.createElement("table")
tablatit.className = "table"

const columntitulo = document.createElement("thead")
columntitulo.className = "titulos"

const titulosposta = document.createElement("tr")
titulosposta.className = "titulos2"

const titnumero = document.createElement("th")
titnumero.innerText = "N° Factura"
titnumero.scope = "col"

const titprov = document.createElement("th")
titprov.innerText = "Proveedor"
titprov.scope = "col"

const titmonto = document.createElement("th")
titmonto.innerText = "Monto"
titmonto.scope = "col"

const titseleccion = document.createElement("th")
titseleccion.innerText = "Seleccion"
titseleccion.scope = "col"

const cuerpodetabla = document.createElement("tbody")

const ultimosbotones = document.createElement("div")
ultimosbotones.className = "ultimosbotones"

const buttonpagar = document.createElement("button")
buttonpagar.type = "submit"
buttonpagar.className = "pagartodo"
buttonpagar.innerText = "Pagar Selección"

const botonlimpiar = document.createElement("button")
botonlimpiar.className = "limpiartodo"
botonlimpiar.innerText = "Limpiar Selección"

ultimosbotones.append(buttonpagar)
ultimosbotones.append(botonlimpiar)


const finalizarcircuito = document.createElement("button")
finalizarcircuito.className = "historico"

const volverhome = document.createElement("a")
volverhome.href = "../index.html"
volverhome.innerText = "Finalizar / Volver al Inicio"

finalizarcircuito.append(volverhome)


const verpago = document.createElement("button")
verpago.innerText = "Ver FC pagadas"
verpago.className = "verpago"




