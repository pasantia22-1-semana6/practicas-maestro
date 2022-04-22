import {Component} from "react"
import './App.css'
import GamePage from "./pages/GamePage"

class App extends Component{
  
  render(){
    return(
      <div className="App">
       <GamePage></GamePage>
      </div>
    )
  }
}


export default App
