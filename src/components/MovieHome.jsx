const MovieHome = ({ movies }) => {
  return movies.map((movieItem) => {
    const CardStyle = {
      width: "280px",
      height: "400px",
      padding: "0px 0px 25px 0px",
      margin: "0px 0px 70px 0px",
      borderRadius: "15px",
    };
    return (
      <>
        <div className="col" key={movieItem.id}>
          <div className="card" style={CardStyle}>
            <img
              className="card-img-top"
              src={movieItem.image}
              alt={movieItem.name}
            />
            <div className="card-body">
              <h5 className="card-title">{movieItem.name}</h5>
              <p className="card-text">{movieItem.synopsis}</p>
              <p className="card-text">
                Duration : {movieItem.duration} , Year : {movieItem.year}
              </p>
              <a
                href="#"
                className="btn btn-danger px-5"
                onClick={() => {
                  alert("Hehe Coming Soon!");
                }}
              >
                Tonton
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default MovieHome;
