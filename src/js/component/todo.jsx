import React, { useState } from "react";

const Todo = () => {

  const [text, setText] = useState("")
  const [task, setTask] = useState([]);

  const handleText = (event) => {
    setText(event.target.value)
  }
  const addTask = () => {
    if (text) {
      setTask([...task, text])
      setText("")
    }
  }
  const deleteTask = (done) => {
    const newTask = task.filter(element => element != done)
    setTask(newTask)
  }
  return (
    <div>
      <div className="input-group-lg mb-3 border-4">
        <input type="text"
          className="form-control"
          placeholder="What needs to be done?"
          value={text}
          onChange={handleText}
          onKeyUp={e => e.keyCode == 13 && addTask()} />
      </div>
      {task ?
        <ul>
          {task.map((value, index) => {
            return <li key={index}>{value}<button onClick={() => { deleteTask(value) }}><i className="fa-thin fa-circle-trash"></i></button>
            </li>
          })
          }
        </ul> : ""}
      {task.length != 0 ? <div className="label"><label>{task.length} item left</label></div> : ""}
    </div>
  );
};

export default Todo;
