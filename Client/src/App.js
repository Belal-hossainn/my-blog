import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Details from "./Pages/Details/Details.jsx";
import Write from "./Pages/Editorial/Editorial.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserProfile from "./Pages/UserProfile//UserProfile";



function App() {
  const currentUser = true;
  return (
    <>
    <TopBar/>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/write" element={currentUser ? <Write/> : <Login/>}/>
      <Route exact path="/post/:postId" element={<Details/>}/>
      <Route exact path="/login" element={currentUser ? <Home/> : <Login/>}/>
      <Route exact path="/register" element={currentUser ? <Home/> : <Register/>}/>
      <Route exact path="/userProfile" element={currentUser ? <UserProfile/> : <Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
