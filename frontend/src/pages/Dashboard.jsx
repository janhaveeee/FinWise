import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ transactions, goals }) {
  // Calculate financial summary
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const netWorth = totalIncome - totalExpenses;
  
  // 50/30/20 budget calculation
  const needs = totalIncome * 0.5;
  const wants = totalIncome * 0.3;
  const savings = totalIncome * 0.2;
  
  const currentNeeds = transactions
    .filter(t => t.type === 'expense' && ['Rent', 'Food', 'Transport'].includes(t.category))
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-6 fw-bold">Financial Dashboard</h1>
          <p className="text-muted">Welcome back! Here's your financial overview.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Total Income</h5>
              <h3 className="mb-0">₹{totalIncome.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <h3 className="mb-0">₹{totalExpenses.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Net Worth</h5>
              <h3 className="mb-0">₹{netWorth.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Savings Rate</h5>
              <h3 className="mb-0">{((netWorth/totalIncome)*100).toFixed(1)}%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* 50/30/20 Budget */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">50/30/20 Budget Breakdown</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Needs (50%)</span>
                  <span>₹{needs.toLocaleString()}</span>
                </div>
                <div className="progress mb-2">
                  <div 
                    className="progress-bar bg-warning" 
                    style={{width: `${(currentNeeds/needs)*100}%`}}
                  ></div>
                </div>
                <small className="text-muted">Used: ₹{currentNeeds.toLocaleString()}</small>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Wants (30%)</span>
                  <span>₹{wants.toLocaleString()}</span>
                </div>
                <div className="progress mb-2">
                  <div className="progress-bar bg-info" style={{width: '45%'}}></div>
                </div>
                <small className="text-muted">Used: ₹{(wants*0.45).toLocaleString()}</small>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Savings (20%)</span>
                  <span>₹{savings.toLocaleString()}</span>
                </div>
                <div className="progress mb-2">
                  <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                </div>
                <small className="text-muted">Saved: ₹{(savings*0.6).toLocaleString()}</small>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🤖 AI Insights</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <strong>Smart Suggestion:</strong> You're doing great with your savings! 
                Consider increasing your emergency fund to 6 months of expenses.
              </div>
              
              <div className="alert alert-warning">
                <strong>Spending Alert:</strong> Your food expenses are 20% higher than 
                last month. Consider meal planning to optimize costs.
              </div>
              
              <Link to="/chat" className="btn btn-primary">
                Ask FinWise Assistant
              </Link>
            </div>
          </div>
        </div>

        {/* Goals Progress */}
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Goal Progress</h5>
              <Link to="/goals" className="btn btn-sm btn-outline-primary">
                Manage Goals
              </Link>
            </div>
            <div className="card-body">
              <div className="row">
                {goals.map(goal => (
                  <div key={goal.id} className="col-md-6 mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium">{goal.title}</span>
                      <span>{((goal.current/goal.target)*100).toFixed(0)}%</span>
                    </div>
                    <div className="progress mb-2">
                      <div 
                        className="progress-bar" 
                        style={{width: `${(goal.current/goal.target)*100}%`}}
                      ></div>
                    </div>
                    <small className="text-muted">
                      ₹{goal.current.toLocaleString()} of ₹{goal.target.toLocaleString()}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
