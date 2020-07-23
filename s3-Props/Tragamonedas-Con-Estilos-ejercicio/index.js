class App extends React.Component {
    render() {
        return (
           <div>
               <h1 style={{textAlign: "center"}}>Tragamonedas!!</h1>
               <Maquina
                    op1="X"
                    op2="X"
                    op3="X"
                />
                  <Maquina
                    op1="S"
                    op2="D"
                    op3="R"
                />
                  <Maquina
                    op1="T"
                    op2="T"
                    op3="X"
                />
           </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))