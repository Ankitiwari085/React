import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToggle from './useToggle'

function App() {
  const[value , toggleValue]=useToggle(true);
  const[data , setData]=useToggle(true);

  return (
    <>
    <button onClick={toggleValue}>Toggle Heading</button>
    <button onClick={()=>toggleValue(false)}>Hide Heading</button>
    <button onClick={()=>toggleValue(true)}>Show Heading</button>
     {
      value? <h1> Custom Hook in React JS </h1>:null
     }
     <hr/>
    <button onClick={setData}>Toggle Heading</button>
    <button onClick={()=>setData(false)}>Hide Heading</button>
    <button onClick={()=>setData(true)}>Show Heading</button>
     {
      data? <h1> Data Are Showing  </h1>:null
     }

    </>
  )
}

export default App
