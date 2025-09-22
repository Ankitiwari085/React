import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to={'/'}>Home</Link><br/><br/>
    <Link to={'/about'}>About</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
