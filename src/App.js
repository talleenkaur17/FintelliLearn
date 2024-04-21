import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import react from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login/Login';
import Register from './components/Sign/signup';
import Dashboard from "./components/Dashboard/dashboard";
import Profile from "./components/Profile/profile"
import Juniors from "./components/Juniors/juniors";
import News from "./components/News/news";
import Budget from "./components/Budgets/budgeting";
import Quiz from "./components/Quiz/quiz";


import CaseStudy from "./components/CaseStudy/CaseStudy";





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

        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/quiz/saving" element={<CaseStudy/>} />
        <Route path="/quiz/retirement" element={<CaseStudy/>} />


        
        
     
        

        
      </Routes>
    </Router>
    </div>  
  );
}

export default App;
