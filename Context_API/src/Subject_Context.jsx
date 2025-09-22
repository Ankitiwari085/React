import { createContext } from "react"
import { SubjectContext } from "./ContextData"

export  default function Subject_Context(){
    const subject = createContext(SubjectContext);
    return (
        <>
        <h1 style={{background:"skyblue", padding:"10px"}}>Subject Component : {subject}</h1>
        </>
    )
}