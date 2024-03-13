import { useNavigate } from "react-router-dom"
import '../CSS/login.css'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
        <h2>Login</h2>
        <form action="#">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit">Login</button>
        </form>
        <a href="" onClick={() => {navigate("/register")}}>Register</a>
        </div>
    )
}
export default Login