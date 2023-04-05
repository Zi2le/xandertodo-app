import React from 'react'

export default function Todo (props) {
 function deleteTask(){
  props.deleteTask(props.id)
 }
  return (
    
    <li className="todo stack-small">
    <div className="c-cb">
      <input id={props.id} type="checkbox" completed={props.completed} />
      <label className="todo-label" htmlFor={props.id}>
       { props.name}
       
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">Eat</span>
      </button>
      <button type="button" className="btn btn__danger" onClick={deleteTask}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </li>
  )
}
