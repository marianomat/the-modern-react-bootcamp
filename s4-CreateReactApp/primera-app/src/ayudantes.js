function elegir(array) {
    return Math.floor(Math.random() * array.length)
}

function eliminar(array, comida) {
    let index = array.indexOf(comida) === -1 ? undefined : array.indexOf(comida)
    if(array.indexOf(comida) === -1) {
        return index
    } else {
        return array.splice(index,1)
    }
}

/* Codigo de la Funcion eliminar solucion oficial (esta bueno)
function eliminar(array,comida) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === comida) {
            return [ ...array.slice(0, i), ...array.slice(i + 1)]
        }
    }
}
 */
export {elegir, eliminar}