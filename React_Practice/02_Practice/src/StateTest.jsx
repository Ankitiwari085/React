import { useState } from "react";


export default function Fruit(){
    const [fruit, setFruit]=useState("Apple");
const handleFruit =()=>{
    if(fruit == "Apple")
        setFruit("Banana");
    if(fruit == "Banana")
        setFruit("Apple"); 
}
const [count , setCount]= useState(0);
    return(
        <div>
            <h1>Fruit Set</h1>
            <button onClick={handleFruit}>{fruit}</button>
             <h1>Counter :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
             <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </div>
    )
}