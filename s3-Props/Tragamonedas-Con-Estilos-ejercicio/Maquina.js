class Maquina extends React.Component {
    render() {
        const {op1,op2,op3} = this.props
        let resultado = (op1 === op2) && (op2 === op3) 
        return (
            <div class="Maquina">
                <p style={{color: "black", backgroundColor: "yellow"}}>{op1}{op2}{op3}</p>
                <strong>
                    <p className={resultado ? "Maquina-ganadora" : "Maquina-perdedora"}>{resultado ? "GANASTEEE" : "Mal ahi bro"}</p>
                </strong>
            </div>
        )
    }
}