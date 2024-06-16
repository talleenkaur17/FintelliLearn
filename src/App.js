import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Sign/signup";
import Dashboard from "./components/Dashboard/dashboard";
import Profile from "./components/Profile/profile";
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
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import PennyPlanner from "./components/PennyPlanner/PennyPlanner";
import InflationCalculator from "./components/InflationCalculator/InflationCalculator";
import Retirement from "./components/Retirement/Retirement";
import Forum from "./components/forum/Forum.tsx";
import Finpro from "./components/Finpro/finpro.jsx";
import Hungman from "./components/hungman/hungman.jsx";
import LiveMentoring from "./components/Finpro/Livementoring";
import Goodies from "./components/Finpro/Goodies.jsx";
import Premiumcourses from "./components/Finpro/Premiumcourses.jsx";
import FinancialFortune from "./components/FinancialFortune/Home.jsx";
import Financialresult from "./components/FinancialFortune/Result.jsx";
import IntroSaving from "./components/JuniorArticles/IntroSaving.jsx";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} />}
          />
          <Route
            path="/juniors"
            element={<ProtectedRoute element={Juniors} />}
          />
          <Route
            path="/seniors"
            element={<ProtectedRoute element={Seniors} />}
          />
          <Route
            path="/budgeting"
            element={<ProtectedRoute element={Budget} />}
          />
          <Route path="/quiz" element={<ProtectedRoute element={Quiz} />} />
          <Route
            path="/quiz/saving"
            element={<ProtectedRoute element={CaseStudy} />}
          />
          <Route
            path="/quiz/retirement"
            element={<ProtectedRoute element={CaseStudy} />}
          />
          <Route
            path="/calculate"
            element={<ProtectedRoute element={FinanceCalculator} />}
          />
          <Route
            path="/compound-interest"
            element={<ProtectedRoute element={Compound} />}
          />
          <Route
            path="/tracker"
            element={<ProtectedRoute element={Tracker} />}
          />
          <Route path="/financialhome" element={<FinancialFortune />} />
          <Route path="/result" element={<Financialresult />} />
          <Route
            path="/retirement-calculator"
            element={<ProtectedRoute element={Retirement} />}
          />
          <Route path="/games" element={<ProtectedRoute element={Games} />} />
          <Route
            path="/savings"
            element={<ProtectedRoute element={Savings} />}
          />
          <Route
            path="/power-of-saving"
            element={<ProtectedRoute element={ImpSavings} />}
          />
          <Route
            path="/inflation"
            element={<ProtectedRoute element={InflationCalculator} />}
          />
          <Route
            path="/master-saving"
            element={<ProtectedRoute element={Master} />}
          />
          <Route path="/news" element={<ProtectedRoute element={News} />} />
          <Route path="/forum" element={<ProtectedRoute element={Forum} />} />
          <Route
            path="/Finpro"
            element={<ProtectedRoute element={Finpro} />} // Add the Finpro route here
          />

          <Route
            path="/livementoring"
            element={<ProtectedRoute element={LiveMentoring} />}
          />
          <Route
            path="/premiumcourses"
            element={<ProtectedRoute element={Premiumcourses} />}
          />
          <Route
            path="/goodies"
            element={<ProtectedRoute element={Goodies} />}
          />
          <Route
            path="/introduction-to-saving"
            element={<ProtectedRoute element={IntroSaving} />}
          />
          <Route
            path="/bot"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <Bot />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-hangman"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <Hungman />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-stroop"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <FinancialFortune />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-penny"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <PennyPlanner />
                  </ContextProvider>
                )}
              />
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
