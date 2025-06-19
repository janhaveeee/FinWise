"use client"

import { useState } from "react"

function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: "spending",
      title: "Spending Alert",
      message: "You've spent ₹3,200 on food this week, 20% more than usual.",
      time: "2 hours ago",
      read: false,
      icon: "🍽️",
    },
    {
      id: 2,
      type: "goal",
      title: "Goal Progress",
      message: "Great job! You're 75% towards your Emergency Fund goal.",
      time: "1 day ago",
      read: false,
      icon: "🎯",
    },
    {
      id: 3,
      type: "tip",
      title: "Daily Tip",
      message: "Consider setting up automatic transfers to your savings account to build wealth consistently.",
      time: "2 days ago",
      read: true,
      icon: "💡",
    },
    {
      id: 4,
      type: "reminder",
      title: "Expense Reminder",
      message: "Don't forget to log your expenses for today!",
      time: "3 days ago",
      read: true,
      icon: "📝",
    },
  ])

  const [reminders, setReminders] = useState([
    { id: 1, text: "Log daily expenses", time: "20:00", active: true },
    { id: 2, text: "Review weekly budget", time: "10:00", active: false },
  ])

  const [newReminder, setNewReminder] = useState({ text: "", time: "" })

  const addReminder = (e) => {
    e.preventDefault()
    if (newReminder.text && newReminder.time) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          ...newReminder,
          active: true,
        },
      ])
      setNewReminder({ text: "", time: "" })
    }
  }

  const toggleReminder = (id) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, active: !reminder.active } : reminder)),
    )
  }

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-6 fw-bold">Notifications & Reminders</h1>
          <p className="text-muted">Stay on top of your financial goals with smart notifications</p>
        </div>
      </div>

      <div className="row g-4">
        {/* Recent Notifications */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Notifications</h5>
              <button className="btn btn-sm btn-outline-primary">Mark All as Read</button>
            </div>
            <div className="card-body p-0">
              {notifications.map((notification) => (
                <div key={notification.id} className={`p-3 border-bottom ${!notification.read ? "bg-light" : ""}`}>
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>
                      {notification.icon}
                    </span>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <h6 className="mb-0">{notification.title}</h6>
                        <small className="text-muted">{notification.time}</small>
                      </div>
                      <p className="mb-0 text-muted">{notification.message}</p>
                      {!notification.read && <span className="badge bg-primary mt-2">New</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Integration */}
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">📱 WhatsApp Notifications</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <strong>Coming Soon!</strong> Get daily financial tips and spending alerts directly on WhatsApp. We're
                working on Twilio integration to send you personalized messages.
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h6>What you'll receive:</h6>
                  <ul className="list-unstyled">
                    <li>✅ Daily expense reminders</li>
                    <li>✅ Weekly budget summaries</li>
                    <li>✅ Goal progress updates</li>
                    <li>✅ Smart spending alerts</li>
                    <li>✅ Financial tips & tricks</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Sample Messages:</h6>
                  <div className="bg-light p-3 rounded">
                    <small>
                      <strong>FinWise:</strong> "Good morning! 🌅 Don't forget to log yesterday's expenses. You're doing
                      great with your budget this month! 💪"
                    </small>
                  </div>
                </div>
              </div>

              <button className="btn btn-success mt-3" disabled>
                <i className="fab fa-whatsapp me-2"></i>
                Enable WhatsApp Notifications
              </button>
            </div>
          </div>
        </div>

        {/* Reminders Settings */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">⏰ Personal Reminders</h5>
            </div>
            <div className="card-body">
              {/* Add New Reminder */}
              <form onSubmit={addReminder} className="mb-4">
                <div className="mb-3">
                  <label className="form-label">Reminder Text</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReminder.text}
                    onChange={(e) => setNewReminder({ ...newReminder, text: e.target.value })}
                    placeholder="e.g., Review monthly budget"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    value={newReminder.time}
                    onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                  Add Reminder
                </button>
              </form>

              {/* Existing Reminders */}
              <div>
                <h6>Active Reminders</h6>
                {reminders.map((reminder) => (
                  <div key={reminder.id} className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <small className="d-block">{reminder.text}</small>
                      <small className="text-muted">{reminder.time}</small>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={reminder.active}
                        onChange={() => toggleReminder(reminder.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">🔔 Preferences</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Spending alerts</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Goal progress updates</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Daily financial tips</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Weekly summaries</label>
              </div>
              <button className="btn btn-outline-primary btn-sm">Save Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
