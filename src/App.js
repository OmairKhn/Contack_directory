import logo from "./logo.svg";
import "./App.css";
import {Read} from "./Components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/nav";
import { Create } from "./Components/Create";
import Detail from "./Components/Detail";
import Update from "./Components/Update";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="main_page">
      
      <HashRouter >
        <Nav />
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
           <Route path="/detail" element={<Detail/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
