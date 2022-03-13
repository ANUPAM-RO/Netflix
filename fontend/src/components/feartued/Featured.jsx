import React, { useEffect , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import "./featured.scss";
import axios from 'axios';
const Featured = ({type , setGenre}) => {
  const [content, setContent] = useState({});

  useEffect(() => {
     let isMounted = true;
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
         if (isMounted) {
            setContent(res.data[0]);
        }
       
      } catch (error) {
        console.log(error)
  
      }
    };
    getRandomContent();
     return (() => {
      isMounted = false;
    })
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) =>setGenre(e.target.value)}>
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
        <img src={content.img} alt=""/>
        <div className="info">
            <img src={content.imgTitle} alt="" />
        <span className='desc'>
            {content.desc}
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