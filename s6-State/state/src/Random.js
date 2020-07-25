import React, { Component } from "react";

class Random extends Component {
    constructor(props) {
        super(props)
        this.state = { numero: 0}
        this.timer()
    }
    timer() {
        setInterval(() => {
            let numeroRandom = Math.floor(Math.random() * this.props.numeroMaximo)
            this.setState({numero: numeroRandom})
        }, 1000)
    }
    render() {
        return (
            <h1>{this.state.numero}</h1>
        )
    }
}


export default Random