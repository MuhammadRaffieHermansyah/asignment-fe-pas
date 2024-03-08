import axios from "axios";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState , useEffect } from "react"; 

export const Movies = ({movie , setMovie}) => {

    const [show , setShow] = useState(false);

    const modalShow = () => setShow(true);
    const modalClose = () => setShow(false);
    // useEffect(() => {
    //     console.log(movie)
    // } , [])

    return movie.map((movie , i) => {
        return (
            <>
            <tr>
                <td>{i += 1}</td>
                <td>{movie.name}</td>
                <td>{movie.duration}</td>
                <td>
                    <Button variant="primary" onClick={modalShow}>
                        Detail
                    </Button>
                    <Button className="mx-3" variant="warning" onClick={modalShow}>
                        Edit
                    </Button>
                    <Button variant="danger" onClick={
                        () => {
                            const id = movie.id
                            axios.delete('http://127.0.0.1:8000/api/movie/' + id)
                            .then(() => {
                                console.log(movie)
                            })
                        }
                    }>
                        Delete
                    </Button>
                </td>
            </tr>

            {/* <FormStore show={show} onHide={modalClose} data={}/> */}

            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={modalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={modalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    })
}