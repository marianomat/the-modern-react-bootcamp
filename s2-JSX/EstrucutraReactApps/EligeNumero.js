function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class EligeNumero extends React.Component {
    render() {
        let numero = randomNumber(), 
        mensaje;
        if (numero === 7) {
            mensaje = <div>
                <h2>SEEEEEEEEE</h2>
            </div>
        } else {
            mensaje = <p>NO PPERRO NOOO</p>
        }
        return (
            <div>
                <h1>El numero es... {numero}</h1>
                <p>{numero === 7 ? "Bien es 7!":"Mal ahi"}</p>
                {numero === 7 ? <img src="https://media3.giphy.com/media/3o6ozhBff08QyZG5Us/100w.webp?cid=ecf05e478dad82edd1e01d3e4020fa24bd7de1347d8361c7&rid=100w.webp"/> : null}
                <p>{mensaje}</p>
            </div>
        )
    }
}