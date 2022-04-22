import { Component } from "react";
import FormGame from "../components/FormGame";
import Game from "../components/Game";
import Welcome from "../components/Welcome";
import "../components/styles/style.css";

class GamePage extends Component{
    state={
        form:{
            operation:"+",
            name:""
        },
        game:{
            status:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            game:{
                status:!this.state.game.status
            }
        })
    }
       
    render(){
        if(this.state.game.status){
           return this.showPlayer()
        }else{
           return this.showWelcome()
        }
    }

    showPlayer(){
        return (
            <div className="container">
                <Game 
                playerName={this.state.form.name} 
                operation={this.state.form.operation}
                onClick={this.handleClick}
                ></Game>
            </div>
        )
    }
    showWelcome(){
        return(
            <div className="container">
                <div className="content">
                    <Welcome></Welcome>
                    <FormGame onClick={this.handleClick} onChange={this.handleChange} formValues={this.state.form}></FormGame>
                </div>
            </div>
        )
    }
    
}

export default GamePage;