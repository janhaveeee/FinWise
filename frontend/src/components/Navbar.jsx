import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ user }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return null; // Don't show navbar on homepage
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/dashboard">
          💰 FinWise
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-transaction">Add Transaction</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/goals">Goals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">AI Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">Learn</Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                🔔 Notifications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
