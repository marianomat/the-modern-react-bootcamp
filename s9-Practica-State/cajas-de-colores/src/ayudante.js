function elegir(array) {
    let indiceRandom = Math.floor(Math.random() * array.length)
    return array[indiceRandom]
}

export { elegir }