import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 let [counter ,setcounter]=useState(0)
  
  const addValue=()=>{
    if(counter<10){
      setcounter(counter+1)
      console.log(`Value Added  :${counter}`)
    }
    else{
      console.log("Counter Reached to its Maximum value")
    }
  }


  
  const removeValue=()=>{
    if(counter>=1){
      setcounter(counter-1)
      console.log(`Value Removed :${counter}`)
    }
    else{
      console.log("Counter Reached to its Minimal value")
    }
  }


  return (
    <>
      <h1>Counter Check App</h1>
      <h3>Counter : {counter}</h3>
      <button
      onClick={addValue}
      >Add Value </button>
      <br></br>
<button
      onClick={removeValue}
      >Remove Value </button>
    </>
  )
}

export default App
