import React, { useEffect , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import "./featured.scss";
import axios from 'axios';
const Featured = ({type}) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIzNzdhZWZiNDhmMGNlZDljZmM1Y2EiLCJ1c2VybmFtZSI6IkFudXBhbSBSb3kiLCJlbWFpbCI6ImFudXBhbXJveTU3NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQyUTZWMlVFYmRZeXIuaUQyeEJNanp1WFFzNHd6T0Y5RnZWelBmSTU0aUZGTnFGTGR5M3pjVyIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjp0cnVlLCJ0b2tlbnMiOltdLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJfX3YiOjAsImlhdCI6MTY0Njk3OTg3MH0.uxvziYwJHBYKO5EfuqC8rRxTDc-52FSPmSX0oCMKU1A",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error)
  
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
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