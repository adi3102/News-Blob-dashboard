import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payouts from "./components/Payouts";
import PageNotFound from "./components/PageNotFound";
import NewsManagement from "./components/News";
import News from "./components/News";
import DashboardLayout from "./components/DashboardLayout";
React;

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dash" element={<DashboardLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/news" element={<News />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
