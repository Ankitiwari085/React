import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4  rounded-xl mb-5'> TailWind CSS</h1>
    <Card title="Java Devloper" username="Sonika Priya"/>
    <Card title="React Devloper" username="Priyanka"/>
    <Card/>
    </>
  )
}

export default App
