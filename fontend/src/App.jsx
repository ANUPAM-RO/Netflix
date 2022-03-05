import "./App.scss";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter , Switch , Route,Redirect} from "react-router-dom";
import Logout from "./pages/logout/Logout";
const App =()=> {
  const user = true;
  return (
    <>
   <BrowserRouter>
    <Switch>
     <Route  exact path="/" >
     {user ?  <Home/> : 
       <Redirect to ="/register"/>}
       </Route>

       <Route path="/register" >
     {!user ?  <Register/> : 
       <Redirect to ="/"/>}
       </Route> 

      <Route path="/login" >
     {!user ?  <Login/> : 
       <Redirect to ="/"/>}
       </Route>  
    {
      user && (
        <>
        <Route  path="/movies" component={Home} type="movies" />
        <Route  path="/series" component={Home} type="series" />
        <Route  path="/watch" component={Watch} />
        <Route  path="/register" component={Register} />
        <Route  path="/login" component={Login} />
        <Route  path="/logout" component={Logout} />
        </>
      )
    }
      
    </Switch >
   </BrowserRouter> 
    
  </>
  

  );
}

export default App;
