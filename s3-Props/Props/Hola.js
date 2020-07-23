  
class Hola extends React.Component {
    render() {
        console.log(this.props)
        let signos = "!".repeat(this.props.signos)
        return (
            <div>
                <p>Hola {this.props.from}!!!. Soy {this.props.to}{signos}</p>
                <img src={this.props.imagen}/>
            </div>
        )
    }
}