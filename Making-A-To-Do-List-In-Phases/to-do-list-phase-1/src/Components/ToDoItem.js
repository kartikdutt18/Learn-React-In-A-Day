import React from "react"

function ToDoItem(){
  const items = "This is a place holder";
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{items}</p>
    </div>
  )
}

export default ToDoItem