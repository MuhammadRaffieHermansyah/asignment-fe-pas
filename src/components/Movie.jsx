import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { redirect } from "react-router-dom";
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

  return (
    <>
      {movies.map((movieItem, i) => {
        return (
          <tr key={movieItem.id}>
            <td>{(i += 1)}</td>
            <td>{movieItem.name}</td>
            <td>{movieItem.duration}</td>
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
                onClick={async () => {
                  const id = movieItem.id;
                  axios
                    .delete("http://127.0.0.1:8000/api/movie/" + id)
                    .then(() => {
                      return redirect("/alldata");
                    });
                }}
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
