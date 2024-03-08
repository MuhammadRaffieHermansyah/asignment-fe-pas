import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Registrasi from './pages/registrasi'
import AddData from './pages/AddData'
import AllData from './pages/AllData'
import UpdateData from './pages/UpdateData'
import Navbar from './components/navbar'
import { TableData } from './components/TableData'
import { Movies } from './components/Movie'
import { useState , useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [movie , setMovie] = useState([]);
    
  const getData = async () =>  {
      const response = await axios.get('http://127.0.0.1:8000/api/movie');
      const datas = response.data.data.data;
      return datas
  }
  
  useEffect(() => {
      getData().then(data => {
          setMovie(data)
      })
  } , [])

  // console.log(movie)

  const handleEdit = (i) => {
      axios.put('http://127.0.0.1:8000/api/movie/' + {i} , {i})
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
  }

  const handleDelete = () => {
      axios.delete('http://127.0.0.1:8000/api/movie/{i}')
          .then(data => {
              setMovie(data)
          })
  }


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
              <AddData setMovie={setMovie}/>
            </Navbar> } />

          <Route path="/updatedata" 
            element={ <Navbar>
              <UpdateData/>
            </Navbar> } />

          <Route path="/alldata" 
            element={ <Navbar>
              <AllData>
                {/* <TableData> */}
                  <Movies  movie={movie} setMovie={setMovie}/>
                {/* </TableData> */}
              </AllData>
            </Navbar> } />
        </Routes>
      </Router>
  )
}


