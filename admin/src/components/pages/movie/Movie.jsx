import React, { useContext, useState } from "react";
import "./movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { updateMovie } from "../../../context/movieContext/apiCalls";
const Movie = () => {
  const [update, setUpdate] = useState({});
  const location = useLocation();
  const movie = location.movie;
  const { movies,dispatch } = useContext(MovieContext);
  const handleUpdate = () => {
    updateMovie(movie._id, movie, dispatch);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct" className="link">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} className="productInfoImg" alt="" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie.title}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder={movie.genre}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="file"
              placeholder={movie.trailer}
              onChange={handleChange}
            />
            <label>Video</label>
            <input
              type="file"
              placeholder={movie.video}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label for="file">
                <FontAwesomeIcon
                  icon={faUpload}
                  className="productUpdateIcon"
                />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <Link to="/movies" className="link">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
              
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
