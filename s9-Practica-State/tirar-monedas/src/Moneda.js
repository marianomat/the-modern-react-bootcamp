import React, { Component } from 'react';
import './Moneda.css'

class Moneda extends Component {
    render() {
        return(
            <div className="Moneda">
                <img className="Moneda-img" src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default Moneda