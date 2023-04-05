import React from 'react'

export default function Profie() {
    const studentData = [
        {
            
           name: 'xander zith',
           age: 30,
           skills:['java','react','Cardiothoracic Surgeon']
        },
        {                  
            name: 'zile Theb',
            age: 28,
            skills:['java','css','tailwind']
         },
         {
            name: 'Ris zith',
            age: 36,
            skills:['python','react','css']
         },
         {
            name: 'xander zith',
            age: 30,
            skills:['java','react','Cardiothoracic Surgeon']
         },

    ]
    const students = studentData.map(student => ( 
        <section>
            <h2>Student: {student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Skills: {student.skills.join(', ').toUpperCase()}</p>
        </section>
    ))
  return (
    <>{students}</>
  )
}
