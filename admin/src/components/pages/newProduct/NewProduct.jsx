import React, { useContext, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import "./newproduct.css";
import storage from "../../../firebase";
import { createMovie } from "../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
const NewProduct = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [trailor, setTraior] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);
  const handelChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const storage = getStorage();
  const upload = (items) => {
    items.forEach((item) => {
      const filename = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("File available at", url);
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailor, label: "trailor" },
      { file: video, label: "video" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };
  console.log(movie);
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Movie</h1>
      <div className="newProductItemList">
        <form className="newProductForm">
          <div className="newProductItem">
            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="newProductItem">
            <label>Title Image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className="newProductItem">
            <label>Thumbnail Image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="newProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder=" Jhon Key"
              name="title"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Year</label>
            <input
              type="text"
              placeholder="year"
              name="year"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="genre"
              name="genre"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Duration</label>
            <input
              type="text"
              placeholder="duration"
              name="duration"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>Limit</label>
            <input
              type="text"
              placeholder="limit"
              name="limit"
              onChange={handelChange}
            />
          </div>
          <div className="newProductItem">
            <label>In Series?</label>
            <select name="inSeries" id="isSeries" onChange={handelChange}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="newProductItem">
            <label>Trailor</label>
            <input
              type="file"
              name="trailor"
              onChange={(e) => setTraior(e.target.files[0])}
            />
          </div>
          <div className="newProductItem">
            <label>Video</label>
            <input
              type="file"
              video="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
        </form>
      </div>
      <div className="button">
        {uploaded === 5 ? (
          <button className="newProductCreate" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="newProductCreate" onClick={handleUpload}>
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default NewProduct;
