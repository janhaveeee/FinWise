"use client"

import { useState } from "react"

function ChatAssistant({ transactions }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hi! I'm your FinWise AI assistant. I can help you with budgeting, financial planning, and answer questions about your money. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    "Can I afford a ₹15,000 vacation?",
    "How can I save more money?",
    "What's my spending pattern?",
    "Should I invest or save?",
    "How to build an emergency fund?",
  ]

  const generateResponse = (question) => {
    const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

    const totalExpenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

    if (question.toLowerCase().includes("afford")) {
      const amount = question.match(/₹([\d,]+)/)?.[1]?.replace(",", "") || "15000"
      const surplus = totalIncome - totalExpenses
      return `Based on your current finances, you have a monthly surplus of ₹${surplus.toLocaleString()}. ${
        surplus >= Number.parseInt(amount)
          ? `Yes, you can afford ₹${Number.parseInt(amount).toLocaleString()}! Just make sure it aligns with your savings goals.`
          : `It might be tight to afford ₹${Number.parseInt(amount).toLocaleString()} right now. Consider saving for a few months first.`
      }`
    }

    if (question.toLowerCase().includes("save more")) {
      return `Here are some ways to save more money:
      
1. **Track your expenses** - You're already doing this! 
2. **Follow the 50/30/20 rule** - 50% needs, 30% wants, 20% savings
3. **Cut unnecessary subscriptions** - Review monthly subscriptions
4. **Cook at home more** - Can save ₹3,000-5,000 monthly
5. **Set up automatic savings** - Pay yourself first!

Your current savings rate is ${(((totalIncome - totalExpenses) / totalIncome) * 100).toFixed(1)}%. Aim for at least 20%!`
    }

    if (question.toLowerCase().includes("spending pattern")) {
      const expensesByCategory = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
          acc[t.category] = (acc[t.category] || 0) + t.amount
          return acc
        }, {})

      const topCategories = Object.entries(expensesByCategory)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)

      return `Here's your spending breakdown:

${topCategories.map(([cat, amount], i) => `${i + 1}. **${cat}**: ₹${amount.toLocaleString()}`).join("\n")}

**Total Monthly Expenses**: ₹${totalExpenses.toLocaleString()}

💡 **Insight**: Your biggest expense category is ${topCategories[0]?.[0]}. Consider if there are ways to optimize this spending.`
    }

    if (question.toLowerCase().includes("invest") || question.toLowerCase().includes("save")) {
      return `Great question! Here's a simple framework:

**Save First (Emergency Fund):**
- Build 3-6 months of expenses (₹${(totalExpenses * 3).toLocaleString()} - ₹${(totalExpenses * 6).toLocaleString()})
- Keep in high-yield savings account

**Then Invest:**
- Start with SIP in diversified mutual funds
- Begin with ₹2,000-5,000 monthly
- Consider index funds for beginners

**Your situation**: With ₹${(totalIncome - totalExpenses).toLocaleString()} monthly surplus, I'd suggest saving ₹${Math.floor((totalIncome - totalExpenses) * 0.6).toLocaleString()} and investing ₹${Math.floor((totalIncome - totalExpenses) * 0.4).toLocaleString()}.`
    }

    if (question.toLowerCase().includes("emergency fund")) {
      const targetEmergencyFund = totalExpenses * 6
      return `An emergency fund should cover 3-6 months of expenses.

**Your target**: ₹${targetEmergencyFund.toLocaleString()} (6 months of expenses)

**How to build it:**
1. Start with ₹1,000 if you're new to saving
2. Automate ₹${Math.min(5000, Math.floor((totalIncome - totalExpenses) * 0.3)).toLocaleString()} monthly transfer
3. Keep it in a separate high-yield savings account
4. Don't touch it unless it's a real emergency!

**Timeline**: At ₹${Math.min(5000, Math.floor((totalIncome - totalExpenses) * 0.3)).toLocaleString()}/month, you'll reach your goal in ${Math.ceil(targetEmergencyFund / Math.min(5000, Math.floor((totalIncome - totalExpenses) * 0.3)))} months.`
    }

    return "I understand you're asking about financial planning. Based on your current financial situation, I'd recommend focusing on budgeting, building an emergency fund, and setting clear financial goals. Feel free to ask more specific questions about your finances!"
  }

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: "bot",
        content: generateResponse(message),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card" style={{ height: "70vh" }}>
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">🤖 FinWise AI Assistant</h5>
              <small>Ask me anything about your finances!</small>
            </div>

            {/* Chat Messages */}
            <div className="card-body d-flex flex-column" style={{ height: "100%" }}>
              <div className="flex-grow-1 overflow-auto mb-3" style={{ maxHeight: "400px" }}>
                {messages.map((message) => (
                  <div key={message.id} className={`mb-3 ${message.type === "user" ? "text-end" : ""}`}>
                    <div
                      className={`d-inline-block p-3 rounded-3 ${
                        message.type === "user" ? "bg-primary text-white" : "bg-light"
                      }`}
                      style={{ maxWidth: "80%" }}
                    >
                      <div style={{ whiteSpace: "pre-line" }}>{message.content}</div>
                      <small className={`d-block mt-1 ${message.type === "user" ? "text-white-50" : "text-muted"}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </small>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="mb-3">
                    <div className="d-inline-block p-3 rounded-3 bg-light">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              <div className="mb-3">
                <small className="text-muted">Quick questions:</small>
                <div className="d-flex flex-wrap gap-2 mt-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleSendMessage(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ask me about your finances..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatAssistant
