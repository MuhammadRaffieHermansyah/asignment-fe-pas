import { useState } from "react";
import axios from "axios";

const UpdateData = () => {
  const [data, setData] = useState({
    name: "",
    duration: "",
    synopsis: "",
    year: "",
    image: "",
  });

  const { state } = this.props.location;

  const handleInput = (input) => {
    setData({ ...data, [input.target.name]: input.target.value });
  };

  const handleSubmit = (btn) => {
    btn.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/movie/" + "", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(state);
  return (
    <>
      {/* <Navbar/> */}
      <form className="row g-3 p-5 mx-5" onSubmit={handleSubmit}>
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
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleInput}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12 mt-5">
          <button type="submit" className="btn btn-primary col-12">
            Update Data
          </button>
        </div>
      </form>
    </>
  );
};
export default UpdateData;
