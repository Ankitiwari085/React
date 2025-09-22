import Student_Context from "./Student_Context";

export  default function Class_Context(){
    return (
        <>
       <div style={{background:"pink", padding:"10px"}}>
         <h1 >Class Component</h1>
        <Student_Context/>
       </div>
        </>
    )
}