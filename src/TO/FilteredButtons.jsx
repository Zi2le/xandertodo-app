import React from 'react'

export default function FilteredButtons(props) {
    function xander(){
        alert('Hello Mrs Alexander Zile')
        alert(`Would you like to see Mr Xander ma'am`)
        alert(`Yes please`)
    }
  
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={xander}>
    <span className="visually-hidden">Show </span>
    <span>{props.name}</span>
    <span className="visually-hidden"> tasks</span>
  </button>
  
  )
}
