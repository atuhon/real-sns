import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import Login from './pages/login/login';
import Register from './pages/register/register';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile/:username' element={<Profile/>} />
       
      </Routes>


    </Router>
  )
  
  
}

export default App;
