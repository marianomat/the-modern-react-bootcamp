import React, { Component } from 'react';
import Cajas from './Cajas';
import './ContenedorCajas.css'

class ContenedorCajas extends Component {
    static defaultProps = {
        cantidadCajas: 10
    }
    render() {
        const colorActual = Array.from({length: this.props.cantidadCajas})
        return (
            <div className="ContenedorCajas">
                {colorActual.map(() => <Cajas/>)}
            </div>
        )
    }
}

export default ContenedorCajas;