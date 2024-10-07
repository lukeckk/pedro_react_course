import { useContext } from "react";
import { AppContext } from "../App2";
import { useQuery } from '@tanstack/react-query'
import Axios from "axios"

export const Home = (props) => {

  // useQuery example to utilize the data fetched using axios
  // :catData can be added after data to be more obvios
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  // useContext retrieves the data from the provider
  const {username} = useContext(AppContext); 

  // if the website is leading
  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>Error encountered!</h1>
  }

  
  return (
    <div>
    <h1>THIS IS THE HOME PAGE and the user is :{username}</h1>
    <h1>This is the result of useQuery: {data.fact}</h1>
    <button onClick={refetch}>Refetch Data</button>
    </div>
  );

}