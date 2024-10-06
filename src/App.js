import './App.css';
import {Object} from './User'
import { useState } from 'react';

function App() {
  const name = <h1 className="name">Luke</h1>;
  const age = 25
  const isBlue = true
  const button = true
  const email = <h2>luke@gmail.com</h2>
  const combine = (<div>
                    {name}
                    {age}
                    {email}
                  </div>);

  
  const GetNameComponent = () => {
    return (
    <div>
      <h1>Luke component</h1>
      <h1>21 component</h1>
      <h1>email component</h1>
    </div>
    );
  };

  const PropsComponent = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
      </div>
    );
  };

  // list / array
  const names = ['name1', 'name2', 'name3', 'name4', 'name5'];

  // list of objects
  const objects = [
    {name: 'name1', age: 21},
    {name: 'name2', age: 11},
    {name: 'name3', age: 31},
  ]

  // useState hook
  // const money = 0;
  const [money, setMoney] = useState(0); 

  const increaseMoney = () => {
    // money = money + 1;
    // console.log(money)
    setMoney(money + 1);
  }

  // state for input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // below can be used to grab information from a form
    setInputValue(event.target.value)
  };

  // show / hide text
  const [showText, setShowText] = useState(true);

  const showOrHideText = () => {
    // flip showText to true or false
    setShowText(!showText);
  };

  // chaging color directly within onClick function
  const [textColor, setTextColor] = useState("red");


  // CRUD starts here
  // Create 
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTodoChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // create a task id with special id
    const task = {
      // if list is empty, add 1, else grab the id of last element and add 1 to it
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1 ,
      taskName: newTask,
      completed: false
    }
    // create a new list that includes old todoList and newTask
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  // Delete
  // uses filter() to include the element in the array if return true, exclue if false
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if(task.id === id) {
        return false;
      } else {
        return true;
      } 
    });
    setTodoList(newTodoList);
  };

  // Update
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          // ... task means we're leaving those objects the same, only changing "completed"
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    )
  };


  return (
    <div className="App">
      {combine}
      <GetNameComponent />
      <PropsComponent name="Julia" age={18} email="julia@gmail.com" />
      <PropsComponent name="Denise" age={28} email="denise@gmail.com" />
      {/* show h1 tag is age >= 18 */}
      {/* turn colour to blue if blue = true */}
      {age >= 18 ? <h1 style={{color: isBlue ? 'blue' : 'green'}} > Luke is over age</h1> : <h1>Luke is under age</h1>}
      {/* show the button if button is true */}
      {button ? <button> BUTTON IS TRUE</button> : null}
      <h1>Printing out list of names below using .map()</h1> 
      {names.map((value, key) => {
        return <h3>{value}</h3>
      })}

      <h1>Printing out the list of objects below</h1>
      {objects.map((value, key) => {
        return <Object name={value.name} age={value.age}/>

      })}

      <h1>Priting out useState money example</h1>
      <h3>{money}</h3><button onClick={increaseMoney}>increase money</button>
      
      <h1>Testing input with useState</h1>
      <input type='text' onChange={handleInputChange}/>
      {inputValue}

      <h1>Show / Hide Example</h1>
      <button onClick={showOrHideText} >Show / Hide</button>
      {showText && <h1>Hello World</h1>}


      <h1>Example for changing color</h1>
      {/* example 1 */}
      {/* <button onClick={() => { setTextColor("green")}}>Change color</button> */}
      {/* example 2 */}
      <button onClick={() => { setTextColor(textColor === "red" ? "green" : "red")}}>Change color</button>
      <h1 style={{color: textColor}}>RED to GREEN</h1>

      <h1>CRUD Starts Here</h1>
      <div className='addTask'>
        <input onChange={handleTodoChange}/>
        {/* add task to todo list */}
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {todoList.map((task) => {
          return (
          <div style={{backgroundColor: task.completed ? "green" : "red"}}> 
            <h2>{task.taskName}</h2>
            <button onClick={() => deleteTask(task.id)}> X </button>
            <button onClick={() => completeTask(task.id)}> Complete</button>
          </div>
          );
        })}
      </div>
    </div>
  );

}


export default App;
