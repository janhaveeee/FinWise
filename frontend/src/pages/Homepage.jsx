import React from 'react';
import { Link } from 'react-router-dom';

function Homepage({ setUser }) {
  const handleGetStarted = () => {
    setUser({ name: 'User', isGuest: true });
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Take Control of Your Financial Future with FinWise
              </h1>
              <p className="lead mb-4">
                AI-powered insights, smart budgeting, and personalized advice to help you 
                understand, manage, and improve your financial health.
              </p>
              <div className="d-flex gap-3">
                <Link 
                  to="/dashboard" 
                  className="btn btn-light btn-lg px-4"
                  onClick={handleGetStarted}
                >
                  Start Managing Your Money
                </Link>
                <button className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="bg-white rounded-3 p-4 shadow-lg">
                  <h3 className="text-primary mb-3">💡 Did You Know?</h3>
                  <p className="text-dark mb-0">
                    "Only 33% of adults worldwide are financially literate. 
                    Start your journey to financial freedom today!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="display-5 fw-bold">What FinWise Can Do For You</h2>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">📊</div>
                  <h5 className="card-title">Smart Budgeting</h5>
                  <p className="card-text">
                    Get AI-powered budget suggestions based on the 50/30/20 rule 
                    and your spending patterns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">🤖</div>
                  <h5 className="card-title">AI Financial Assistant</h5>
                  <p className="card-text">
                    Ask questions like "Can I afford this trip?" and get 
                    personalized financial advice instantly.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">🎯</div>
                  <h5 className="card-title">Goal Tracking</h5>
                  <p className="card-text">
                    Set and track savings goals with smart recommendations 
                    to help you reach them faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
