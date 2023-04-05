import React from 'react'

export default function Hooks4() {
    const [name, setName] = useState({
        firstname: '',
        lastname:  ''
    })
    function firstname(e){
        return setName({...name, firstname:  e.target.value})
    }
    function lastname(l){
        return setName({...name,lastname: l.target.value})
    }
  return (
    <div>{name}
     <div>
            <label htmlFor="fn">Firstname</label> 
          <input type="text" name="fn" id="fn" 
          value={name.firstname} 
          onChange={firstname}/> <br />
          <label htmlFor="sn">lastname</label>
          <input type="text" name="sn" id="sn" 
          value={name.lastname}
          onChange={lastname}/>
          <h2>firstname:{ name.firstname}</h2>
          <h2>lastname: {name.lastname}</h2>
        </div>
    </div>
  )
}
