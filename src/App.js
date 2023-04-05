import { nanoid } from "nanoid";
import { useState } from "react";
import FilteredButtons from "./TO/FilteredButtons";
import Form from "./TO/Form";
import Todo from "./TO/Todo";

function App(props) {
  const [tasks, setTasks] = useState([])
  const taskList = tasks.map((task) => (
< Todo 
name={`Alexander ${task.name}`} 
completed={task.completed} 
id={task.id}
key={task.id}
deleteTask={deleteTask}
/>));

function addTask(name){
  const newTask = {id: `ris-${nanoid()}`, name: name, completed: 'false'}
  // {name.length === 1 ? `Xander ${name}`: `Xander ${name}`}
  setTasks([...tasks, newTask])
}
function deleteTask(id){
  const remainingTasks = tasks.filter((task) => id !== task.id)
  setTasks(remainingTasks)
}

// `ris-${nanoid()}`

  // console.log(props)

  return (
    <div className="todoapp stack-large">
      <h1>zile</h1>
    <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
    <FilteredButtons name="all"/>
    <FilteredButtons name="active"/>
    <FilteredButtons name="completed"/>
      </div>
      <h2 id="list-heading">
      {taskList.length === 1 ? `${taskList.length} task ` : taskList.length === 0 ? ' Add tasks' : `${taskList.length} tasks `} </h2>
      <ul
         
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
         {/* <li className="todo stack-small">
           <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div> 
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
       </li>   */}
          {taskList} 
       
      </ul>
    
   {/* < Todo name='react' Checked ={true} id='todo-1'/>
  < Todo name='python'Checked={false} id='todo-2' />
  < Todo name = 'html'Checked = {true}id='todo-3'/>  */}
 
    </div>
  );
}

export default App
