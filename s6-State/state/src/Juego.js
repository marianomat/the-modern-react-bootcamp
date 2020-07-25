import React, { Component } from "react";

class Juego extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puntaje: 0,
            intentos: 0
        }
    }
    render() {
        return (
            <div>
                <p><strong>Puntaje es: </strong>{this.state.puntaje}</p>
                <p><strong>Intentos: </strong>{this.state.intentos}</p>
            </div>
        )
    }
}

export default Juego