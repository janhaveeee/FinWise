import React, { useState } from 'react';

function Learn() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: "Budgeting Basics",
      icon: "📊",
      description: "Learn the fundamentals of creating and managing a budget",
      content: `# Budgeting Basics

## What is Budgeting?
Budgeting is the process of creating a plan for how you'll spend your money. It helps you ensure you have enough money for the things you need and want.

## The 50/30/20 Rule
- **50% for Needs**: Rent, groceries, utilities, minimum debt payments
- **30% for Wants**: Entertainment, dining out, hobbies
- **20% for Savings**: Emergency fund, retirement, debt payoff

## Steps to Create a Budget:
1. Calculate your monthly income
2. List all your expenses
3. Categorize expenses as needs vs wants
4. Allocate money using the 50/30/20 rule
5. Track your spending
6. Adjust as needed

## Pro Tips:
- Use the envelope method for cash expenses
- Review and adjust monthly
- Be realistic with your allocations
- Include a small "fun money" category`
    },
    {
      id: 2,
      title: "Good vs Bad Debt",
      icon: "💳",
      description: "Understand the difference between good and bad debt",
      content: `# Good vs Bad Debt

## Good Debt
Debt that helps you build wealth or increase income over time:

### Examples:
- **Home Loans**: Real estate typically appreciates
- **Education Loans**: Increases earning potential
- **Business Loans**: Can generate income
- **Investment Property**: Rental income + appreciation

### Characteristics:
- Low interest rates
- Tax deductible
- Builds wealth over time

## Bad Debt
Debt for things that lose value or don't generate income:

### Examples:
- **Credit Card Debt**: High interest, depreciating purchases
- **Car Loans**: Cars depreciate rapidly
- **Personal Loans**: For consumption
- **Payday Loans**: Extremely high interest

### Characteristics:
- High interest rates
- Not tax deductible
- For depreciating assets

## Debt Management Strategy:
1. Pay off high-interest debt first
2. Consider debt consolidation
3. Avoid taking on bad debt
4. Use good debt strategically`
    },
    {
      id: 3,
      title: "7 Types of Income",
      icon: "💰",
      description: "Explore different ways to generate income",
      content: `# 7 Types of Income

## 1. Earned Income
Money from your job or business where you actively work.
- **Examples**: Salary, wages, tips, commissions
- **Tax**: Highest tax rate
- **Pros**: Predictable, immediate
- **Cons**: Limited by time, high taxes

## 2. Business Income
Profit from businesses you own and operate.
- **Examples**: Restaurant, consulting, e-commerce
- **Tax**: Business deductions available
- **Pros**: Unlimited potential, tax benefits
- **Cons**: Requires time and effort

## 3. Interest Income
Money earned from lending money or deposits.
- **Examples**: Savings accounts, bonds, peer-to-peer lending
- **Tax**: Taxed as ordinary income
- **Pros**: Passive, predictable
- **Cons**: Low returns, inflation risk

## 4. Dividend Income
Payments from owning stocks in companies.
- **Examples**: Stock dividends, mutual fund distributions
- **Tax**: Often taxed at lower rates
- **Pros**: Passive, potential growth
- **Cons**: Market risk, not guaranteed

## 5. Rental Income
Money from renting out property.
- **Examples**: Residential, commercial, equipment rental
- **Tax**: Depreciation benefits
- **Pros**: Monthly cash flow, appreciation
- **Cons**: Property management, vacancy risk

## 6. Capital Gains
Profit from selling assets for more than you paid.
- **Examples**: Stocks, real estate, collectibles
- **Tax**: Lower tax rates for long-term gains
- **Pros**: Significant profit potential
- **Cons**: Market timing, risk of loss

## 7. Royalty Income
Money from intellectual property or natural resources.
- **Examples**: Books, music, patents, oil/gas rights
- **Tax**: Various tax treatments
- **Pros**: Passive, long-term potential
- **Cons**: Difficult to create, uncertain income`
    },
    {
      id: 4,
      title: "Investment Basics",
      icon: "📈",
      description: "Learn the fundamentals of investing",
      content: `# Investment Basics

## What is Investing?
Investing is putting money into assets with the expectation of generating income or profit over time.

## Key Investment Principles:

### 1. Start Early
- Time is your biggest advantage
- Compound interest works best over long periods
- Even small amounts can grow significantly

### 2. Diversification
- Don't put all eggs in one basket
- Spread risk across different assets
- Mix of stocks, bonds, real estate

### 3. Risk vs Return
- Higher potential returns = higher risk
- Understand your risk tolerance
- Balance growth and safety

## Common Investment Options:

### Mutual Funds
- **What**: Pool of money from many investors
- **Pros**: Professional management, diversification
- **Cons**: Fees, no control over holdings

### Index Funds
- **What**: Tracks a market index (like Nifty 50)
- **Pros**: Low fees, broad diversification
- **Cons**: Average market returns

### SIP (Systematic Investment Plan)
- **What**: Regular monthly investments
- **Pros**: Rupee cost averaging, disciplined investing
- **Cons**: Requires consistency

### Fixed Deposits
- **What**: Guaranteed returns from banks
- **Pros**: Safe, predictable
- **Cons**: Low returns, inflation risk

## Getting Started:
1. Build emergency fund first
2. Start with SIP in diversified mutual funds
3. Increase investments as income grows
4. Review and rebalance annually`
    },
    {
      id: 5,
      title: "Emergency Fund",
      icon: "🛡️",
      description: "Why and how to build an emergency fund",
      content: `# Emergency Fund Guide

## What is an Emergency Fund?
Money set aside specifically for unexpected expenses or financial emergencies.

## Why You Need One:
- **Job Loss**: Covers expenses while finding new work
- **Medical Emergencies**: Unexpected health costs
- **Home/Car Repairs**: Major unexpected repairs
- **Peace of Mind**: Reduces financial stress

## How Much to Save:
- **Minimum**: ₹10,000 to start
- **Basic**: 3 months of expenses
- **Ideal**: 6 months of expenses
- **Conservative**: 12 months of expenses

## Where to Keep It:
### High-Yield Savings Account
- **Pros**: Easy access, earns interest
- **Cons**: Lower returns than investments

### Liquid Mutual Funds
- **Pros**: Better returns than savings
- **Cons**: 1-2 day withdrawal time

### Fixed Deposits (Short-term)
- **Pros**: Guaranteed returns
- **Cons**: Penalty for early withdrawal

## Building Your Emergency Fund:

### Step 1: Start Small
- Begin with ₹1,000
- Gradually increase the target

### Step 2: Automate
- Set up automatic transfers
- Treat it like a bill

### Step 3: Use Windfalls
- Tax refunds
- Bonuses
- Gift money

### Step 4: Separate Account
- Keep it separate from daily banking
- Reduces temptation to spend

## When to Use It:
✅ **Use For:**
- Job loss
- Medical emergencies
- Major home repairs
- Car breakdown

❌ **Don't Use For:**
- Vacations
- Shopping
- Planned expenses
- Investments

## Replenishing:
- Replace money used immediately
- Adjust size as expenses change
- Review annually`
    }
  ];

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-6 fw-bold">Learn & Grow</h1>
          <p className="text-muted">Master financial concepts with our AI-powered learning modules</p>
        </div>
      </div>

      <div className="row">
        {/* Topics List */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">📚 Learning Topics</h5>
            </div>
            <div className="list-group list-group-flush">
              {topics.map(topic => (
                <button
                  key={topic.id}
                  className={`list-group-item list-group-item-action ${
                    selectedTopic?.id === topic.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{fontSize: '1.5rem'}}>{topic.icon}</span>
                    <div>
                      <h6 className="mb-1">{topic.title}</h6>
                      <small className={selectedTopic?.id === topic.id ? 'text-white-50' : 'text-muted'}>
                        {topic.description}
                      </small>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-lg-8">
          {selectedTopic ? (
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  {selectedTopic.icon} {selectedTopic.title}
                </h5>
              </div>
              <div className="card-body">
                <div style={{whiteSpace: 'pre-line', lineHeight: '1.6'}}>
                  {selectedTopic.content}
                </div>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-body text-center py-5">
                <div className="display-1 mb-3">🎓</div>
                <h3>Welcome to Financial Learning</h3>
                <p className="text-muted mb-4">
                  Select a topic from the left to start learning about personal finance.
                  Our AI-powered content will help you understand complex financial concepts
                  in simple terms.
                </p>
                <div className="alert alert-info">
                  <strong>💡 Pro Tip:</strong> Start with "Budgeting Basics" if you're new to personal finance!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Q&A Section */}
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🤖 Ask FinWise Tutor</h5>
            </div>
            <div className="card-body">
              <p>Have a specific financial question? Ask our AI tutor!</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., What is compound interest? How do mutual funds work?"
                />
                <button className="btn btn-primary">Ask Question</button>
              </div>
              <div className="mt-3">
                <small className="text-muted">
                  Popular questions: "What is SIP?", "How to calculate EMI?", "What is credit score?"
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
