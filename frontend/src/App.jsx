import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import TraditionsList from "./pages/traditions/TraditionsList";
import TraditionDetail from "./pages/traditions/TraditionDetail";
import HeritageDetail from "./pages/heritages/HeritageDetail";
import HeritagesList from "./pages/heritages/HeritagesList";
import FestivalsList from "./pages/festivals/FestivalsList";
import FestivalDetail from "./pages/festivals/FestivalDetail";
import Risk from "./pages/Risk";
import StatesList from "./pages/states/StatesList";  
import StateDetail from "./pages/states/StateDetail";  
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Culture from "./pages/Culture";
import RiskAnalytics from "./pages/RiskAnalytics";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* All pages wrapped inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />   {/* 👈 Home will render inside Outlet */}
        <Route path="heritages" element={<HeritagesList />} />
        <Route path="heritages/:slug" element={<HeritageDetail />} />
        <Route path="traditions" element={<TraditionsList />} />
        <Route path="traditions/:slug" element={<TraditionDetail />} />
        <Route path="festivals" element={<FestivalsList />} />
        <Route path="festivals/:slug" element={<FestivalDetail />} />
        <Route path="risk" element={<Risk />} />
        <Route path="states" element={<StatesList />} />  
        <Route path="states/:slug" element={<StateDetail />} /> 
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/risk-analytics" element={<RiskAnalytics />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}