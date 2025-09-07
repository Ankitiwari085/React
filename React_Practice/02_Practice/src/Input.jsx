import { useState } from "react";

export default function Input(){
    const [value, setValue] = useState("Ankit Tiwari");
    const [skills, setSkills] = useState([]);
    const [gender, setGender]=useState("male");
    const [city, setCity]=useState("Delhi");
    const hadleCheckbox = (event)=>{
        if(event.target.checked){ 
            setSkills([...skills,event.target.value]);
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)]);
        }
        
    }
    return(
        <>
        <h1>This is Input Component</h1>
        Enter User: <input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
        <br/>
        <button onClick={()=>{setValue("")}}>Clear</button>
        <hr/>
        <h2>User : {value}</h2>
        <h1>Select the Skills</h1>
        <input type="checkbox" onChange={hadleCheckbox} id="java" value="java" />
        <label htmlFor="java">JAVA</label>
        <br/>
        <br/>
        <input type="checkbox" onChange={hadleCheckbox} id="Python" value="Python" />
        <label htmlFor="Python">Python</label>
        <br/>
        <br/>
        <input type="checkbox" onChange={hadleCheckbox} id="Ruby" value="Ruby" />
        <label htmlFor="Ruby">Ruby</label>
        <br/>
        <br/>
        <input type="checkbox" onChange={hadleCheckbox} id="css" value="css" />
        <label htmlFor="css">CSS</label>
        <br/>
        <br/>
        <hr/>   
        <h2>Skills : {skills.toString()}</h2>
        <hr/><hr/>
        <h2>Radio Practice</h2>
         <h3>Select Gender</h3>
        <input type="radio" name="gender" id="male" value="male" onChange={(event)=>{setGender(event.target.value)}} checked={gender=="male"} /> 
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" onChange={(event)=>{setGender(event.target.value)}} checked={gender == "female"} /> 
        <label htmlFor="female">Female</label>
        <h3>Selected Gender: {gender}</h3>
        <hr/><hr/>
        <h3>Select the City</h3>
        <select id="city"  onChange={(event)=>{setCity(event.target.value)}} defaultValue={city}>
            <option value="Delhi">Delhi</option >
            <option value="Mumbai">Mumbai</option >
            <option value="Pune">Pune</option>
            <option value="Noida">Noida</option>
        </select>
        <h3>Selected City: {city}</h3>
        </>
    )
}