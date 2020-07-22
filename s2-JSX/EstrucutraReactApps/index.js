class App extends React.Component {
    render() {
        return (
            <div>
                <Hola/>
                <EligeNumero/>
            </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))