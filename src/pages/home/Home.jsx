import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import React, { useEffect, useState } from 'react';
import Featured from "../../components/feartued/Featured";
import List from "../../components/list/List"

const Home = ({ type }) => {

  const [lists, setLists] = useState([]);

  useEffect(()=>{
    const getRandomLists = async () =>{
      try {
        
      } catch (error) {
        console.log(error)
      }
    }
  })
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
