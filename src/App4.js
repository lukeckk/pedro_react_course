import React from 'react'
import "./App.css"
import { Cat, useToggle } from './customHook';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App4() {

  // exmple for custom hook
  const[isVisible, toggle] = useToggle();
  // example of reusing custom hook
  const[isVisible2, toggle2] = useToggle();

  // Example 2 for cat in customHook
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className='App'>
      <button onClick={toggle}> {isVisible ? "Hide" : "Show"} </button>
      {isVisible && <h1>Hidden text</h1>}
      
      {/* // example of reusing custom hook */}
      <button onClick={toggle2}> {isVisible2 ? "Hide" : "Show"} </button>
      {isVisible2 && <h1>Hidden text</h1>}

      {/* // Example 2 for cat in customHook */}
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>


    </div>
  );
}

export default App4