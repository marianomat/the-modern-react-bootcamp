import React, { Component } from 'react';
import { eleccion } from './Eleccion';
import Moneda from './Moneda';

class TirarMoneda extends Component {
    static defaultProps = {
        monedas: [
            {cara: "cara", src:"https://tinyurl.com/react-coin-heads-jpg"},
            {cara: "cruz", src:"https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            monedaActual: null,
            caras: 0,
            cruz: 0,
            tiradas: 0,
            alt: ""
        }
        this.manejarClick = this.manejarClick.bind(this)
    }
    tirarMoneda() {
      const nuevaMoneda = eleccion(this.props.monedas)
      this.setState(estadoViejo => {
        return {
            monedaActual: nuevaMoneda,
            tiradas: estadoViejo.tiradas + 1,
            caras: estadoViejo.caras + (nuevaMoneda.cara === "cara" ? 1 : 0),
            cruz: estadoViejo.cruz + (nuevaMoneda.cara === "cruz" ? 1 : 0)
        }
      })
    }
    manejarClick(e) {
        this.tirarMoneda()
    }
    render() {
        return(
            <div className="TirarMoneda">
                <h1>Tira la moneda!</h1>
                {this.state.monedaActual && <Moneda src={this.state.monedaActual.src} alt={this.state.monedaActual.cara}/>}
                <button onClick={this.manejarClick}>Tirar moneda</button>
                <p>Tiraste las monedas {this.state.caras + this.state.cruz} veces y salio {this.state.caras} caras y  
                 {this.state.cruz} cruz</p>
            </div>            
        )
    }
}

export default TirarMoneda