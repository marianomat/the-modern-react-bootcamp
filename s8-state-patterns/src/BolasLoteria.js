import React, { Component } from 'react';
import "./BolasLoteria.css"

class BolasLoteria extends Component {
    render() {
        return (
            <div className="BolasLoteria">
                {this.props.numero}
            </div>
        )
    }
}

export default BolasLoteria