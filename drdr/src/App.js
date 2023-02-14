import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddTree from "./pages/AddTree";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="AddTree" element={<AddTree/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
