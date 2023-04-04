import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainDash />}></Route>
            <Route path="/Warehouses" element={<Warehouses />}></Route>
            <Route path="/Supervisor" element={<MainDash />}></Route>
            <Route path="/Products" element={<MainDash />}></Route>
          </Routes>
        </BrowserRouter>

        <RightSide />
      </div>
    </div>
  );
}

export default App;
