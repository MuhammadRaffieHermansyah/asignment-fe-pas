import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalDetail from "./ModalDetail";
import ModalUpdate from "./ModalUpdate";

export const Movies = ({ movies, setMovies, onRefresh }) => {
  
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [movie, setMovie] = useState({
    created_at: "",
    duration: 0,
    id: 0,
    image: "",
    name: "",
    synopsis: "",
    updated_at: "",
    year: 0,
  });

  const handleDelete = async (data) => {
      axios
        .delete(`http://127.0.0.1:8000/api/movie/${data.id}`)
        .then(() => {
          onRefresh();
        });
  }

  const modalShow = (data) => {
    setMovie(data);
    setShow(true);
  };

  const modalEditShow = (data) => {
    setMovie(data);
    setShowEdit(true);
  };

  const modalClose = () => setShow(false);
  const modalEditClose = () => setShowEdit(false);

  
  const secondsToTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {movies.map((movieItem, i) => {
        return (
          <tr key={movieItem.id}>
            <td>{(i += 1)}</td>
            <td>{movieItem.name}</td>
            <td>{secondsToTime(movieItem.duration)}</td>
            <td>{movieItem.year}</td>
            <td>
              <Button variant="primary" onClick={() => modalShow(movieItem)}>
                Detail
              </Button>
              <Button
                variant="warning"
                className="mx-3"
                onClick={() => modalEditShow(movieItem)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(movieItem)}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      })}
      <ModalDetail show={show} movie={movie} onHide={modalClose} />
      <ModalUpdate
        show={showEdit}
        movie={movie}
        onHide={modalEditClose}
        onRefresh={onRefresh}
      />
    </>
  );
};
