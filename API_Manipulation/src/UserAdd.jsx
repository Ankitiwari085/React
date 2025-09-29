import {  useState } from "react"
import './App.css'
import { useNavigate } from "react-router";

function UserAdd() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
  const createUser=async()=>{
    const url="http://localhost:3000/users";
    let response=await fetch(url,{
      method:"POST",
      body:JSON.stringify({
        name,
        email
      })
    });
    response=await response.json();
    if(response){
      alert("User Added Successfully")
      setName("");
      setEmail("");
    }
    navigate("/");
  }
  return (
    <>
      <h2>Add User in the Users List</h2>
    <div style={{textAlign:"center"}}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter user name" name="name"/><br/><br/>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter user email" name="email"/><br/><br/> 
      <button onClick={createUser}>Add User</button>
    </div>
    </>
  )
}

export default UserAdd
