import React, { useState } from 'react'
import "./App.css"
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State for active todos
  const [listtodo, setListtodo] = useState([]);
  // State for editing
  const [editindex, setEditindex] = useState(null);
  const [edittext, setEdittext] = useState("");
  // State for completed tasks
  const [ctask, setCtask] = useState([]);

  // Add new todo
  const addlist = (inputText) => {
    if (inputText !== "") setListtodo([...listtodo, inputText]);
  };

  // Delete todo by index
  const deletelist = (key) => {
    let newlist = [...listtodo];
    newlist.splice(key, 1);
    setListtodo([...newlist]);
  };

  // Start editing a todo
  const startEdit = (i) => {
    setEditindex(i);
    setEdittext(listtodo[i]);
  };

  // Save edited todo
  const saveEdit = () => {
    const updatedList = [...listtodo];
    updatedList[editindex] = edittext;
    setListtodo(updatedList);
    setEditindex(null);
    setEdittext("");
  };

  // Mark todo as completed
  const completetask = (task) => {
    setCtask([...ctask, task]);
    setListtodo(listtodo.filter(t => t !== task));
  };

  // Delete completed task
  const cdeletelist = (key) => {
    let newlist = [...ctask];
    newlist.splice(key, 1);
    setCtask([...newlist]);
  };

  return (
    <div className='main'>
      {/* Active tasks container */}
      <div className='container'>
        <div className='heading'>
          <h1>TODO APP</h1>
        </div>

        {/* Input component */}
        <Todoinput addlist={addlist} />

        {/* Render active todos */}
        <div className='inputtext'>
          {listtodo.map((listItem, i) => (
            <div className="task-row" key={i}>
              <li>
                {editindex === i ? (
                  <input
                    className='editbox'
                    type='text'
                    value={edittext}
                    onChange={(e) => setEdittext(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit();
                    }}
                  />
                ) : (
                  listItem
                )}
              </li>
              <span className="icons">
                {/* Edit, delete, complete icons */}
                <i className="fa-solid fa-pen-to-square" onClick={() => startEdit(i)}></i>
                <i className="fa-solid fa-trash" onClick={() => deletelist(i)}></i>
                <i className="fa-solid fa-check" onClick={() => completetask(listItem)}></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Completed tasks container */}
      <div className='container1'>
        <div className='heading'>
          <h1>COMPLETED TASKS</h1>
        </div>
        <div className='inputtext'>
          {ctask.map((Item, i) => (
            <div className="task-row" key={i}>
              <li>{Item}</li>
              <span className="icons">
                {/* Delete completed task */}
                <i className="fa-solid fa-trash" onClick={() => cdeletelist(i)}></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
