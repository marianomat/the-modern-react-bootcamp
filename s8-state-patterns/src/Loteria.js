import React, { Component } from 'react'
import BolasLoteria from './BolasLoteria'
import './Loteria.css'

class Loteria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numeros: Array.from({length: this.props.cantidadBolas})
        }
        this.numerosRandom = this.numerosRandom.bind(this)
    }
    static defaultProps = {
        cantidadBolas: 6,
        numeroMax: 40,
        nombre: "Quini 6"
    }
    numerosRandom() { // Aca usa una callback con set state y usa map.
        let arrayNumeros = []
        for(let i = 0; i < this.props.cantidadBolas; i++) {
            arrayNumeros.push(Math.floor(Math.random() * this.props.numeroMax) + 1)
        }
        this.setState({
            numeros: arrayNumeros
        })
    }
    
    render() {
        return (
            <div className="Loteria">
                <h1 className="Loteria-titulo">{this.props.nombre}</h1>
                <div className="Loteria-bolas">
                    {this.state.numeros.map(num => <BolasLoteria numero={num}/>)}
                </div>
                <button className="Loteria-boton" onClick={this.numerosRandom}>Generar Numeros!</button>
            </div>
        )
    }
}

export default Loteria