import {useNavigate} from 'react-router-dom'
import Navbar from '../components/navbar'

const Home = () => {
    const navigate = useNavigate()
    return(
        <>
            {/* <Navbar/> */}
            <h1>INI HALAMAN HOME</h1>
            <button onClick={() => navigate('/login')} >Login</button>
            <button onClick={() => navigate('/registrasi')} >Registrasi</button>
        </>
    )
}
export default Home