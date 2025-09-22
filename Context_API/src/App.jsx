import { useState } from 'react'
import Class_Context from './Class_Context'
import { SubjectContext } from './ContextData'

// import './App.css'

function App() {
 const [subject,setSubject]=useState("");

  return (
    <>
      <div style={{background:"yellow", padding:"10px"}}>
      <SubjectContext.Provider value={subject}>
     <h1 >Context API</h1>
     <select value={subject} onChange={(event)=>{setSubject(event.target.value)}}>
        <option value="Select Subject">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="Computer">Computer</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
     </select>
     <button onClick={()=>setSubject("")} > Clear Subject</button>
      <Class_Context/>
      </SubjectContext.Provider>
      </div>
    </>
  )
}

export default App
