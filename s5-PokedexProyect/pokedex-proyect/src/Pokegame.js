import React, {Component} from 'react';
import Pokedex from './Pokedex'

const data = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
let elegidos = [];
let numero;
for(let i = 0; i < 4; i++) {
    numero = Math.floor(Math.random() * data.length)
    elegidos.push(data[numero])
    data.splice(numero,1)
}
let expElegidos = 0
let expData = 0
for(let i = 0; i < data.length; i++) {
    expData += data[i].base_experience
}
for(let i = 0; i < elegidos.length; i++) {
    expElegidos += elegidos[i].base_experience
}
class Pokegame extends Component {
    render() {
        return (
            <div className="pokedex">
                <Pokedex isWinner={expData > expElegidos? true : false} totalExp={expData} datos={data}/>
                <Pokedex isWinner={expData > expElegidos? false : true} totalExp={expElegidos} datos={elegidos}/>
            </div>
        )
    }
}


export default Pokegame;