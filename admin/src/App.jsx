import "./App.css";

import Home from "./components/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import Newuser from "./components/pages/newUser/Newuser";
import ProductList from "./components/pages/productList/ProductList";
import Login from "./components/pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MovieList from "./components/pages/movieList/movieList";
import List from "./components/pages/list/List";
import NewList from "./components/pages/newList/NewList";
import Movie from "./components/pages/movie/Movie";
import NewMovie from "./components/pages/newMovie/NewMovie";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newuser">
                <Newuser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
               <Route path="/lists">
                <MovieList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newmovie">
                <NewMovie />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
