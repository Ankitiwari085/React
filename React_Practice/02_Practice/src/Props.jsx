import { use, useState } from "react";
import College from "./College";
import Student from "./Student";
export default function Props(){
    let student1 ={
        name:"Ankit TIwari",
        age:20,
        email:"ankit@gmail.com"
    }
     
    let student2 ={
        name:"Rahul Sharma",
        age:22,
        email:"rahul@gmail.com"
    }
    
    const[college,setCollege]=useState("");
    return(
        <>
         <h1>Props</h1>
         <button onClick={()=>{setCollege("ABC")}}>Click To See College</button>
           {college ? <College name={college}/>:
       <College name={"NONE"}/> }
        <Student student={student1}/>
        <Student student={student2} color="lightblue"/>
     
        </>
    )
};