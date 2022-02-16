import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import "./featured.scss";
const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div classname="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
           <option >Genre</option> 
           <option value="adventure">Adventure</option>
           <option value="comedy">Comedy</option>
           <option value="crime">Crime</option>
           <option value="fantasy">Fansaty</option>
           <option value="horror">Horror</option>
           <option value="action">Action</option>
           <option value="drama">Drama</option>
           <option value="romance">Romance</option>
           <option value="animation">Animation</option>
           <option value="historical">Historical</option>
           <option value="documentary">Documentary</option>
          </select>
          </div>
      )}
        <img src="https://wallpaperaccess.com/full/329583.jpg" alt=""/>
        <div className="info">
            <img src="https://linksind.net/doctor/featured.jpg" />
        <span className='desc'>
            Netflix is Movies website.
        </span>
        <div className="buttons">
            <button className="play">
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
            
            </button>
            <button className='more'>
            <FontAwesomeIcon icon={faInfo} />
            <span>Info</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Featured;