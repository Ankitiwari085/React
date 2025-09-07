import { useState } from "react";

  function  DerivedState(){
    const[users,setUsers]= useState([]);
    const[user,setUser]=useState("");
    const handleButton=()=>{
        setUsers([...users,user]);
    //   console.log(users);
    }

    // Derived States are declared without using the useState hook;
    const totalUsers=users.length;
    const lastUser=users[users.length-1];
    const uniqueUsers= [...new Set(users)].length;
    return(
        <>
        <h2>Total Users : {totalUsers}</h2>
        <h2>Last User : {lastUser}</h2>
        <h2>Unique Users : {uniqueUsers}</h2>
        <input type="text"  onChange={(e)=>setUser(e.target.value)}placeholder="Add the User" />
        <button onClick={handleButton}>Add User</button>
        {
            users.map((item, index)=>(
                <h4 key={index}>{item}</h4>
            ))
        }
        </>
    )
  }

  export default DerivedState;