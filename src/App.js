import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/LoginPage";
import Translate from "./views/TranslationPage";
import Profile from "./views/ProfilePage";
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
