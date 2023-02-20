import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddTree from "./pages/tree/AddTree";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Test/>}/>

        <Route path="AddTree" element={<AddTree/>}/>

        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Email" element={<Email/>}/>
        <Route path="Pw" element={<Pw/>}/>
        <Route path="AddFarm" element={<AddFarm/>}/>
        <Route path="AddFarm/:info" element={<AddFarm/>}/>
        <Route path="ViewFarm" element={<ViewFarm/>}/>
        {/* <Route path="AddCarrot" element={<AddCarrot/>}/> */}
        <Route path="ViewCarrot" element={<ViewCarrot/>}/>
        <Route path="Home" element={<Home/>}/>

        <Route path="AddCarrot" element={<AddCarrot2/>}/>
        

      </Routes>
    </div>
    
  );
}

export default App;
