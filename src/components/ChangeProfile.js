import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App2"; 

// exmaple for useContext to show how it can be used to update the username created in App2.js

export const ChangeProfile = (props) => {
  // useContext retrieves "setUsername" function from App2.js 
  const {setUsername} = useContext(AppContext);  

  const[newUsername, setNewUsername] = useState("");

  return (
  <div>
    <input onChange= {(event) => {
      setNewUsername(event.target.value);
    }} 
    />
    <button onClick={() => {setUsername(newUsername)}}>Change username</button>
  </div>
  )
};