import { Component } from 'react';
import "./styles/style.css";
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            response: "",
            score: 0,
            incorrect: false
        };
    }

    render() {
        if (this.state.score === 3) {
            return this.renderWinnerScreen();
        } else {
            return this.renderProblem();
        }
    }

    renderWinnerScreen() {
        return (
            <div className="content">
                <div id="winner"> {this.props.playerName}Has ganado!</div>
                <button onClick={this.props.onClick}>Regresar</button>
            </div>
        );
    }

    renderProblem() {
        return (
            <div>
                <div className="content">
                    <div className={this.state.incorrect ? "incorrect" : ""} id="problem">{this.state.num1} {this.props.operation} {this.state.num2}</div>
                    <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} autoFocus={true} value={this.state.response} />
                    <div><h2>Score: {this.state.score}</h2></div>
                    <div><h2>Jugador: {this.props.playerName}</h2></div>
                    <div><h1>Juego de operaciones</h1></div>
                </div>
            </div>);
    }

    inputKeyPress = (event) => {

        if (event.key === "Enter") {

            const answer = parseInt(this.state.response);
            switch (this.props.operation) {
                case '+':
                    if (answer === this.state.num1 + this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '-':
                    if (answer === this.state.num1 - this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '*':
                    if (answer === this.state.num1 * this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '/':
                    if (answer === this.state.num1 / this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                default:
                    break;
            }
        }
    }

    succesResponse = () => {
        this.setState(state => ({
            score: state.score + 1,
            response: "",
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            incorrect: false
        }));
    }
    failResponse = () => {
        this.setState(state => ({
            score: state.score - 1,
            incorrect: true,
            response: ""
        }));
    }


    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        });
    }
}

export default Game;