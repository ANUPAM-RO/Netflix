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
    let isMounted = true;
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
           headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        if (isMounted) {
           setMovie(res.data);
        } 
       
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
     return (() => {
      isMounted = false;
    })
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }} >
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src = {movie?.imgSm} alt="" />
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
