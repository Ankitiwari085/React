export default function Student({student , color="pink"}){
    return (
        <>
       <div style={{color:color, border:"3px solid black"}}>
        <h2 >Student : {student.name}</h2>
        <h3 style={{color:color}}>Age: {student.age}</h3>
        <h3>Email: {student.email}</h3>
        </div>
         <hr/>
        {/* <h2>Student : {props}</h2> */}
        </>
    )
}