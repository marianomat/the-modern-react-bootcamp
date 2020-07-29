function eleccion(array) {
    let randomNumero = Math.floor(Math.random() * array.length)
    return array[randomNumero]
}

export {eleccion}