// import { Children } from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const navigate = useNavigate();

  const NavbarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    right: "0",
    zIndex: "1",
    padding: "10px 70px",
  };

  const [user, setUser] = useState({});
  
  const getData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post("http://127.0.0.1:8000/api/auth/me") 
      .then((res) => {
        setUser(res.data);
      });
    };
    
    const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getData();
  }, [navigate, token, user.role]);

  const handleLogout = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post("http://127.0.0.1:8000/api/auth/logout")
      .then(() => {
        localStorage.removeItem("token");
        return navigate("/login");
      });
  };
  const a = {
    cursor : "pointer",
    color : "rgb(69, 69, 69)"
  }
  return (
    <>
      <nav
        style={NavbarStyle}
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate("/")}>
            Moovie DB
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                style={a}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            { user.role == 'admin' && (
            <li className="nav-item">
              <a className="nav-link" style={a} onClick={() => navigate("/alldata")}>
                AllData
              </a>
            </li>
            )
            }
            <li className="nav-item">
              <a className="nav-link" style={a} onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="body">{children}</div>
    </>
  );
};
export default Navbar;
