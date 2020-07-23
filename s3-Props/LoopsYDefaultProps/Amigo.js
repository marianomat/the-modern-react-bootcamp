class Amigo extends React.Component {
    static defaultProps = {
        nombre: "Anonimo",
        hobbies: ["NO SE"]
    }
    render() {
        const {nombre, hobbies} = this.props
        return (
            <div>
                <h1>{nombre}!</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}