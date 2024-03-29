import { useNavigate } from "react-router-dom";
import "../CSS/login.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [validation , setValidation] = useState([]);

  const navigate = useNavigate();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
        navigate('/');
    }
  },[navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    axios
      .post('http://127.0.0.1:8000/api/auth/login' , formData) 
      .then((res) => {
        localStorage.setItem('token' , res.data.access_token);
        console.log(res);
        return navigate('/');
      })
      .catch((err) => {
        setValidation(err.response.data);
      });
  };


  return (
    <>
      
    <div className="container">
        {validation.error && (
            <div className="alert alert-danger" role="alert">
            {validation.error}
          </div>
        )}
      <h2>Login</h2>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input type="text" id="email" onChange={handleInput} name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleInput} id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <a href="" onClick={() =>navigate('/register')}>Register</a>
    </div>
    {/* <Footer /> */}
    </>
  );
};
export default Login;
