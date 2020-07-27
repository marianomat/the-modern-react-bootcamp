import React, { Component } from 'react';
import Dado from './Dado';
import './TirarDados.css'

class TirarDados extends Component {
    static defaultProps = {
        caras: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props)
        this.state = {
            estaGirando: false,
            dadoUno: "one",
            dadoDos: "two"
        }
        this.tirarDados = this.tirarDados.bind(this)
    }
    tirarDados() {
        this.setState({
            estaGirando: true,
            dadoUno: this.props.caras[Math.floor(Math.random() * 6)],
            dadoDos: this.props.caras[Math.floor(Math.random() * 6)]
        });
        setTimeout(() => {
            this.setState({
                estaGirando: false
            });
        },1700)
    }
    render() {
        return (
            <div className="TirarDados">
                <div className="TirarDados-dados">
                    <Dado estaGirando={this.state.estaGirando} cara={this.state.dadoUno}/>
                    <Dado estaGirando={this.state.estaGirando} cara={this.state.dadoDos}/>
                </div>
                <button disabled={this.state.estaGirando} className="TirarDados-boton" onClick={this.tirarDados}>
                    {this.state.estaGirando? "Tirando dados!!!" : "Tira los dados!"}
                </button>
            </div>
            
        )
    }
}

export default TirarDados;