import React, { useContext, useEffect, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import "./newList.css";
import storage from "../../../firebase";
import { createMovie, getMovies } from "../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { ListContext } from "../../../context/listContext/ListContext";
import { createList } from "../../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";
const NewList = () => {
  const [list, setList] = useState(null);
  const history = useHistory()
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  

  useEffect(() => {
    getMovies(dispatchMovie);
  },[dispatchMovie])
  const handelChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  const handleSelect = (e) => {
    e.preventDefault();
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };
  console.log(list);
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New List</h1>
      <div className="newProductItemList">
        <form className="newProductForm">
          <div className="newProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="popular Movies"
              name="title"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Type</label>
            <select name="type" onChange={handelChange} >
              <option>Type</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              </select>
          </div>
      <div className="newProductItem">
            <label>Content</label>
            <select multiple name="content" onChange={handleSelect} >
            {movies.map((movie) => (
              <option key={movie._id} value= {movie._id}>{movie.title }</option>
              
            ))}
          </select>
          </div>
        
          <button className="newProductCreate" onClick={handleSubmit}>
            Create
          </button>
          </form>
        </div>
    </div>
  );
};

export default NewList;
