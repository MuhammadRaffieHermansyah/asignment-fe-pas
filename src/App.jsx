import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Registrasi from './pages/registrasi'
import AddData from './pages/AddData'
import AllData from './pages/AllData'
import UpdateData from './pages/UpdateData'
import Navbar from './components/navbar'
import { Movies } from './components/Movie'
import { useState , useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [movies , setMovies] = useState([]);
    
  const getData = async () =>  {
      const response = await axios.get('http://127.0.0.1:8000/api/movie');
      const datas = response.data.data.data;
      return datas
  }
  
  useEffect(() => {
      getData().then(data => {
          setMovies(data)
      })
  } , [])

  // console.log(movie)

  // const handleEdit = () => {
  //     axios.put('http://127.0.0.1:8000/api/movie/' + {i} , {i})
  //         .then(res => {
  //             console.log(res)
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
  // }

  // const handleDelete = () => {
  //     axios.delete('http://127.0.0.1:8000/api/movie/{i}')
  //         .then(data => {
  //             setMovies(data)
  //         })
  // }

  return (
      <Router>
        <Routes>
          <Route path="/" 
            element={ <Navbar>
              <Home/>
            </Navbar> } />

          <Route path="/login" 
            element={ <Navbar>
              <Login/>
            </Navbar> } />

          <Route path="/registrasi" 
            element={ <Navbar>
                <Registrasi/>
            </Navbar> } />

          <Route path="/adddata" 
            element={ <Navbar>
              <AddData/>
            </Navbar> } />

          <Route path="/updatedata" 
            element={ <Navbar>
              <UpdateData/>
            </Navbar> } />

          <Route path="/alldata" 
            element={ <Navbar>
              <AllData>
                  <Movies  movies={movies} setMovie={setMovies}/>
              </AllData>
            </Navbar> } />
        </Routes>
      </Router>
  )
}


