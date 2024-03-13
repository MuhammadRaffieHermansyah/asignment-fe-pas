// import { Children } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = ({children}) => {
    const navigate = useNavigate();

    const NavbarStyle = {
        position : "fixed",
        top : "0",
        left : "0",
        width : "100%",
        right : "0",
        zIndex : "1",
        // marginBottom : "100px",
        padding : "10px 70px"
    }

    return (
        <>
            {/* <div className="Navbar" style={NavbarStyle}> */}
                <nav style={NavbarStyle} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => navigate('/')}>Moovie DB</a>
                    {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/adddata')}>AddData</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/alldata')}>AllData</a>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>
                </nav>
            {/* </div> */}
            <div className="body">
                {children}
            </div>
        </>
    )
}
export default Navbar