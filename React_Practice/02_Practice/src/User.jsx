export default function User({ data }) {
    return (
        <>
            <div style={{
                border:"2px solid green",
                padding:"3px",
                margin:"3px",
                width:"300px",
                borderRadius:"5px",
                color:"darkgreen"
            }}>
                <h3>User Id : <span style={{color:"lightblue"}}>{data.id}</span></h3>
                <h3> User Name :<span style={{color:"lightblue"}}>{data.name}</span></h3>
                <h3>User Age :<span style={{color:"lightblue"}}>{data.age}</span></h3>
                <h3>User Email :<span style={{color:"lightblue"}}>{data.email}</span></h3>
            </div>
        </>
    )
};