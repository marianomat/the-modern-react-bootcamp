import React, { Component } from 'react';
import './Dado.css'

class Dado extends Component {
    render() {
        let claseDado = `fas fa-dice-${this.props.cara}`
        return (
            <div className="Dado ">
               <i className={this.props.estaGirando 
                    ? claseDado + " Dado-animacion" 
                    : claseDado}>
                </i>
            </div>
        )
    }
}

export default Dado;