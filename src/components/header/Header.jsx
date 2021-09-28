import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blogs</span>
            </div>
            <img className="headerImg" 
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
        </div>
    )
}
