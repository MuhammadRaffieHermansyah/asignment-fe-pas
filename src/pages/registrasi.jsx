import { useNavigate } from "react-router-dom";
import "../CSS/login.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Registrasi = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [validation , setValidation] = useState([]);

  //   state buat file yang dipilih
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


    // FormData buat ngirim data filenya
    // gabisa kalau pakai objek {} biasa
    // objek biasa buat data string atau number doang
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    axios
      .post('http://127.0.0.1:8000/api/auth/register' , formData) // formdata jadi data yang dikirim
      .then(() => {
        return navigate('/login');
      })
      .catch((err) => {
        setValidation(err.response.data);
        console.log(err.response.data)
      });
  };



  return (
    <div className="container">
      <h2>Registrasi</h2>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleInput} name="name"  />
        {validation.name && (
          <small className="text-danger">{validation.name[0]}</small>
        )}
        <label htmlFor="username">Email</label>
        <input type="text" id="email" onChange={handleInput} name="email"/>
        {validation.name && (
          <small className="text-danger">{validation.email[0]}</small>
        )}
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleInput} id="password" name="password"  />
        {validation.name && (
          <small className="text-danger">{validation.name[0]}</small>
        )}
        <button type="submit">Register</button>
      </form>
      <a href="" onClick={() => navigate('/login')}>Login</a>
    </div>
  );
};
export default Registrasi;
