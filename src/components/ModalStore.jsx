import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ModalStore = ({ show, onHide, onRefresh }) => {
  const [data, setData] = useState({
    name: null,
    duration: null,
    synopsis: null,
    year: null,
  });

  const navigate = useNavigate();

  //   state buat file yang dipilih
  const [file, setFile] = useState(null);

  //   handler buat on change inpput file
  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const [validation, setValidation] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check kalau gaada file stop
    if (!file) {
      alert("Please select image");
      return;
    }

    // FormData buat ngirim data filenya
    // gabisa kalau pakai objek {} biasa
    // objek biasa buat data string atau number doang
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("duration", data.duration);
    formData.append("synopsis", data.synopsis);
    formData.append("year", data.year);
    formData.append("image", file);

    axios
      .post("http://127.0.0.1:8000/api/movie", formData) // formdata jadi data yang dikirim
      .then(() => {
        onRefresh();
        return navigate("/alldata");
      })
      .catch((err) => {
        setValidation(err.response.data);
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Store</Modal.Title>
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
            />
            {validation.name && (
              <small className="text-danger">{validation.name[0]}</small>
            )}
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
            />
            {validation.duration && (
              <small className="text-danger">{validation.duration[0]}</small>
            )}
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
            />
            {validation.synopsis && (
              <small className="text-danger">{validation.synopsis[0]}</small>
            )}
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
            />
            {validation.year && (
              <small className="text-danger">{validation.year[0]}</small>
            )}
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
            />
            {validation.image && (
              <small className="text-danger">{validation.image[0]}</small>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={onHide}>
            Add Data
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
export default ModalStore;
