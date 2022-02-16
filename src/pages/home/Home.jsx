import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import React from 'react';
import Featured from "../../components/feartued/Featured";
import List from "../../components/list/List"
const Home = () => {
  return (
  <div className="home">
     <Navbar/>
    <Featured></Featured>
     <List/>
     <List/>
     <List/>
     <List/>
  </div>
  );
}

export default Home;
