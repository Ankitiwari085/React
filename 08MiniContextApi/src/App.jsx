import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./Components/Profile"
import Login from "./Components/Login"

function App() {
  

  return (
    <UserContextProvider>
      <div style={{ textAlign: 'center', backgroundColor: 'green', padding: '30px', color: 'black' }} >
        <h2>Welcome To React-Context-Api</h2>  
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
