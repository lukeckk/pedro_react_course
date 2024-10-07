import React, { useState, createContext  } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';

// createContext / useContext example
export const AppContext = createContext();

const App2 = () => {
  // const below is example for useContext hookg
  const [username, setUsername] = useState("LukeTech")

  return (
    <div className='App'>
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
    </div>
  );
}

export default App2;