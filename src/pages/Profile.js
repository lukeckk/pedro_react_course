import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App2"; 

export const Profile = (props) => {
  // useContext retrieves the data from the provider
  const {username} = useContext(AppContext);  

  return (
  <div>
    <h1>Profile user is : {username}</h1> 
    <ChangeProfile setUsername={props.setUsername}/>
  </div>
  );
};