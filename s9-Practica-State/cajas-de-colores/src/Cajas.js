import React, { Component } from 'react';
import { elegir } from './ayudante';
import './Cajas.css';

class Cajas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: elegir(this.props.colores)
        }
        this.manejarClick = this.manejarClick.bind(this)
    }
    static defaultProps = {
        colores: [
            "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black",            "BlanchedAlmond",            "Blue",
            "BlueViolet",            "Brown",            "BurlyWood",            "CadetBlue",            "Chartreuse",            "Chocolate",            "Coral",            "CornflowerBlue",
            "Cornsilk",            "Crimson",            "Cyan",            "DarkBlue",            "DarkCyan",            "DarkGoldenRod",
            "DarkGray",           "DarkGrey",            "DarkGreen",            "DarkKhaki",            "DarkMagenta",
            "DarkOliveGreen",            "DarkOrange",            "DarkOrchid",            "DarkRed",            "DarkSalmon",
            "DarkSeaGreen",            "DarkSlateBlue",            "DarkSlateGray",            "DarkSlateGrey",            "DarkTurquoise",            "DarkViolet",            "DeepPink",
            "DeepSkyBlue",           "DimGray",            "DimGrey",          "DodgerBlue",            "FireBrick",            "FloralWhite",
            "ForestGreen",           "Fuchsia",           "Gainsboro",            "GhostWhite",           "Gold",
            "GoldenRod",          "Gray",            "Grey",            "Green",            "GreenYellow",            "HoneyDew",
            "HotPink",            "IndianRed",            "Indigo",            "Ivory",            "Khaki",            "Lavender",            "LavenderBlush",            "LawnGreen",            "LemonChiffon",            "LightBlue",            "LightCoral",          "LightCyan",
            "LightGoldenRodYellow",            "LightGray",            "LightGrey",           "LightGreen",
            "LightPink",
            "LightSalmon",            "LightSeaGreen",
            "LightSkyBlue",            "LightSlateGray",            "LightSlateGrey",            "LightSteelBlue",
            "LightYellow",
            "Lime",            "LimeGreen",            "Linen",            "Magenta",
            "Maroon",            "MediumAquaMarine",            "MediumBlue",            "MediumOrchid",            "MediumPurple",
            "MediumSeaGreen",            "MediumSlateBlue",            "MediumSpringGreen",            "MediumTurquoise",
            "MediumVioletRed",            "MidnightBlue",            "MintCream",            "MistyRose",
            "Moccasin",            "NavajoWhite",            "Navy",            "OldLace",            "Olive",
            "OliveDrab",            "Orange",
            "OrangeRed",            "Orchid",            "PaleGoldenRod",            "PaleGreen",
            "PaleTurquoise",            "PaleVioletRed",            "PapayaWhip",
            "PeachPuff",            "Peru",            "Pink",
            "Plum",            "PowderBlue",
            "Purple",            "RebeccaPurple",            "Red",            "RosyBrown",
            "RoyalBlue",            "SaddleBrown",            "Salmon",
            "SandyBrown",            "SeaGreen",            "SeaShell",            "Sienna",
            "Silver",            "SkyBlue",
            "SlateBlue",            "SlateGray",            "SlateGrey",            "Snow",
            "SpringGreen",            "SteelBlue",            "Tan",            "Teal",
            "Thistle",           "Tomato",           "Turquoise",            "Violet",            "Wheat",            "White",            "WhiteSmoke",            "Yellow",            "YellowGreen",
          ]
        }
    cambiarColor() {
        let nuevoColor;
        do {
            nuevoColor = elegir(this.props.colores);
        } while (nuevoColor === this.state.color)
        this.setState({
            color: nuevoColor
        })
    }
    manejarClick() {
        this.cambiarColor()
    }
    render() {
        return (
            <div className="Cajas">
                <div onClick={this.manejarClick}style={{backgroundColor: this.state.color }}className="Cajas-cuadro">
                </div>
            </div>   
        )
    }
}

export default Cajas;