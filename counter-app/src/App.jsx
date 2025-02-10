import { useState } from 'react'

import './App.css'

function App() {
 // const [count, setCount] = useState(0)

 let [counter , setCounter]=useState(0)

 // let counter = 5;

  const addValue =()=>{
    console.log("clciked",counter +1);
   counter=counter+1;

    setCounter(counter)
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      
     <h1>Counter app in react</h1>
    
    <h3>Counter value : {counter} </h3>
    <button onClick={addValue}>Add value</button>
    <br></br>
    <br></br>
    <button onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
