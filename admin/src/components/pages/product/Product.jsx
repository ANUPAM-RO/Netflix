import React, { useContext, useState } from 'react'
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { MovieContext } from '../../../context/movieContext/MovieContext'
import { updateMovie } from '../../../context/movieContext/apiCalls'
const Product = () => {
  const [update, setUpdate] = useState(null);
    const location = useLocation();
  const movie = location.movie;
  const { dispatch } = useContext(MovieContext);
  const handelUpdate = (e) => {
    e.preventDefault();
    updateMovie(movie , dispatch)
  }
   const handelChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  }
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to="/newproduct" className='link'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={movie.img} className="productInfoImg" alt=''/>
                      <span className="productName">{ movie.title}</span>
                </div>
                <div className="productInfoButtom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                          <span className="productInfoValue">{ movie._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">genre:</span>
                          <span className="productInfoValue">{ movie.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">year:</span>
                          <span className="productInfoValue">{ movie.year}</span>
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
                    <label >Movie Title</label>
                      <input type="text" placeholder={movie.title} onChange={handelChange}/>
                    <label>Year</label>
                      <input type="text" placeholder={movie.year}  onChange={handelChange} />
                      <label>Genre</label>
                    <input type= "text" placeholder={movie.genre}  onChange={handelChange} />
                    <label>Limit</label>
                    <input type= "text" placeholder={movie.limit}  onChange={ handelChange} />
                    <label>Trailor</label>
                      <input type="file" placeholder={movie.trailor}  onChange={handelChange} />
                      <label>Video</label>
                    <input type= "file" placeholder={movie.video}  onChange={handelChange} />
                   
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={movie.img} alt="" className="productUploadImg" />
                        <label for="file">
                        <FontAwesomeIcon icon={faUpload} className="productUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/> 
                    </div>
                    <button className="productButton" onClick={handelUpdate}>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product