import React, { useState } from 'react'

export default function Hooks1() {
 const [count, setCount] = useState(1)
    function increase (){
    return setCount(count + 1)
    }
    function minus (){
        return setCount(count - 1)
        }
        function reset (){
            let xander = 1
            return setCount(xander)
            }
  return (
    <div><p>{count}</p>
    <button onClick={increase}>add</button>
    <button onClick={minus}>minus 10</button>
    <button onClick={reset}> reset value</button>
    </div>
  )
}
