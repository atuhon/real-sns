import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";


function App() {
  const {user}=useContext(AuthContext)
  //グローバルで使う事ができる、どこからでもユーザの情報を持ってくることができる。
  return (
    <Router>
      <Routes>
        {/* element→pathの場合の遷移先を指定する */}
        <Route path="/" element={user ? <Home />:<Register/>} />
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
    // user ? <Home />:<Register/>→userの情報が
  );
}

export default App;
