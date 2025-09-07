import { forwardRef } from "react"

 const User =(props)=>{
  return(
    <>
    <input type="text" ref={props.ref}></input>
    <button onClick={props.handleClick}>Click Me</button>
    </>
  )  
 }

 export default User;