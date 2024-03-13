import { useNavigate } from "react-router-dom";
import "../CSS/login.css";

const Registrasi = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Login</h2>
      <form action="#">
        <label htmlFor="username">Email</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Register</button>
      </form>
      <a
        href=""
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </a>
    </div>
  );
};
export default Registrasi;
