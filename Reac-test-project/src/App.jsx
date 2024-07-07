import AddTaskBtn from './AddTaskButton'
import './App.css'
import TaskInput from './Input'

function App() {
  return(
    <div className="container">
      <div className="inputDiv">
      <TaskInput></TaskInput>
      <AddTaskBtn></AddTaskBtn>
      </div>
      <div className="tile">
      </div>
    </div>
  )
}

export default App
