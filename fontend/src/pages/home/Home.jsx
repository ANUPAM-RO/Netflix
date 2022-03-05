import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import React, { useEffect, useState } from 'react';
import Featured from "../../components/feartued/Featured";
import List from "../../components/list/List";
import axios from "axios"

const Home = ({ type }) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(()=>{
    const getRandomLists = async () =>{
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}&${genre ? "genre=" + genre : ""}`,
          {
            headers: {
              token: 
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyZmIzMjU3YjFmM2YzZGFlNzY5OTAiLCJ1c2VybmFtZSI6IlBpeWFsaSBSb3kiLCJlbWFpbCI6InBpeWFsaTM0NkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQvMlJ3VFNBeDNHYUxhUDdrQ1RzcDYuS3J1MW50anJ5RTNFbjhDY0JMczFRZFNXVVpIcjA2bSIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjpmYWxzZSwidG9rZW5zIjpbXSwiY3JlYXRlZEF0IjoiMjAyMi0wMy0wNVQwNTo1NDo1OC45MTVaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0wNVQwNTo1NDo1OC45MTVaIiwiX192IjowLCJpYXQiOjE2NDY0NjIyMzksImV4cCI6MTY0NjQ2NTgzOX0.KJVnLiHmqlQdYA_mIPWLVrWvFjG1qi7MJ44hHhx-PPk"
            }
          }
          );
          console.log(res)
          setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists();
  },[type, genre]);
  return (
  <div className="home">
     <Navbar/>
    <Featured type="Series"/>
     <List/>
     <List/>
     <List/>
     <List/>
  </div>
  );
}

export default Home;
