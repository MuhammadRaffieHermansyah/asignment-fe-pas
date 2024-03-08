import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>INI HALAMAN LOGIN</h1>
            <button onClick={() => navigate('/')} >Home</button>
            <button onClick={() => navigate('/registrasi')} >Registrasi</button>
        </>
    )
}
export default Login