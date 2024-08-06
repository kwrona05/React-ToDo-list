import React from "react"
import Name from "./Tititle"
import './App.css'

function Tile(props) {
  return (
    <div className="TaskTile">
  <h2>{props.title}</h2>
  <p2>{props.task}</p2>
  </div>
  )
}
function App() {
  return (
    <div>
      <Name />
      <Tile 
      title="Coding 1h"
      task="Learn Python and robotic at 5pm" />
    </div>
)
}

export default App