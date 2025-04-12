import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  // useRef Hook 
  const passwordRef =useRef(null)

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current ?.select();
  passwordRef.current?.setSelectionRange(0,length);

  window.navigator.clipboard.writeText(password)
},[password])

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) string += "1234567890"
    if(charAllowed) string += "~!@#$%^&*"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random() * string.length +1)
      pass += string.charAt(char)
    }
      setPassword(pass)
  },
  [numberAllowed,charAllowed,length,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
              Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input  type="range" name="" id=""
              min={5}
              max={100}
              value={length} 
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    onChange={()=>{
                      setNumberAllowed((prev)=>!prev);
                    }}
                    />
                    <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id='characterInput'
                    onChange={()=>{
                      setCharAllowed((prev)=>!prev);
                    }}
                    />
                    <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
