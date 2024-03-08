// import { Children } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = ({children}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" onClick={() => navigate('/')}>PAS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/adddata')}>AddData</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/updatedata')}>UpdateData</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/alldata')}>AllData</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            <div className="body">
                {children}
            </div>
        </>
    )
}
export default Navbar