import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5 

  let [counter, setcounter] = useState(15)

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20 ){
      setcounter((previousCount) => previousCount + 1 )
      setcounter((previousCount) => previousCount + 1 )
      setcounter((previousCount) => previousCount + 1 )
      setcounter((previousCount) => previousCount + 1 )
    }
    
    // console.log("value added", counter);
  }
  const removeValue = () => {
    if(counter > 0){
      setcounter(counter - 1)
    }
    
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value</button>
     <br />
     <button
     onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
