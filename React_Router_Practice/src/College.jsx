import { Link, NavLink, Outlet } from "react-router";

export default function College(){
    return (
        <>
       <div className="college" style={{textAlign:"center"}}>
         <h1 >College</h1>
        <NavLink className="link" to="department" >Department</NavLink>
        <NavLink className="link" to="college_details" >College_Details</NavLink>
        <NavLink className="link" to="student" >Student</NavLink>
        <NavLink  to="/" >Go to Home </NavLink>

        
        
        <Outlet/>
       </div>
        </>
    )
}