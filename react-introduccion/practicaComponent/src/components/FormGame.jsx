import { Component } from "react";
import "./styles/style.css";
class FormGame extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        <select name="operation" id="" onChange={this.props.onChange} value={this.props.formValues.operations}>
                            <option value="+">Suma</option>
                            <option value="-">Resta</option>
                            <option value="*">Multiplicacion</option>
                            <option value="/">Division</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                    Nombre del jugador: 
                    </label>
                    <br />
                    <label>
                        <input type="text" name="name" onChange={this.props.onChange} value={this.props.formValues.name}/>
                    </label>
                    <br />
                    <button onClick={this.props.onClick}>Iniciar</button>
                </form>    
            </div>
        )
    }

}

export default FormGame;