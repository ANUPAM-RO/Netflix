import React, { useEffect, useState } from "react";
import "./listitem.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPlay,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIzNzdhZWZiNDhmMGNlZDljZmM1Y2EiLCJ1c2VybmFtZSI6IkFudXBhbSBSb3kiLCJlbWFpbCI6ImFudXBhbXJveTU3NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQyUTZWMlVFYmRZeXIuaUQyeEJNanp1WFFzNHd6T0Y5RnZWelBmSTU0aUZGTnFGTGR5M3pjVyIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjp0cnVlLCJ0b2tlbnMiOltdLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJfX3YiOjAsImlhdCI6MTY0Njg0MjUzMn0.kG7yq84Vx5WeZv7fcjWehGq8aqVFNo5yv1bH7-ThFCo",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay loop />
            <div className="itemInfo">
              <div className="icons">
                <FontAwesomeIcon className="icon" icon={faPlay} />
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                <FontAwesomeIcon className="icon" icon={faThumbsDown} />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
