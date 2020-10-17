import React from "react"
import './App.css'
function ToDoItem(props){
  return (
    <div className="todo-item">
      <input type="checkbox"
             checked={props.item.completed}
             onChange={() => props.onChange(props.item.id)}/>
      <p className={props.item.completed ? 'completed-task' : ''}>{props.item.text}</p>
    </div>
  )
}

export default ToDoItem