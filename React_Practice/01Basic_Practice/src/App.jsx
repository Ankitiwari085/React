import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import User from './TestForwardRef'
import Test from './TestUseFormStatus'
import Transition from './TestUseTransition'
import DerivedState from './TestDerivedState'
import Object, { Array } from './Object_in_State'

function App() {
  const handleRef=useRef();
  const handleClick=()=>{
    handleRef.current.value="Ankit Tiwari"
    handleRef.current.focus();
  }


  return (
    <>
      {/* <Transition/> */}
      {/* <Test/>
      <User handleClick={handleClick} ref={handleRef}/> */}
      {/* <DerivedState/> */}
      <Object/>
      <Array/>
    </>
  )
}

export default App
