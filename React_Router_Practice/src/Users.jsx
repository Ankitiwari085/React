import { Link } from "react-router"

export default function Users() {
    const data = [
        { id: 1, "name": "Anil" },
        { id: 2, "name": "Sam" },
        { id: 3, "name": "Jhon" },
        { id: 4, "name": "Peter" },
        { id: 5, "name": "Paul" }
    ]
    return (
        <>
            <h1>Users Details with Id</h1>
            {
                data.map((item) => (
                    <div>
                        <h3>
                            <Link to={"/userdetails/" + item.id} >{item.name}</Link>
                        </h3>
                    </div>
                ))
            }
            <h1>Users Details with Id and Name in Url using optional Segment</h1>
            {
                data.map((item) => (
                    <div>
                        <h3>
                            <Link to={"/userdetails/" + item.id + "/" + item.name} >{item.name}</Link>
                        </h3>
                    </div>
                ))
            }
        </>
    )
}