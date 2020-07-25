import React, {Component} from 'react';
import "./Pokecard.css"

class Pokecard extends Component {
    
    render() {
        const data = this.props.datos
        let numeroTresDigitos = this.props.datos.id.toString()
        while(numeroTresDigitos.length < 3) {
            numeroTresDigitos = "0" + numeroTresDigitos
        }
        let url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + numeroTresDigitos + ".png" 
        return (
            <div className="pokecard">
                <h3 className="pokecard-titulo">{data.name}</h3>
                <img src={url} className="pokecard-img"/>
                <p className="pokecard-type"><strong>Type: </strong>{data.type} </p>
                <p className="pokecard-exp"><strong>EXP: </strong> {data.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard