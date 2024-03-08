import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ModalUpdate = ({ show, onHide, movie, onRefresh }) => {
  const [data, setData] = useState(movie);

  useEffect(() => {
    setData({
      ...movie,
      name: movie.name,
      duration: movie.duration,
      synopsis: movie.synopsis,
      year: movie.year,
    });
  }, [movie]);

  //   state buat file yang dipilih
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  //   handler buat on change inpput file
  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // FormData buat ngirim data filenya
    // gabisa kalau pakai objek {} biasa
    // objek biasa buat data string atau number doang
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("duration", data.duration);
    formData.append("synopsis", data.synopsis);
    formData.append("year", data.year);

    // const datas = formData.entries();

    // datas.forEach((data) => {
    //   console.log(data);
    // });

    // return;
    if (file) {
      formData.append("image", file);
    }

    axios
      .post(
        `http://127.0.0.1:8000/api/movie/${movie?.id}?_method=PUT`,
        formData
      ) // formdata jadi data yang dikirim
      .then(() => {
        onRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className="col-md-6">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              className="form-control"
              id="Name"
              value={data.name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Duration" className="form-label">
              Duration
            </label>
            <input
              type="number"
              name="duration"
              onChange={handleInput}
              className="form-control"
              id="Duration"
              value={data.duration}
            />
          </div>
          <div className="col-12">
            <label htmlFor="Synopsis" className="form-label">
              Synopsis
            </label>
            <input
              type="text"
              name="synopsis"
              onChange={handleInput}
              className="form-control"
              id="Synopsis"
              value={data.synopsis}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Year
            </label>
            <input
              type="number"
              name="year"
              onChange={handleInput}
              className="form-control"
              id="inputEmail4"
              value={data.year}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChangeFile} // handler change file dipasang disini
              className="form-control"
              id="inputPassword4"
              //   value={file}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
export default ModalUpdate;
