import { Link, Outlet } from "react-router"
import './Navbar.css';
import birdLogo from "./Image/bird_2.jpg";
export default function Navbar() {
    return (
        <>
            <div>
                <div className="nav">
                    <div className="logo" >
                        <Link className="link" to={'/'}>
                            <img className="image" src={birdLogo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="link">
                            <li>
                                <Link className="link" to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link className="link" to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link className="link" to={'user/login'}>Login</Link>
                            </li>
                            <li>
                                <Link className="link" to={'/college'}>College</Link>
                            </li>
                            <li>
                                <Link className="link" to={'/users'}>User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}