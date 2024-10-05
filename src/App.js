import './App.css';
import {Object} from './User'

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
    </div>
  );

}


export default App;
