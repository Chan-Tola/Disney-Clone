import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login.js";
import Header from "./component/Header.js";
import Home from "./component/Home.js";
import Detail from "./component/Detail.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
