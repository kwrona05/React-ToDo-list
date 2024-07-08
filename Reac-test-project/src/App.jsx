import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
    const [text, setText] = useState('')
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const addTask = () => {
        setText(inputValue)
        setInputValue('')
    }
  return(
    <div className="container">
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter Task"></input>
      <button onClick={addTask}>Add Task</button>
      <p>{text}</p>
    </div>
  )
}

export default App
