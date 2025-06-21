"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import AddTransaction from "./pages/AddTransaction"
import Goals from "./pages/Goals"
import ChatAssistant from "./pages/ChatAssistant"
import Learn from "./pages/Learn"
import Notifications from "./pages/Notifications"
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from "./ProtectedRoute"

function App() {
  const [user, setUser] = useState(null)
  const [transactions, setTransactions] = useState([
    { id: 1, type: "income", amount: 50000, category: "Salary", date: "2024-01-01", description: "Monthly salary" },
    { id: 2, type: "expense", amount: 15000, category: "Rent", date: "2024-01-02", description: "Monthly rent" },
    { id: 3, type: "expense", amount: 3000, category: "Food", date: "2024-01-03", description: "Groceries" },
  ])
  const [goals, setGoals] = useState([
    { id: 1, title: "Emergency Fund", target: 100000, current: 60000, deadline: "2024-06-01" },
    { id: 2, title: "Vacation Fund", target: 25000, current: 8000, deadline: "2024-04-01" },
  ])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }])
  }

  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now(), current: 0 }])
  }

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Homepage setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard transactions={transactions} goals={goals} />} />
          <Route path="/add-transaction" element={<AddTransaction addTransaction={addTransaction} />} />
          <Route path="/goals" element={<Goals goals={goals} addGoal={addGoal} />} />
          <Route path="/chat" element={<ChatAssistant transactions={transactions} />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-transaction" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
