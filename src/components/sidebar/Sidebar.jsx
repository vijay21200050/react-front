import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
      };
      getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" 
                src="https://cdn.w600.comps.canstockphoto.com/acronym-of-aam-for-all-about-me-stock-photos_csp11432733.jpg"
                />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto provident aut harum, soluta ipsa ut temporibus adipisci impedit a? Aspernatur beatae esse amet sed nulla rem mollitia saepe et!</p>
            </div>
            <div className="sidebaritem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
