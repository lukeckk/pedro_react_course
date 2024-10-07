import React, { useState, createContext  } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// createContext / useContext example
export const AppContext = createContext();

function App2() {
  // example of React Query 
  // queries (Read) or mutations(Create, Update, Delete)
  // {defaultOptions: { queries: refetchOnWindowFocus: false  )} can be added in the QueryCline to prevent the page from reloading itself after switching tab and coming back
  const client = new QueryClient();

  // const below is example for useContext hookg
  const [username, setUsername] = useState("LukeTech")

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        {/* createContext provided that will provide data to the elements included */}
        <AppContext.Provider value={{username, setUsername}}>
        {/* router dom example */}
          <Router>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />} />
                <Route path='/menu' element={<Menu />}/>
                <Route path='/contact' element={<Contact />}/>
                {/* error page */}
                <Route path='*' element={<h1>Error Page</h1>} />
              </Routes>
          </Router>
        </AppContext.Provider> 
      </QueryClientProvider>
    </div>
  );
}

export default App2;