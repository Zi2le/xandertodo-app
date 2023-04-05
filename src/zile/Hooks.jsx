import React, { useState } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(10)
    let xander = 10
  return (
    <div>
        <p>{count}</p>
        <button
        
        ></button>
        <button
            onClick = {() => {setCount(count + 100)}}> Update Count
        </button>
        <button
            onClick = {() => {setCount(count - 100)}}> increment
        </button>
        <button
            onClick = {() => {setCount(xander)}}> Reset
        </button>
    </div>
  )
}
