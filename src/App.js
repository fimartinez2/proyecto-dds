import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Productos from "./pages/Productos";
import AddTag from "./pages/AddTag";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/add-tag" element={<AddTag />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
