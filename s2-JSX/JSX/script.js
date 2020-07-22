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

ReactDOM.render(<EligeNumero/>, document.getElementById("root"))












/* function estadoDeAnimo() {
    const estados = ["feliz", "enojado", "triste", "alegre"]
    return estados[Math.floor(Math.random() * estados.length)]
}


class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Imagen</h1>
                <h2>Mi estado de animo es  {estadoDeAnimo()}</h2>
                <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root")) */