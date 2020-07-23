class App extends React.Component {
    render() {
        return (
            <div>
                <Hola 
                    to="Mariano" 
                    from="Matias" 
                    numero={3}
                    datos={[1,2,3,4,5]}
                    esVerdad
                    signos={4}
                    imagen="https://images.unsplash.com/photo-1595389302144-5d144c2704b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
            </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))