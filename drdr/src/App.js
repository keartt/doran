import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddTree from "./pages/tree/AddTree";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import Home from "./pages/tree/home";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="AddTree" element={<AddTree/>}/>
        <Route path="Home" element={<Home/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
