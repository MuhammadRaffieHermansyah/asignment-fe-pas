import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDetail = ({ show, onHide, movie }) => {

  const StyleImage = {
    width : "200px"
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Detail Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img style={StyleImage} src={`http://127.0.0.1:8000/storage/${movie?.image}` } alt="" />
        <h3>{movie?.name}</h3>
        <p>{movie?.synopsis}</p>
        <p>Duration : {movie?.duration} , Published in : {movie?.year}th</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalDetail;
