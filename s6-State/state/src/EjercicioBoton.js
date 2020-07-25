import React, { Component } from 'react';

class EjercicioBoton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 1,
            salioSiete: false
        }
        this.randomNum = this.randomNum.bind(this)
    }
    randomNum(e) {
        let numero = Math.floor(Math.random()*10) + 1
        if(numero === 7) {
            return this.setState({numero: numero, salioSiete: true})
        } else  {
            return this.setState({numero: numero})
        }
    }
    render() {
        return (
            <div>
                <h1>Ejericio Practica 1</h1>
                <h1>El numero es {this.state.numero}</h1>
                {this.state.salioSiete 
                ? <h2>GANASTEE</h2> 
                : <button onClick={this.randomNum}>CLICK</button> }      
            </div>
        )
    }
}

export default EjercicioBoton