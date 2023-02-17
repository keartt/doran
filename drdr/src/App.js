import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddFarm from "./pages/tree/AddFarm";
import AddCarrot from "./pages/tree/AddCarrot";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import Email from "./pages/member/Email";
import Pw from "./pages/member/Pw";
import Home from "./pages/tree/home";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Email" element={<Email/>}/>
        <Route path="Pw" element={<Pw/>}/>
        <Route path="AddFarm" element={<AddFarm/>}/>
        <Route path="AddCarrot" element={<AddCarrot/>}/>
        <Route path="Home" element={<Home/>}/>
      </Routes>
    </div>
    
  );
}

export default App;