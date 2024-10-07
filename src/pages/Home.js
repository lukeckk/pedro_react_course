import { useContext } from "react";
import { AppContext } from "../App2";

export const Home = (props) => {
  // useContext retrieves the data from the provider
  const {username} = useContext(AppContext); 
  return <h1>THIS IS THE HOME PAGE and the user is :{username}</h1>;

}