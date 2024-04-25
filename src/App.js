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
import FinanceCalculator from "./components/FinanceCalculator/FinanceCalculator";
import Compound from "./components/CompoundInterest/Compound";
import CompoundReview from "./components/CompoundReview/CompoundReview";
import Tracker from "./components/tracker/tracker";
import InvestmentTime from "./components/InvestmentTime/InvestmentTime";
import Seniors from "./components/Seniors/Seniors";
import Games from "./components/Games/Games";
import Savings from "./components/Savings/Savings";
import ImpSavings from "./components/ImpSavings/ImpSavings";
import Master from "./components/MasterSaving/Master";
import Bot from "./bot";
import ContextProvider from "./context/context";


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
        <Route path="/seniors" element={<Seniors/>} />
       
        <Route path="/news" element={<News/>} />
        <Route path="/budgeting" element={<Budget/>} />

        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/quiz/saving" element={<CaseStudy/>} />
        <Route path="/quiz/retirement" element={<CaseStudy/>} />
        <Route path="/calculate" element={<FinanceCalculator/>} />
        <Route  path="/compound-interest" element={<Compound />}/>
        
        <Route  path="/tracker" element={<Tracker />}/>
        <Route  path="/investment" element={<InvestmentTime/>}/>
        <Route  path="/games" element={<Games/>}/>
        <Route  path="/savings" element={<Savings/>}/>
        <Route  path="/power-of-saving" element={<ImpSavings/>}/>
        <Route  path="/master-saving" element={<Master/>}/>
        <Route  path="/bot" element={<ContextProvider><Bot/></ContextProvider>}/>
      
    
       

      

        
        
     
        

        
      </Routes>
    </Router>
    </div>  
  );
}

export default App;
