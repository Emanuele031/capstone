import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import RankingPage from './pages/RankingPage';
import InfoPage from './pages/InfoPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="container" style={{ marginTop: "8em" }}>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mappa" element={<MapPage />} />
  <Route path="/ranking" element={<RankingPage />} />
  <Route path="/info" element={<InfoPage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
      </Routes>

      </div>
      <Footer />
    </div>
  );
};

export default App;
