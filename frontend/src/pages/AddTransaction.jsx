import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function AddTransaction() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const categories = {
    expense: ['Food', 'Rent', 'Entertainment', 'Transport', 'Healthcare', 'Shopping', 'Other'],
    income: ['Salary', 'Freelance', 'Investment', 'Business', 'Other']
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        alert("You must be logged in to add a transaction.");
        navigate('/login'); // 🔁 redirect to login
        return;
      }

      const token = await user.getIdToken();

      const res = await fetch("http://localhost:8000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // ✅ Correct format
        },
        body: JSON.stringify({
          ...formData,
          amount: parseFloat(formData.amount)
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Transaction added! AI Suggested Category: ${data.aiSuggestedCategory || 'N/A'}`);
        navigate("/dashboard");
      } else {
        console.error("Server error:", data);
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed to add transaction.");
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Add New Transaction</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Transaction Type */}
                <div className="mb-3">
                  <label className="form-label">Transaction Type</label>
                  <div className="btn-group w-100" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="type"
                      id="expense"
                      value="expense"
                      checked={formData.type === 'expense'}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-danger" htmlFor="expense">
                      💸 Expense
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="type"
                      id="income"
                      value="income"
                      checked={formData.type === 'income'}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-success" htmlFor="income">
                      💰 Income
                    </label>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories[formData.type].map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Optional description..."
                  ></textarea>
                </div>

                {/* AI Suggestion */}
                {formData.amount && formData.category && (
                  <div className="alert alert-info">
                    <strong>🤖 AI Suggestion:</strong>{" "}
                    {formData.type === 'expense' && formData.amount > 5000
                      ? "This seems like a significant expense. Consider if this aligns with your budget goals."
                      : "Great! This transaction looks reasonable for your spending pattern."}
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Add Transaction
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/dashboard')}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
