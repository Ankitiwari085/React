import './App.css'
import UserList from "./UserList"
import { NavLink, Route, Routes } from "react-router"
import UserAdd from "./UserAdd"
import UserEdit from "./UserEdit"
function App() {

  return (
    <>
      <h1> API Manipilation Using JSON Server</h1>
     <div>
      <ul>
        <li><NavLink to="/">User List</NavLink></li>
        <li><NavLink to="/add">Add User</NavLink></li>
      </ul>
     </div>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
    </>
  )
}

export default App
