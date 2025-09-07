import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Test from './Test1'
import Fruit from './StateTest'
import Props from './Props'
import Input from './Input'
import Table from './LoopWithMap'
import ClockCall from './ClockCall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <div>
      <h1>Counting the number of clicks on the button Click</h1>
      <button onClick={()=>{setCount(count+1)}}>Click Times :{count}</button>
     </div> */}
     {/* <A/> */}
     {/* <Test/> */}
     {/* <Fruit/> */}
     {/* <Props/> */}
     {/* <Input/> */}
     {/* <Table/> */}
     <ClockCall/>
    </>
  )
}
export default App

export function A(){
  return (
    <h2>Ankit Kumar</h2>
  )
}
