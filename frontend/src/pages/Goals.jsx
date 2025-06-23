import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Goals() {
  const [goals, setGoals] = useState([]);
  const [mlTips, setMlTips] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    deadline: ''
  });

  // Fetch goals on mount
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/goals');
        setGoals(res.data);

        // 🔁 Also fetch ML tip for each goal
        for (const goal of res.data) {
          const daysLeft = Math.ceil(
            (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
          );
          const input = {
            target: goal.target,
            current: goal.current || 0,
            income: goal.income || 0,
            expenses: goal.expenses || 0,
            daysLeft
          };

          try {
            const res = await axios.post('http://localhost:8000/api/ml-tip', input);
            setMlTips(prev => ({
              ...prev,
              [goal.id]: res.data.recommendedDailySaving
            }));
          } catch (err) {
            console.warn(`Failed ML tip for goal ${goal.id}:`, err.message);
          }
        }
      } catch (err) {
        console.error('Error fetching goals:', err);
      }
    };
    fetchGoals();
  }, []);

  // Add goal
  const addGoal = async (goal) => {
    try {
      const res = await axios.post('http://localhost:8000/api/goals', goal);
      setGoals(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Error adding goal:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal({
      ...newGoal,
      target: parseFloat(newGoal.target)
    });
    setNewGoal({ title: '', target: '', deadline: '' });
    setShowForm(false);
  };

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-6 fw-bold">Financial Goals</h1>
            <button 
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : '+ Add New Goal'}
            </button>
          </div>
        </div>
      </div>

      {/* Add Goal Form */}
      {showForm && (
        <div className="row mb-4">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Create New Goal</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Goal Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                      placeholder="e.g., Emergency Fund, Vacation, New Car"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Target Amount (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newGoal.target}
                      onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Target Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={newGoal.deadline}
                      onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                      required
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-success">
                    Create Goal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Goals List */}
      <div className="row g-4">
        {goals.map(goal => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const daysLeft = Math.ceil(
            (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
          );

          return (
            <div key={goal.id} className="col-lg-6">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{goal.title}</h5>
                  <span className="badge bg-primary">{progress.toFixed(0)}%</span>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="progress mb-2" style={{height: '10px'}}>
                      <div 
                        className="progress-bar" 
                        style={{width: `${progress}%`}}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between text-sm">
                      <span>₹{goal.current.toLocaleString()}</span>
                      <span>₹{goal.target.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="border-end">
                        <h6 className="text-muted mb-1">Remaining</h6>
                        <p className="mb-0 fw-bold">₹{remaining.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <h6 className="text-muted mb-1">Days Left</h6>
                      <p className="mb-0 fw-bold">{daysLeft > 0 ? daysLeft : 'Overdue'}</p>
                    </div>
                  </div>

                  {/* AI Suggestion */}
                  <div className="mt-3">
                    <div className="alert alert-info py-2">
                      <small>
                        <strong>🤖 AI Tip:</strong>{' '}
                        {mlTips[goal.id]
                          ? `Save ₹${mlTips[goal.id]} daily to reach your goal on time.`
                          : 'Calculating recommendation...'}
                      </small>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {goals.length === 0 && (
          <div className="col-12">
            <div className="text-center py-5">
              <div className="display-1 mb-3">🎯</div>
              <h3>No Goals Set Yet</h3>
              <p className="text-muted">Start by creating your first financial goal!</p>
              <button 
                className="btn btn-primary"
                onClick={() => setShowForm(true)}
              >
                Create Your First Goal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Goals;
