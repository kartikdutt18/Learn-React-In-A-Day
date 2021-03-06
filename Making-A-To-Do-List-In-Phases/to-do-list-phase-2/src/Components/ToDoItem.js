import React from "react"

function ToDoItem(props){
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.completed}/>
      <p>{props.text}</p>
    </div>
  )
}

export default ToDoItem