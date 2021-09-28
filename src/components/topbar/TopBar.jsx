import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="topleft"><Link className="link" to="/">Blogs<sup>specialists</sup></Link></div>
            <div className="topcenter">
            {
                user ? (
                    <h2>Username</h2>
                ): (
                    <ul>
                    <li className="topList"><Link className="link" to="/login">Login</Link></li>
                    <li className="topList"><Link className="link" to="/register">Register</Link></li>
                    </ul>
                )
            }    
            </div>
            <div className="topright" ><Link className="link" to="/" onClick={handleLogout}>Log out</Link></div>
        </div>
    )
}
