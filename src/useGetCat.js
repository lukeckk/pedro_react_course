import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// example for customHook to fetch cat data
// to seperate that this is used for fetching data, and Cat function in the customHook is used for displaying

export const useGetCat = () => {
  const { data: catData, isLoading: isCatLoading, isError, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact");
      return response.data;
    },
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  }

  return {catData, refetchData, isCatLoading};
};