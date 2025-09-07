import User from "./User"

export default function Table(){
    let userDetails=[
        {
            id:1,
            name:"Ankit",
            age:20,
            email:"ankit@gmail.com"
        },
        {
            id:2,
            name:"Amit",
            age:28,
            email:"amit@gmail.com"
        },
        {
            id:3,
            name:"Ramu",
            age:30,
            email:"ramu@gmail.com"
        },
        {
            id:4,
            name:"Prince",
            age:19,
            email:"prince@gmail.com"
        },
        {
            id:5,
            name:"Roshan",
            age:23,
            email:"roshan@gmail.com"
        }
    ]
    return(
        <>
        <h1>Loop in JSX with Map Function</h1>
        <table style={{border:"2px solid green"}}>
            <thead >
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {
                userDetails.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
               
                )}
            </tbody>
        </table>
                {userDetails.map((user)=>(
                <div key={user.id}>
                     <User data={user}/>
                </div>
                ))}
        </>
    )
}