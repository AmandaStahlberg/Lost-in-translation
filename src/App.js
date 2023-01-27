import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Translate from "./views/Translate";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./views/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
