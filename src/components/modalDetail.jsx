import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDetail = ({ show, onHide, movie }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
