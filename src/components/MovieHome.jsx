import { useState } from "react";
import ModalTonton from "./ModalTonton";

const MovieHome = ({ movies }) => {
  const CardStyle = {
    width: "fit-content",
    height: "400px",
    padding: "0px 0px 25px 0px",
    margin: "0px 0px 120px 0px",
    borderRadius: "15px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",

  };
  const imgStyle = {
    width: "280px",
    height: "250px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

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

  const [showTonton, setShowTonton] = useState(false);

  const modalTontonShow = (data) => {
    setMovie(data);
    setShowTonton(true);
  };

  const modalTontonClose = () => setShowTonton(false);

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
      {movies.map((movieItem) => {
        return (
          <div className="col" key={movieItem.id}>
            <div className="card" style={CardStyle}>
              <img
                style={imgStyle}
                className="card-img-top"
                src={`http://127.0.0.1:8000/storage/${movieItem.image}`}
                alt={movieItem.name}
              />
              <div className="card-body">
                <h5 className="card-title">{movieItem.name}</h5>
                {/* <p className="card-text">{movieItem.synopsis}</p> */}
                <p className="card-text">
                  Duration : {secondsToTime(movieItem.duration)} , Year : {movieItem.year}
                </p>
                <a
                  className="btn btn-danger px-5"
                  onClick={() => {modalTontonShow(movieItem)}}>
                  Tonton
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <ModalTonton
        show={showTonton}
        movie={movie}
        onHide={modalTontonClose}
      />
    </>
  );
};
export default MovieHome;
