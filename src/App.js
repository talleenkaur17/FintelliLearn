import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import react from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login/Login';
import Register from './components/Sign/signup';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        
      </Routes>
    </Router>
  </div>
    
    
    
    
  );
}

export default App;
