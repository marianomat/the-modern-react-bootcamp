class App extends React.Component {
    render() {
        return (
           <div>
              <Amigo nombre="Fer" hobbies={["age", "medicina", "carpinteria"]}/>
              <Amigo nombre="Gatardo" hobbies={["dormir", "comer", "dormir mas"]}/>
              <Amigo/>
           </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))