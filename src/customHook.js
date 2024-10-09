import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGetCat } from './useGetCat';

// Example of custom hook (encapsulating all different hooks into one function and be called wherever needed to make code cleaner and more reusable )

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((prev) => !prev)
  }

  // returning data as an arrayj
  return [state,toggle]
};

// Example 2 of custom hook to fetch data using React Query from useGetCat
export const Cat = () => {
  const{catData, isCatLoading, refetchData} = useGetCat()
  if (isCatLoading) return <h1>loading...</h1>;
  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{catData?.fact}</h1>
    </div>
  );
};

