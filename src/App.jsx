import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Registrasi from "./pages/registrasi";
import AllData from "./pages/AllData";
import UpdateData from "./pages/UpdateData";
import Navbar from "./components/navbar";
import { Movies } from "./components/Movie";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieHome from "./components/MovieHome";
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/movie");
    const datas = response.data.data.data;
    return datas;
  };

  const handleRefreshList = async () => {
    const data = await getData();
    setMovies(data);
  };

  useEffect(() => {
    getData().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Home movies={movies}>
                <MovieHome movies={movies} />
              </Home>
            </Navbar>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registrasi />} />

        <Route
          path="/updatedata"
          element={
            <Navbar>
              <UpdateData />
            </Navbar>
          }
        />

        <Route
          path="/alldata"
          element={
            <Navbar>
              <AllData onRefresh={handleRefreshList}>
                <Movies
                  movies={movies}
                  setMovie={setMovies}
                  onRefresh={handleRefreshList}
                />
              </AllData>
            </Navbar>
          }
        />
      </Routes>
    </Router>
  );
}
