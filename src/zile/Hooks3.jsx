import React, { useState } from 'react'

export default function Hooks3() {
    const [name, setName] = useState(
      {
        firstname: '',
        lastname:  ''
}

)
  return (
    <div>
        <div>
            <label htmlFor="fn">Firstname</label> 
          <input type="text" name="fn" id="fn" 
          value={name.firstname} 
          onChange={z => setName({...name, firstname: z.target.value})}/> <br />
          <label htmlFor="sn">lastname</label>
          <input type="text" name="sn" id="sn" 
          value={name.lastname}
          onChange={z => setName({...name, lastname: z.target.value})}/>
          <h2>firstname:{ name.firstname}</h2>
          <h2>lastname: {name.lastname}</h2>
        </div>
    </div>
  )
}
