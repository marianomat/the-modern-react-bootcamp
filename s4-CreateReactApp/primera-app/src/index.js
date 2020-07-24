import comidas from "./comidas.js"
import {elegir, eliminar} from "./ayudantes.js"


let comida = comidas[elegir(comidas)];
console.log("Hola tenemos " + comidas)
console.log("Me gustara comer " + comida)
console.log("Aca tenes un " + comida)
console.log("Gracias bro, tenes otro?")
eliminar(comidas,comida)
console.log("No rey perdona, solo nos queda " + comidas)