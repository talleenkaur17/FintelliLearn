import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import react from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login/Login';
import Register from './components/Sign/signup';
import Dashboard from "./components/Dashboard/dashboard";
import Profile from "./components/Profile/profile"
import Juniors from "./components/Juniors/juniors";
import News from "./components/News/news";
import Budget from "./components/Budgets/budgeting";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/juniors" element={<Juniors/>} />
        <Route path="/juniors" element={<Juniors/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/budgeting" element={<Budget/>} />
        
        
     
        

        
      </Routes>
    </Router>
  </div>
    
    
    
    
  );
}

export default App;
