import { useState } from "react";

function Object(){
    const[data,setData]=useState({
        "name":"Ankit Tiwari",
        "age":25,
        "address":{
            "city":"Delhi",
            "country":"India"
        }
    })
    const handleName=(name)=>{
        data.name=name;
        setData({...data});
    }
     const handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}});
     }
    return (
        <>
        <h2>Updating the Object in the UseState</h2>
      <label>
        Update Name :
          <input type="text" placeholder="Enter the name" onChange={(e)=>handleName(e.target.value)} /> 
      </label>
        <br/><br/>
              <label>
        Update City :
          <input type="text" placeholder="Enter the City" onChange={(e)=>handleCity(e.target.value)} /> 
      </label>
        <hr/>
        <h3>Name :{data.name}</h3>
        <h3>Age :{data.age}</h3>
        <h3>City :{data.address.city}</h3>
        <h3>Country :{data.address.country}</h3>
        </>
    )
}

export default Object;

export function  Array(){
     const[data,setData]=useState(["Amit", "Jay","Pratik"]);

       const[detailsData,setdetailsData]=useState([
        {"name":"Amit", "age":25},
        {"name":"Ankit", "age":26},
        {"name":"Prince", "age":27}
    ])
    const handleName=(name)=>{
        data[data.length-1]=name;
        setData([...data]);
    }

     const handleAge=(age)=>{
      detailsData[detailsData.length-1].age=age;
      setdetailsData([...detailsData]);
        
    }
    
    return (
        <>
        <hr/><hr/>
        <h2>Updating the Array in the UseState</h2>
      <label>
        Update Last Name :
          <input type="text" placeholder="Update the last name" onChange={(e)=>handleName(e.target.value)} /> 
      </label>
      {
        data.map((name,index)=>(
          <h3 key={index}>{name}</h3>
        ))
      }
        <br/><br/>
        <hr/>
              <label>
        Update Age :
          <input type="text" placeholder="Enter the City" onChange={(e)=>handleAge(e.target.value)} /> 
      </label>
      
       {
        detailsData.map((data,index)=>(
          <h3 key={index}>Name : {data.name} , Age : {data.age}</h3>
        ))
      }
        <hr/>
       
        </>
    )
}