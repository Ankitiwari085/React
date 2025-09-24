import { Link, useParams } from "react-router"

export default function UserDetails() {
    const parms = useParams();
    return (

        <>
            <div>
                <h1>UserDetails Page</h1>
                <h2>User Details Id :{parms.id}</h2>
                <h2>User Details Name :{parms.name}</h2>
                <Link to="/users">Back</Link>

            </div>

        </>
    )
}