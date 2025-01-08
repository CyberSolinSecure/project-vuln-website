import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import CommentPage from "./pages/CommentPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/Home";
import DocsPage from "./pages/DocsPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

   
          <Routes>
          <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/comment" element={<CommentPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/docs" element={<DocsPage></DocsPage>} />
          </Routes>
    
      </div>
    </Router>
  );
};

export default App;
