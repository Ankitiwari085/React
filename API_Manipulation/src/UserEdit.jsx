import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function UserEdit(){
    const {id}=useParams();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        getUserData();
    },[id]);
    const getUserData=async()=>{
        const url=`http://localhost:3000/users/${id}`;
        let response=await fetch(url);
        response=await response.json();
        setName(response.name);
        setEmail(response.email);   
    }
    const updateUserdata=async()=>{
        const url=`http://localhost:3000/users/${id}`;
        let response=await fetch(url,{
            method:"PUT",
            body:JSON.stringify({name,email})
        });
        response=await response.json();
        if(response){
            alert("User Updated Successfully");
            navigate("/");
        }
    }
    return (
        <>
        <h2>Edit User</h2>
        <div style={{textAlign:"center"}}>
            <input type="text" value={name}onChange={(e)=>setName(e.target.value)} name="name"/><br/><br/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/><br/><br/> 
          <button onClick={updateUserdata}>Update User</button>
        </div>

        </>
    )
}