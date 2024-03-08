import { useNavigate } from "react-router-dom"

const Registrasi = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>INI HALAMAN REGISTRASI</h1>
            <button onClick={() => navigate('/')} >Home</button>
            <button onClick={() => navigate('/login')} >Login</button>
        </>
    )
}
export default Registrasi