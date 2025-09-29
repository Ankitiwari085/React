import { useEffect, useState } from "react"
import './App.css'
import { useNavigate } from "react-router";
function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  async function getUsers() {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false)
  }

  async function deleteUser(id){
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url,{
      method:"DELETE"
    });
    response = await response.json();
    if(response){
      alert("User Deleted Successfully")
      getUsers();
    }
    
  }
  const editUser =(id)=>{
      navigate(`/edit/${id}`);
    }

  return (
    <>
      <div>
         <ul className="user-list-header">
            <li>Name</li>
            <li>email</li>
            <li>Actions</li>
           </ul>
        {
          !loading?
        userData.map((user,key)=>(
           <ul className="user-list" key={key}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li><button onClick={()=>deleteUser(user.id)}>Delete</button> <button onClick={()=>editUser(user.id)}>Edit</button></li>
           </ul>
           
        )):<h1> Data Loading</h1>
        }
      </div>
    </>
  )
}

export default UserList
