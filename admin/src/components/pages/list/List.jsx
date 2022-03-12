import React, { useContext, useState } from 'react'
import "./list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { updateMovie } from '../../../context/movieContext/apiCalls'
import { ListContext } from '../../../context/listContext/ListContext'
const List = () => {
  const [update, setUpdate] = useState(null);
    const location = useLocation();
  const list = location.list;
  const { dispatch } = useContext(ListContext);
  // const handelUpdate = (e) => {
  //   e.preventDefault();
  //   updateMovie(movie , dispatch)
  // }
  //  const handelChange = (e) => {
  //   const value = e.target.value;
  //   setUpdate({ ...update, [e.target.name]: value });
  // }
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">List</h1>
            <Link to="/newlist" className='link'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopRight">
                <div className="productInfoTop">
                      <span className="productName">{ list.title}</span>
                </div>
                <div className="productInfoButtom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                          <span className="productInfoValue">{ list._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">genre:</span>
                          <span className="productInfoValue">{ list.genre}</span>
                    </div>
                    
                    <div className="productInfoItem">
                        <span className="productInfoKey">type:</span>
                          <span className="productInfoValue">{list.type}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productButtom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label >List Title</label>
                      <input type="text" placeholder={list.title}/>
                      <label>Genre</label>
                    <input type= "text" placeholder={list.genre}  />
                    <label>Type</label>
                    <input type= "text" placeholder={list.type}  />
            
                </div>
                <div className="productFormRight">
        
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default List;