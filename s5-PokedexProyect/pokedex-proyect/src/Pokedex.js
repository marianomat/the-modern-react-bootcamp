import React, {Component} from 'react';
import Pokecard from './Pokecard'
import "./Pokedex.css"



class Pokedex extends Component {
    render() {
        let data = this.props.datos
        let clases = this.props.isWinner === true ? "pokedex-result pokedex-winner" : "pokedex-result pokedex-loser"
        return (
            <div className="pokedex">
                <h1 className="pokedex-titulo">Pokedex</h1>
                <h2 className="pokedex-exp">Exp total: {this.props.totalExp} </h2>
                <h2 className={clases}>{this.props.isWinner === true ? "GANASTEE!!" : "PERDISTE!!"}</h2>         
                <div className="pokedex-cards">
                    {data.map(data => <Pokecard datos={data}/>)}
                </div>
          
            </div>
        )
    }
}

export default Pokedex