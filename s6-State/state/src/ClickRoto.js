import React, { Component} from 'react';

class ClickRoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickeado: false
        }
        this.manejadorClick = this.manejadorClick.bind(this) //Setea el contexto en que se llama la funcion
    }
    manejadorClick(e) {
        this.setState({clickeado: true})
    }
    render(){
        return (
            <div>
                <h1>{this.state.clickeado? 'Clickeado' : 'Hacele click dalee'}</h1>
                <button onClick={this.manejadorClick}> CLICKKK</button>
            </div>          
        )
    }
}

export default ClickRoto

