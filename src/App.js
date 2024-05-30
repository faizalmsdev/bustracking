import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRoute from "./routes/PublicRoute"
import DriverLogin from './pages/driverLogin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<DriverLogin />} />
          <Route path="/" element={<PublicRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;