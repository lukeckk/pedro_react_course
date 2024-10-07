import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Home';
import { Menu } from './Menu';
import { Contact } from './Contact';
import { Navbar } from './Navbar';

// router dom example

const App2 = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          {/* homepage */}
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
          {/* error page */}
          <Route path='*' element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App2;