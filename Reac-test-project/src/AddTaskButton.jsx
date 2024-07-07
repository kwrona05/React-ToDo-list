function AddTaskBtn() {
    const task = document.getElementsByClassName('input')
    const paragraph = document.getElementsByClassName('task')
    const addTask = () => {
        paragraph.textContent = task
    }

    return(
        <button onClick = {addTask}>Add</button>
    )
}

export default AddTaskBtn
