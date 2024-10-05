import './App.css';

function App() {
  const name = <h1>Luke</h1>;
  const age = <h2>25</h2>
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

  return (
    <div className="App">
    {combine}
    <GetNameComponent />
    <PropsComponent name="Julia" age={18} email="julia@gmail.com" />
    <PropsComponent name="Denise" age={28} email="denise@gmail.com" />
    </div>
  );



  
}


export default App;
