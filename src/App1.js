import React, { useEffect, useState } from 'react'
import './App.css';
import Axios from "axios"



function App1() {

  // EXAMPLE 1

  // exmple of fetching API data usiing js function
  // fetch("https://catfact.ninja/fact")
  // .then((respond) => respond.json())
  // .then((data) => {
  //   console.log(data)
  // });

  // example of fetching API using AXIOS
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact();
  }, []);

  // function for generate cat fact button
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((respond) => {
      setCatFact(respond.data.fact);
    })
  }
  
  // EXAMPLE 2
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  // const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((respond) => {
      setPredictedAge(respond.data);
      // setPredictedAge(respond.data.name);
    })
  }

  return (
    <div className="App">
    <h1>Example 1</h1>
    <button onClick={fetchCatFact}>Generate Cat Fact</button>
    <p>{catFact}</p>

    <h1>Example 2</h1>
    <input placeholder='Enter your name' onChange={(event) => {
      setName(event.target.value);
      }} />
    <button onClick={fetchData}>Predict Age</button>
    <h3>Name: {predictedAge?.name}</h3>
    <h3>Predicted Age: {predictedAge?.age}</h3>
    <h3>Count: {predictedAge?.count}</h3>
    </div>
  )
}

export default App1