import React from 'react'
import "./App.css"
import { Person } from './Person'

// Example of Typescript
function App5() {
  return (
    <div className='App'>
      <Person
        name="Luke"
        email="luke@gmail.com"
        age={27}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        />
    </div>
  );
}

export default App5